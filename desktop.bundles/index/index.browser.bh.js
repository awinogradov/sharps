modules.define('bh', [], function(provide) {
var BH = (function() {

var lastGenId = 0;

/**
 * BH: BEMJSON -> HTML процессор.
 * @constructor
 */
function BH() {
    /**
     * Используется для идентификации шаблонов.
     * Каждому шаблону дается уникальный id для того, чтобы избежать повторного применения
     * шаблона к одному и тому же узлу BEMJSON-дерева.
     * @type {Number}
     * @private
     */
    this._lastMatchId = 0;
    /**
     * Плоский массив для хранения матчеров.
     * Каждый элемент — массив с двумя элементами: [{String} выражение, {Function} шаблон}]
     * @type {Array}
     * @private
     */
    this._matchers = [];
    /**
     * Флаг, включающий автоматическую систему поиска зацикливаний. Следует использовать в development-режиме,
     * чтобы определять причины зацикливания.
     * @type {Boolean}
     * @private
     */
    this._infiniteLoopDetection = false;

    /**
     * Неймспейс для библиотек. Сюда можно писать различный функционал для дальнейшего использования в шаблонах.
     * ```javascript
     * bh.lib.objects = bh.lib.objects || {};
     * bh.lib.objects.inverse = bh.lib.objects.inverse || function(obj) { ... };
     * ```
     * @type {Object}
     */
    this.lib = {};
    this._inited = false;
    /**
     * Опции BH. Задаются через setOptions.
     * @type {Object}
     */
    this._options = {};
    this._optJsAttrName = 'onclick';
    this._optJsAttrIsJs = true;
    this._optEscapeContent = false;
    this.utils = {
        _expandoId: new Date().getTime(),
        bh: this,
        /**
         * Проверяет, что объект является примитивом.
         * ```javascript
         * bh.match('link', function(ctx) {
         *     ctx.tag(ctx.isSimple(ctx.content()) ? 'span' : 'div');
         * });
         * ```
         * @param {*} obj
         * @returns {Boolean}
         */
        isSimple: function(obj) {
            if (!obj || obj === true) return true;
            var t = typeof obj;
            return t === 'string' || t === 'number';
        },
        /**
         * Расширяет один объект свойствами другого (других).
         * Аналог jQuery.extend.
         * ```javascript
         * obj = ctx.extend(obj, {a: 1});
         * ```
         * @param {Object} target
         * @returns {Object}
         */
        extend: function(target) {
            if (!target || typeof target !== 'object') {
                target = {};
            }
            for (var i = 1, len = arguments.length; i < len; i++) {
                var obj = arguments[i],
                    key;
                /* istanbul ignore else */
                if (obj) {
                    for (key in obj) {
                        target[key] = obj[key];
                    }
                }
            }
            return target;
        },
        /**
         * Возвращает позицию элемента в рамках родителя.
         * Отсчет производится с 1 (единицы).
         * ```javascript
         * bh.match('list__item', function(ctx) {
         *     ctx.mod('pos', ctx.position());
         * });
         * ```
         * @returns {Number}
         */
        position: function() {
            var node = this.node;
            return node.index === 'content' ? 1 : node.position;
        },
        /**
         * Возвращает true, если текущий BEMJSON-элемент первый в рамках родительского BEMJSON-элемента.
         * ```javascript
         * bh.match('list__item', function(ctx) {
         *     if (ctx.isFirst()) {
         *         ctx.mod('first', 'yes');
         *     }
         * });
         * ```
         * @returns {Boolean}
         */
        isFirst: function() {
            var node = this.node;
            return node.index === 'content' || node.position === 1;
        },
        /**
         * Возвращает true, если текущий BEMJSON-элемент последний в рамках родительского BEMJSON-элемента.
         * ```javascript
         * bh.match('list__item', function(ctx) {
         *     if (ctx.isLast()) {
         *         ctx.mod('last', 'yes');
         *     }
         * });
         * ```
         * @returns {Boolean}
         */
        isLast: function() {
            var node = this.node;
            return node.index === 'content' || node.position === node.arr._listLength;
        },
        /**
         * Передает параметр вглубь BEMJSON-дерева.
         * **force** — задать значение параметра даже если оно было задано ранее.
         * ```javascript
         * bh.match('input', function(ctx) {
         *     ctx.content({ elem: 'control' });
         *     ctx.tParam('value', ctx.param('value'));
         * });
         * bh.match('input__control', function(ctx) {
         *     ctx.attr('value', ctx.tParam('value'));
         * });
         * ```
         * @param {String} key
         * @param {*} value
         * @param {Boolean} [force]
         * @returns {*|Ctx}
         */
        tParam: function(key, value, force) {
            var keyName = '__tp_' + key;
            var node = this.node;
            if (arguments.length > 1) {
                if (force || !node.hasOwnProperty(keyName))
                    node[keyName] = value;
                return this;
            } else {
                while (node) {
                    if (node.hasOwnProperty(keyName)) {
                        return node[keyName];
                    }
                    node = node.parentNode;
                }
                return undefined;
            }
        },
        /**
         * Применяет матчинг для переданного фрагмента BEMJSON.
         * Возвращает результат преобразований.
         * @param {BemJson} bemJson
         * @returns {Object|Array}
         */
        apply: function(bemJson) {
            var prevCtx = this.ctx,
                prevNode = this.node;
            var res = this.bh.processBemJson(bemJson, prevCtx.block);
            this.ctx = prevCtx;
            this.node = prevNode;
            return res;
        },
        /**
         * Выполняет преобразования данного BEMJSON-элемента остальными шаблонами.
         * Может понадобиться, например, чтобы добавить элемент в самый конец содержимого, если в базовых шаблонах в конец содержимого добавляются другие элементы.
         * Пример:
         * ```javascript
         * bh.match('header', function(ctx) {
         *    ctx.content([
         *        ctx.content(),
         *        { elem: 'under' }
         *    ], true);
         * });
         * bh.match('header_float_yes', function(ctx) {
         *    ctx.applyBase();
         *    ctx.content([
         *        ctx.content(),
         *        { elem: 'clear' }
         *    ], true);
         * });
         * ```
         * @returns {Ctx}
         */
        applyBase: function() {
            var node = this.node;
            var json = node.json;

            if (!json.elem && json.mods) json.blockMods = json.mods;
            var block = json.block;
            var blockMods = json.blockMods;

            var subRes = this.bh._fastMatcher(this, json);
            if (subRes !== undefined) {
                this.ctx = node.arr[node.index] = node.json = subRes;
                node.blockName = block;
                node.blockMods = blockMods;
            }
            return this;
        },
        /**
         * Останавливает выполнение прочих шаблонов для данного BEMJSON-элемента.
         * Пример:
         * ```javascript
         * bh.match('button', function(ctx) {
         *     ctx.tag('button', true);
         * });
         * bh.match('button', function(ctx) {
         *     ctx.tag('span');
         *     ctx.stop();
         * });
         * ```
         * @returns {Ctx}
         */
        stop: function() {
            this.ctx._stop = true;
            return this;
        },
        /**
         * Возвращает уникальный идентификатор. Может использоваться, например,
         * чтобы задать соответствие между `label` и `input`.
         * @returns {String}
         */
        generateId: function() {
            return 'uniq' + this._expandoId + (++lastGenId);
        },
        /**
         * Возвращает/устанавливает модификатор в зависимости от аргументов.
         * **force** — задать модификатор даже если он был задан ранее.
         * ```javascript
         * bh.match('input', function(ctx) {
         *     ctx.mod('native', 'yes');
         *     ctx.mod('disabled', true);
         * });
         * bh.match('input_islands_yes', function(ctx) {
         *     ctx.mod('native', '', true);
         *     ctx.mod('disabled', false, true);
         * });
         * ```
         * @param {String} key
         * @param {String|Boolean} [value]
         * @param {Boolean} [force]
         * @returns {String|undefined|Ctx}
         */
        mod: function(key, value, force) {
            var mods;
            if (arguments.length > 1) {
                mods = this.ctx.mods || (this.ctx.mods = {});
                mods[key] = !mods.hasOwnProperty(key) || force ? value : mods[key];
                return this;
            } else {
                mods = this.ctx.mods;
                return mods ? mods[key] : undefined;
            }
        },
        /**
         * Возвращает/устанавливает модификаторы в зависимости от аргументов.
         * **force** — задать модификаторы даже если они были заданы ранее.
         * ```javascript
         * bh.match('paranja', function(ctx) {
         *     ctx.mods({
         *         theme: 'normal',
         *         disabled: true
         *     });
         * });
         * ```
         * @param {Object} [values]
         * @param {Boolean} [force]
         * @returns {Object|Ctx}
         */
        mods: function(values, force) {
            var mods = this.ctx.mods || (this.ctx.mods = {});
            if (values !== undefined) {
                this.ctx.mods = force ? this.extend(mods, values) : this.extend(values, mods);
                return this;
            } else {
                return mods;
            }
        },
        /**
         * Возвращает/устанавливает тег в зависимости от аргументов.
         * **force** — задать значение тега даже если оно было задано ранее.
         * ```javascript
         * bh.match('input', function(ctx) {
         *     ctx.tag('input');
         * });
         * ```
         * @param {String} [tagName]
         * @param {Boolean} [force]
         * @returns {String|undefined|Ctx}
         */
        tag: function(tagName, force) {
            if (tagName !== undefined) {
                this.ctx.tag = this.ctx.tag === undefined || force ? tagName : this.ctx.tag;
                return this;
            } else {
                return this.ctx.tag;
            }
        },
        /**
         * Возвращает/устанавливает значение mix в зависимости от аргументов.
         * При установке значения, если force равен true, то переданный микс заменяет прежнее значение,
         * в противном случае миксы складываются.
         * ```javascript
         * bh.match('button_pseudo_yes', function(ctx) {
         *     ctx.mix({ block: 'link', mods: { pseudo: 'yes' } });
         *     ctx.mix([
         *         { elem: 'text' },
         *         { block: 'ajax' }
         *     ]);
         * });
         * ```
         * @param {Array|BemJson} [mix]
         * @param {Boolean} [force]
         * @returns {Array|undefined|Ctx}
         */
        mix: function(mix, force) {
            if (mix !== undefined) {
                if (force) {
                    this.ctx.mix = mix;
                } else {
                    if (this.ctx.mix) {
                        this.ctx.mix = Array.isArray(this.ctx.mix) ?
                            this.ctx.mix.concat(mix) :
                            [this.ctx.mix].concat(mix);
                    } else {
                        this.ctx.mix = mix;
                    }
                }
                return this;
            } else {
                return this.ctx.mix;
            }
        },
        /**
         * Возвращает/устанавливает значение атрибута в зависимости от аргументов.
         * **force** — задать значение атрибута даже если оно было задано ранее.
         * @param {String} key
         * @param {String} [value]
         * @param {Boolean} [force]
         * @returns {String|undefined|Ctx}
         */
        attr: function(key, value, force) {
            var attrs;
            if (arguments.length > 1) {
                attrs = this.ctx.attrs || (this.ctx.attrs = {});
                attrs[key] = !attrs.hasOwnProperty(key) || force ? value : attrs[key];
                return this;
            } else {
                attrs = this.ctx.attrs;
                return attrs ? attrs[key] : undefined;
            }
        },
        /**
         * Возвращает/устанавливает атрибуты в зависимости от аргументов.
         * **force** — задать атрибуты даже если они были заданы ранее.
         * ```javascript
         * bh.match('input', function(ctx) {
         *     ctx.attrs({
         *         name: ctx.param('name'),
         *         autocomplete: 'off'
         *     });
         * });
         * ```
         * @param {Object} [values]
         * @param {Boolean} [force]
         * @returns {Object|Ctx}
         */
        attrs: function(values, force) {
            var attrs = this.ctx.attrs || {};
            if (values !== undefined) {
                this.ctx.attrs = force ? this.extend(attrs, values) : this.extend(values, attrs);
                return this;
            } else {
                return attrs;
            }
        },
        /**
         * Возвращает/устанавливает значение bem в зависимости от аргументов.
         * **force** — задать значение bem даже если оно было задано ранее.
         * Если `bem` имеет значение `false`, то для элемента не будут генерироваться BEM-классы.
         * ```javascript
         * bh.match('meta', function(ctx) {
         *     ctx.bem(false);
         * });
         * ```
         * @param {Boolean} [bem]
         * @param {Boolean} [force]
         * @returns {Boolean|undefined|Ctx}
         */
        bem: function(bem, force) {
            if (bem !== undefined) {
                this.ctx.bem = this.ctx.bem === undefined || force ? bem : this.ctx.bem;
                return this;
            } else {
                return this.ctx.bem;
            }
        },
        /**
         * Возвращает/устанавливает значение `js` в зависимости от аргументов.
         * **force** — задать значение `js` даже если оно было задано ранее.
         * Значение `js` используется для инициализации блоков в браузере через `BEM.DOM.init()`.
         * ```javascript
         * bh.match('input', function(ctx) {
         *     ctx.js(true);
         * });
         * ```
         * @param {Boolean|Object} [js]
         * @param {Boolean} [force]
         * @returns {Boolean|Object|Ctx}
         */
        js: function(js, force) {
            if (js !== undefined) {
                this.ctx.js = force ?
                    (js === true ? {} : js) :
                    js ? this.extend(this.ctx.js, js) : this.ctx.js;
                return this;
            } else {
                return this.ctx.js;
            }
        },
        /**
         * Возвращает/устанавливает значение CSS-класса в зависимости от аргументов.
         * **force** — задать значение CSS-класса даже если оно было задано ранее.
         * ```javascript
         * bh.match('page', function(ctx) {
         *     ctx.cls('ua_js_no ua_css_standard');
         * });
         * ```
         * @param {String} [cls]
         * @param {Boolean} [force]
         * @returns {String|Ctx}
         */
        cls: function(cls, force) {
            if (cls !== undefined) {
                this.ctx.cls = this.ctx.cls === undefined || force ? cls : this.ctx.cls;
                return this;
            } else {
                return this.ctx.cls;
            }
        },
        /**
         * Возвращает/устанавливает параметр текущего BEMJSON-элемента.
         * **force** — задать значение параметра, даже если оно было задано ранее.
         * Например:
         * ```javascript
         * // Пример входного BEMJSON: { block: 'search', action: '/act' }
         * bh.match('search', function(ctx) {
         *     ctx.attr('action', ctx.param('action') || '/');
         * });
         * ```
         * @param {String} key
         * @param {*} [value]
         * @param {Boolean} [force]
         * @returns {*|Ctx}
         */
        param: function(key, value, force) {
            if (value !== undefined) {
                this.ctx[key] = this.ctx[key] === undefined || force ? value : this.ctx[key];
                return this;
            } else {
                return this.ctx[key];
            }
        },
        /**
         * Возвращает/устанавливает защищенное содержимое в зависимости от аргументов.
         * **force** — задать содержимое даже если оно было задано ранее.
         * ```javascript
         * bh.match('input', function(ctx) {
         *     ctx.content({ elem: 'control' });
         * });
         * ```
         * @param {BemJson} [value]
         * @param {Boolean} [force]
         * @returns {BemJson|Ctx}
         */
        content: function(value, force) {
            if (arguments.length > 0) {
                this.ctx.content = this.ctx.content === undefined || force ? value : this.ctx.content;
                return this;
            } else {
                return this.ctx.content;
            }
        },
        /**
         * Возвращает/устанавливает незащищенное содержимое в зависимости от аргументов.
         * **force** — задать содержимое даже если оно было задано ранее.
         * ```javascript
         * bh.match('input', function(ctx) {
         *     ctx.html({ elem: 'control' });
         * });
         * ```
         * @param {String} [value]
         * @param {Boolean} [force]
         * @returns {String|Ctx}
         */
        html: function(value, force) {
            if (arguments.length > 0) {
                this.ctx.html = this.ctx.html === undefined || force ? value : this.ctx.html;
                return this;
            } else {
                return this.ctx.html;
            }
        },
        /**
         * Возвращает текущий фрагмент BEMJSON-дерева.
         * Может использоваться в связке с `return` для враппинга и подобных целей.
         * ```javascript
         * bh.match('input', function(ctx) {
         *     return {
         *         elem: 'wrapper',
         *         content: ctx.json()
         *     };
         * });
         * ```
         * @returns {Object|Array}
         */
        json: function() {
            return this.ctx;
        }
    };
}

BH.prototype = {

    /**
     * Задает опции шаблонизации.
     *
     * @param {Object} options
     *        {String} options[jsAttrName] Атрибут, в который записывается значение поля `js`. По умолчанию, `onclick`.
     *        {String} options[jsAttrScheme] Схема данных для `js`-значения.
     *                 Форматы:
     *                     `js` — значение по умолчанию. Получаем `return { ... }`.
     *                     `json` — JSON-формат. Получаем `{ ... }`.
     * @returns {BH}
     */
    setOptions: function(options) {
        var i;
        for (i in options) {
            this._options[i] = options[i];
        }
        if (options.jsAttrName) {
            this._optJsAttrName = options.jsAttrName;
        }
        if (options.jsAttrScheme) {
            this._optJsAttrIsJs = options.jsAttrScheme === 'js';
        }
        if (options.escapeContent) {
            this._optEscapeContent = options.escapeContent;
        }
        return this;
    },

    /**
     * Возвращает опции шаблонизации.
     *
     * @returns {Object}
     */
    getOptions: function() {
        return this._options;
    },

    /**
     * Включает/выключает механизм определения зацикливаний.
     *
     * @param {Boolean} enable
     * @returns {BH}
     */
    enableInfiniteLoopDetection: function(enable) {
        this._infiniteLoopDetection = enable;
        return this;
    },

    /**
     * Преобразует BEMJSON в HTML-код.
     * @param {BemJson} bemJson
     * @returns {String}
     */
    apply: function(bemJson) {
        return this.toHtml(this.processBemJson(bemJson));
    },

    /**
     * Объявляет шаблон.
     * ```javascript
     * bh.match('page', function(ctx) {
     *     ctx.mix([{ block: 'ua' }]);
     *     ctx.cls('ua_js_no ua_css_standard');
     * });
     * bh.match('block_mod_modVal', function(ctx) {
     *     ctx.tag('span');
     * });
     * bh.match('block__elem', function(ctx) {
     *     ctx.attr('disabled', 'disabled');
     * });
     * bh.match('block__elem_elemMod', function(ctx) {
     *     ctx.mix([{ block: 'link' }]);
     * });
     * bh.match('block__elem_elemMod_elemModVal', function(ctx) {
     *     ctx.mod('active', 'yes');
     * });
     * bh.match('block_blockMod__elem', function(ctx) {
     *     ctx.param('checked', true);
     * });
     * bh.match('block_blockMod_blockModVal__elem', function(ctx) {
     *     ctx.content({
     *         elem: 'wrapper',
     *         content: ctx
     *     };
     * });
     * ```
     * @param {String|Array|Object} expr
     * @param {Function} matcher
     * @returns {BH}
     */
    match: function(expr, matcher) {
        if (!expr) return this;

        if (Array.isArray(expr)) {
            expr.forEach(function(match, i) {
                this.match(expr[i], matcher);
            }, this);
            return this;
        }

        if (typeof expr === 'object') {
            for (var i in expr) {
                this.match(i, expr[i]);
            }
            return this;
        }

        matcher.__id = '__func' + (this._lastMatchId++);
        this._matchers.push([expr, matcher]);
        this._fastMatcher = null;
        return this;
    },

    /**
     * Вспомогательный метод для компиляции шаблонов с целью их быстрого дальнейшего исполнения.
     * @returns {String}
     */
    buildMatcher: function() {

        /**
         * Группирует селекторы матчеров по указанному ключу.
         * @param {Array} data
         * @param {String} key
         * @returns {Object}
         */
        function groupBy(data, key) {
            var res = {};
            for (var i = 0, l = data.length; i < l; i++) {
                var item = data[i];
                var value = item[key] || '__no_value__';
                (res[value] || (res[value] = [])).push(item);
            }
            return res;
        }

        var i, j, l;
        var res = [];
        var vars = ['bh = this'];
        var allMatchers = this._matchers;
        var decl, expr, matcherInfo;
        var declarations = [], exprBits, blockExprBits;
        for (i = allMatchers.length - 1; i >= 0; i--) {
            matcherInfo = allMatchers[i];
            expr = matcherInfo[0];
            vars.push('_m' + i + ' = ms[' + i + '][1]');
            decl = { fn: matcherInfo[1], index: i };
            if (~expr.indexOf('__')) {
                exprBits = expr.split('__');
                blockExprBits = exprBits[0].split('_');
                decl.block = blockExprBits[0];
                if (blockExprBits.length > 1) {
                    decl.blockMod = blockExprBits[1];
                    decl.blockModVal = blockExprBits[2] || true;
                }
                exprBits = exprBits[1].split('_');
                decl.elem = exprBits[0];
                if (exprBits.length > 1) {
                    decl.elemMod = exprBits[1];
                    decl.elemModVal = exprBits[2] || true;
                }
            } else {
                exprBits = expr.split('_');
                decl.block = exprBits[0];
                if (exprBits.length > 1) {
                    decl.blockMod = exprBits[1];
                    decl.blockModVal = exprBits[2] || true;
                }
            }
            declarations.push(decl);
        }
        var declByBlock = groupBy(declarations, 'block');
        res.push('var ' + vars.join(', ') + ';');
        res.push('function applyMatchers(ctx, json) {');
        res.push('var subRes;');

        res.push('switch (json.block) {');
        for (var blockName in declByBlock) {
            res.push('case "' + blockName + '":');
            var declsByElem = groupBy(declByBlock[blockName], 'elem');

            res.push('switch (json.elem) {');
            for (var elemName in declsByElem) {
                if (elemName === '__no_value__') {
                    res.push('case undefined:');
                } else {
                    res.push('case "' + elemName + '":');
                }
                var decls = declsByElem[elemName];
                for (j = 0, l = decls.length; j < l; j++) {
                    decl = decls[j];
                    var fn = decl.fn;
                    var conds = [];
                    conds.push('!json.' + fn.__id);
                    if (decl.elemMod) {
                        conds.push(
                            'json.mods && json.mods["' + decl.elemMod + '"] === ' +
                                (decl.elemModVal === true || '"' + decl.elemModVal + '"'));
                    }
                    if (decl.blockMod) {
                        conds.push(
                            'json.blockMods["' + decl.blockMod + '"] === ' +
                                (decl.blockModVal === true || '"' + decl.blockModVal + '"'));
                    }
                    res.push('if (' + conds.join(' && ') + ') {');
                    res.push('json.' + fn.__id + ' = true;');
                    res.push('subRes = _m' + decl.index + '(ctx, json);');
                    res.push('if (subRes !== undefined) { return (subRes || "") }');
                    res.push('if (json._stop) return;');
                    res.push('}');
                }
                res.push('return;');
            }
            res.push('}');

            res.push('return;');
        }
        res.push('}');
        res.push('};');
        res.push('return applyMatchers;');
        return res.join('\n');
    },

    /**
     * Раскрывает BEMJSON, превращая его из краткого в полный.
     * @param {BemJson} bemJson
     * @param {String} [blockName]
     * @param {Boolean} [ignoreContent]
     * @returns {Object|Array}
     */
    processBemJson: function(bemJson, blockName, ignoreContent) {
        if (bemJson == null) return;
        if (!this._inited) {
            this._init();
        }
        var resultArr = [bemJson];
        var nodes = [{ json: bemJson, arr: resultArr, index: 0, blockName: blockName, blockMods: !bemJson.elem && bemJson.mods || {} }];
        var node, json, block, blockMods, i, j, l, p, child, subRes;
        var compiledMatcher = (this._fastMatcher || (this._fastMatcher = Function('ms', this.buildMatcher())(this._matchers)));
        var processContent = !ignoreContent;
        var infiniteLoopDetection = this._infiniteLoopDetection;

        /**
         * Враппер для json-узла.
         * @constructor
         */
        function Ctx() {
            this.ctx = null;
        }
        Ctx.prototype = this.utils;
        var ctx = new Ctx();
        while (node = nodes.shift()) {
            json = node.json;
            block = node.blockName;
            blockMods = node.blockMods;
            if (Array.isArray(json)) {
                for (i = 0, j = 0, l = json.length; i < l; i++) {
                    child = json[i];
                    if (child !== false && child != null && typeof child === 'object') {
                        nodes.push({ json: child, arr: json, index: i, position: ++j, blockName: block, blockMods: blockMods, parentNode: node });
                    }
                }
                json._listLength = j;
            } else {
                var content, stopProcess = false;
                if (json.elem) {
                    block = json.block = json.block || block;
                    blockMods = json.blockMods = json.blockMods || blockMods;
                    if (json.elemMods) {
                        json.mods = json.elemMods;
                    }
                } else if (json.block) {
                    block = json.block;
                    blockMods = json.blockMods = json.mods || {};
                }

                if (json.block) {

                    if (infiniteLoopDetection) {
                        json.__processCounter = (json.__processCounter || 0) + 1;
                        compiledMatcher.__processCounter = (compiledMatcher.__processCounter || 0) + 1;
                        if (json.__processCounter > 100) {
                            throw new Error('Infinite json loop detected at "' + json.block + (json.elem ? '__' + json.elem : '') + '".');
                        }
                        if (compiledMatcher.__processCounter > 1000) {
                            throw new Error('Infinite matcher loop detected at "' + json.block + (json.elem ? '__' + json.elem : '') + '".');
                        }
                    }

                    subRes = undefined;

                    /* istanbul ignore else */
                    if (!json._stop) {
                        ctx.node = node;
                        ctx.ctx = json;
                        subRes = compiledMatcher(ctx, json);
                        if (subRes !== undefined) {
                            json = subRes;
                            node.json = json;
                            node.blockName = block;
                            node.blockMods = blockMods;
                            nodes.push(node);
                            stopProcess = true;
                        }
                    }

                }
                if (!stopProcess) {
                    if (processContent && (content = json.content)) {
                        if (Array.isArray(content)) {
                            var flatten;
                            do {
                                flatten = false;
                                for (i = 0, l = content.length; i < l; i++) {
                                    if (Array.isArray(content[i])) {
                                        flatten = true;
                                        break;
                                    }
                                }
                                if (flatten) {
                                    json.content = content = content.concat.apply([], content);
                                }
                            } while (flatten);
                            for (i = 0, j = 0, l = content.length, p = l - 1; i < l; i++) {
                                child = content[i];
                                if (child !== false && child != null && typeof child === 'object') {
                                    nodes.push({ json: child, arr: content, index: i, position: ++j, blockName: block, blockMods: blockMods, parentNode: node });
                                }
                            }
                            content._listLength = j;
                        } else {
                            nodes.push({ json: content, arr: json, index: 'content', blockName: block, blockMods: blockMods, parentNode: node });
                        }
                    }
                }
            }
            node.arr[node.index] = json;
        }
        return resultArr[0];
    },

    /**
     * Превращает раскрытый BEMJSON в HTML.
     * @param {BemJson} json
     * @returns {String}
     */
    toHtml: function(json) {
        var res, i, l, item;
        if (json === false || json == null) return '';
        if (typeof json !== 'object') {
            return this._optEscapeContent ? xmlEscape(json) : json;
        } else if (Array.isArray(json)) {
            res = '';
            for (i = 0, l = json.length; i < l; i++) {
                item = json[i];
                if (item !== false && item != null) {
                    res += this.toHtml(item);
                }
            }
            return res;
        } else {
            var isBEM = json.bem !== false;
            if (typeof json.tag !== 'undefined' && !json.tag) {
                return json.html || json.content ? this.toHtml(json.content) : '';
            }
            if (json.mix && !Array.isArray(json.mix)) {
                json.mix = [json.mix];
            }
            var cls = '',
                jattr, jval, attrs = '', jsParams, hasMixJsParams = false;

            if (jattr = json.attrs) {
                for (i in jattr) {
                    jval = jattr[i];
                    if (jval !== null && jval !== undefined) {
                        attrs += ' ' + i + '="' + attrEscape(jval) + '"';
                    }
                }
            }

            if (isBEM) {
                var base = json.block + (json.elem ? '__' + json.elem : '');

                if (json.block) {
                    cls = toBemCssClasses(json, base);
                    if (json.js) {
                        (jsParams = {})[base] = json.js === true ? {} : json.js;
                    }
                }

                var addJSInitClass = jsParams && !json.elem;

                var mixes = json.mix;
                if (mixes && mixes.length) {
                    for (i = 0, l = mixes.length; i < l; i++) {
                        var mix = mixes[i];
                        if (mix && mix.bem !== false) {
                            var mixBlock = mix.block || json.block || '',
                                mixElem = mix.elem || (mix.block ? null : json.block && json.elem),
                                mixBase = mixBlock + (mixElem ? '__' + mixElem : '');

                            if (mixBlock) {
                                cls += toBemCssClasses(mix, mixBase, base);
                                if (mix.js) {
                                    (jsParams = jsParams || {})[mixBase] = mix.js === true ? {} : mix.js;
                                    hasMixJsParams = true;
                                    if (!addJSInitClass) addJSInitClass = mixBlock && !mixElem;
                                }
                            }
                        }
                    }
                }

                if (jsParams) {
                    if (addJSInitClass) cls += ' i-bem';
                    var jsData = (!hasMixJsParams && json.js === true ?
                        '{&quot;' + base + '&quot;:{}}' :
                        attrEscape(JSON.stringify(jsParams)));
                    attrs += ' ' + (json.jsAttr || this._optJsAttrName) + '="' +
                        (this._optJsAttrIsJs ? 'return ' + jsData : jsData) + '"';
                }
            }

            if (json.cls) {
                cls = cls ? cls + ' ' + json.cls : json.cls;
            }

            var content, tag = (json.tag || 'div');
            res = '<' + tag + (cls ? ' class="' + attrEscape(cls) + '"' : '') + (attrs ? attrs : '');

            if (selfCloseHtmlTags[tag]) {
                res += '/>';
            } else {
                res += '>';
                if (json.html) {
                    res += json.html;
                } else if ((content = json.content) != null) {
                    if (Array.isArray(content)) {
                        for (i = 0, l = content.length; i < l; i++) {
                            item = content[i];
                            if (item !== false && item != null) {
                                res += this.toHtml(item);
                            }
                        }
                    } else {
                        res += this.toHtml(content);
                    }
                }
                res += '</' + tag + '>';
            }
            return res;
        }
    },

    /**
     * Инициализация BH.
     */
    _init: function() {
        this._inited = true;
        /*
            Копируем ссылку на BEM.I18N в bh.lib.i18n, если это возможно.
        */
        if (typeof BEM !== 'undefined' && typeof BEM.I18N !== 'undefined') {
            this.lib.i18n = this.lib.i18n || BEM.I18N;
        }
    }
};

/**
 * @deprecated
 */
BH.prototype.processBemjson = BH.prototype.processBemJson;

var selfCloseHtmlTags = {
    area: 1,
    base: 1,
    br: 1,
    col: 1,
    command: 1,
    embed: 1,
    hr: 1,
    img: 1,
    input: 1,
    keygen: 1,
    link: 1,
    menuitem: 1,
    meta: 1,
    param: 1,
    source: 1,
    track: 1,
    wbr: 1
};

var xmlEscape = BH.prototype.xmlEscape = function(str) {
    return (str + '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
};
var attrEscape = BH.prototype.attrEscape = function(str) {
    return (str + '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
};

var toBemCssClasses = function(json, base, parentBase) {
    var mods, mod, res = '', i;

    if (parentBase !== base) {
        if (parentBase) res += ' ';
        res += base;
    }

    if (mods = json.mods || json.elem && json.elemMods) {
        for (i in mods) {
            mod = mods[i];
            if (mod || mod === 0) {
                res += ' ' + base + '_' + i + (mod === true ? '' : '_' + mod);
            }
        }
    }
    return res;
};

return BH;
})();

/* istanbul ignore else */
if (typeof module !== 'undefined') {
    module.exports = BH;
}

var bh = new BH();
bh.setOptions({
    jsAttrName: 'data-bem',
    jsAttrScheme: 'json'
});
provide(bh);
});
modules.define('BEMHTML', ["bh"], function(provide, bh) {
provide(bh);
});
