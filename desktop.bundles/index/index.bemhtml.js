(function(g) {
  var __bem_xjst = function(exports) {
     var $$mode = "", $$block = "", $$elem = "", $$elemMods = null, $$mods = null;

var __$ref = {};

function apply(ctx) {
    ctx = ctx || this;
    $$mods = ctx["mods"];
    $$elemMods = ctx["elemMods"];
    $$elem = ctx["elem"];
    $$block = ctx["block"];
    $$mode = ctx["_mode"];
    try {
        return applyc(ctx, __$ref);
    } catch (e) {
        e.xjstContext = ctx;
        throw e;
    }
}

exports.apply = apply;

function applyc(__$ctx, __$ref) {
    var __$t = $$mode;
    if (__$t === "attrs") {
        var __$t = $$block;
        if (__$t === "image") {
            if (!$$elem) {
                var __$r = __$b1(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "link") {
            if (!$$elem) {
                var __$r = __$b2(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "js") {
                if (__$ctx.ctx.url) {
                    return {
                        src: __$ctx.ctx.url
                    };
                }
            } else if (__$t === "css") {
                if (__$ctx.ctx.url) {
                    return {
                        rel: "stylesheet",
                        href: __$ctx.ctx.url
                    };
                }
            } else if (__$t === "favicon") {
                return {
                    rel: "shortcut icon",
                    href: __$ctx.ctx.url
                };
            }
        }
        return undefined;
    } else if (__$t === "tag") {
        var __$t = $$block;
        if (__$t === "image") {
            if (!$$elem) {
                return "img";
            }
        } else if (__$t === "link") {
            if (!$$elem) {
                return "a";
            }
        } else if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "link") {
                return "link";
            } else if (__$t === "js") {
                return "script";
            } else if (__$t === "css") {
                if (__$ctx.ctx.url) {
                    return "link";
                }
                return "style";
            } else if (__$t === "favicon") {
                return "link";
            } else if (__$t === "meta") {
                return "meta";
            } else if (__$t === "head") {
                return "head";
            }
            if (!$$elem) {
                return "body";
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return "script";
            }
        }
        return undefined;
    } else if (__$t === "js") {
        var __$t = $$block;
        if (__$t === "link") {
            var __$t = !$$elem;
            if (__$t) {
                if ($$mods && $$mods["disabled"] === true && (__$ctx.__$a0 & 1) === 0) {
                    var __$r = __$ctx.extend(function __$lb__$1() {
                        var __$r__$2;
                        var __$l0__$3 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 1;
                        __$r__$2 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$3;
                        return __$r__$2;
                    }(), {
                        url: __$ctx.ctx.url
                    });
                    if (__$r !== __$ref) return __$r;
                }
                return true;
            }
        } else if (__$t === "row") {
            if (!$$elem) {
                return true;
            }
        }
        return undefined;
    } else if (__$t === "mix") {
        if ($$block === "link" && !$$elem) {
            return [ {
                elem: "control"
            } ];
        }
        return undefined;
    } else if (__$t === "default") {
        var __$t = $$block;
        if (__$t === "link") {
            if (!$$elem && (__$ctx.__$a0 & 2) === 0) {
                var __$r = __$b25(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        } else if (__$t === "page") {
            if (!$$elem && !__$ctx._defPageApplied && (__$ctx.__$a0 & 8) === 0) {
                var __$r = __$b26(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
        }
        var __$r = __$b27(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "bem") {
        var __$t = $$block;
        if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "link") {
                return false;
            } else if (__$t === "js") {
                return false;
            } else if (__$t === "css") {
                return false;
            } else if (__$t === "favicon") {
                return false;
            } else if (__$t === "meta") {
                return false;
            } else if (__$t === "head") {
                return false;
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return false;
            }
        }
        return undefined;
    } else if (__$t === "content") {
        var __$t = $$block;
        if (__$t === "page") {
            if (!$$elem && (__$ctx.__$a0 & 4) === 0) {
                return [ function __$lb__$11() {
                    var __$r__$12;
                    var __$l0__$13 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 4;
                    __$r__$12 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$13;
                    return __$r__$12;
                }(), __$ctx.ctx.scripts ];
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 16) === 0) {
            var __$r = __$b40(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b41(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b42(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b43(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b44(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    }
}

[ function(exports, context) {
    var undef, BEM_ = {}, toString = Object.prototype.toString, slice = Array.prototype.slice, isArray = Array.isArray || function(obj) {
        return toString.call(obj) === "[object Array]";
    }, SHORT_TAGS = {
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
        meta: 1,
        param: 1,
        source: 1,
        wbr: 1
    };
    (function(BEM, undefined) {
        var MOD_DELIM = "_", ELEM_DELIM = "__", NAME_PATTERN = "[a-zA-Z0-9-]+";
        function buildModPostfix(modName, modVal) {
            var res = MOD_DELIM + modName;
            if (modVal !== true) res += MOD_DELIM + modVal;
            return res;
        }
        function buildBlockClass(name, modName, modVal) {
            var res = name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        function buildElemClass(block, name, modName, modVal) {
            var res = buildBlockClass(block) + ELEM_DELIM + name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        BEM.INTERNAL = {
            NAME_PATTERN: NAME_PATTERN,
            MOD_DELIM: MOD_DELIM,
            ELEM_DELIM: ELEM_DELIM,
            buildModPostfix: buildModPostfix,
            buildClass: function(block, elem, modName, modVal) {
                var typeOfModName = typeof modName;
                if (typeOfModName === "string" || typeOfModName === "boolean") {
                    var typeOfModVal = typeof modVal;
                    if (typeOfModVal !== "string" && typeOfModVal !== "boolean") {
                        modVal = modName;
                        modName = elem;
                        elem = undef;
                    }
                } else if (typeOfModName !== "undefined") {
                    modName = undef;
                } else if (elem && typeof elem !== "string") {
                    elem = undef;
                }
                if (!(elem || modName)) {
                    return block;
                }
                return elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal);
            },
            buildModsClasses: function(block, elem, mods) {
                var res = "";
                if (mods) {
                    var modName;
                    for (modName in mods) {
                        if (!mods.hasOwnProperty(modName)) continue;
                        var modVal = mods[modName];
                        if (!modVal && modVal !== 0) continue;
                        typeof modVal !== "boolean" && (modVal += "");
                        res += " " + (elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal));
                    }
                }
                return res;
            },
            buildClasses: function(block, elem, mods) {
                var res = "";
                res += elem ? buildElemClass(block, elem) : buildBlockClass(block);
                res += this.buildModsClasses(block, elem, mods);
                return res;
            }
        };
    })(BEM_);
    var ts = {
        '"': "&quot;",
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;"
    }, f = function(t) {
        return ts[t] || t;
    };
    var buildEscape = function(r) {
        r = new RegExp(r, "g");
        return function(s) {
            return ("" + s).replace(r, f);
        };
    };
    context.BEMContext = BEMContext;
    function BEMContext(context, apply_) {
        this.ctx = typeof context === "undefined" ? "" : context;
        this.apply = apply_;
        this._str = "";
        var _this = this;
        this._buf = {
            push: function() {
                var chunks = slice.call(arguments).join("");
                _this._str += chunks;
            },
            join: function() {
                return this._str;
            }
        };
        this._ = this;
        this._start = true;
        this._mode = "";
        this._listLength = 0;
        this._notNewList = false;
        this.position = 0;
        this.block = undef;
        this.elem = undef;
        this.mods = undef;
        this.elemMods = undef;
    }
    BEMContext.prototype.isArray = isArray;
    BEMContext.prototype.isSimple = function isSimple(obj) {
        if (!obj || obj === true) return true;
        var t = typeof obj;
        return t === "string" || t === "number";
    };
    BEMContext.prototype.isShortTag = function isShortTag(t) {
        return SHORT_TAGS.hasOwnProperty(t);
    };
    BEMContext.prototype.extend = function extend(o1, o2) {
        if (!o1 || !o2) return o1 || o2;
        var res = {}, n;
        for (n in o1) o1.hasOwnProperty(n) && (res[n] = o1[n]);
        for (n in o2) o2.hasOwnProperty(n) && (res[n] = o2[n]);
        return res;
    };
    var cnt = 0, id = +new Date(), expando = "__" + id, get = function() {
        return "uniq" + id + ++cnt;
    };
    BEMContext.prototype.identify = function(obj, onlyGet) {
        if (!obj) return get();
        if (onlyGet || obj[expando]) {
            return obj[expando];
        } else {
            return obj[expando] = get();
        }
    };
    BEMContext.prototype.xmlEscape = buildEscape("[&<>]");
    BEMContext.prototype.attrEscape = buildEscape('["&<>]');
    BEMContext.prototype.BEM = BEM_;
    BEMContext.prototype.isFirst = function isFirst() {
        return this.position === 1;
    };
    BEMContext.prototype.isLast = function isLast() {
        return this.position === this._listLength;
    };
    BEMContext.prototype.generateId = function generateId() {
        return this.identify(this.ctx);
    };
    var oldApply = exports.apply;
    exports.apply = BEMContext.apply = function BEMContext_apply(context) {
        var ctx = new BEMContext(context || this, oldApply);
        ctx.apply();
        return ctx._str;
    };
    BEMContext.prototype.reapply = BEMContext.apply;
} ].forEach(function(fn) {
    fn(exports, this);
}, {
    recordExtensions: function(ctx) {
        ctx["__$a0"] = 0;
        ctx["_mode"] = undefined;
        ctx["ctx"] = undefined;
        ctx["_str"] = undefined;
        ctx["block"] = undefined;
        ctx["elem"] = undefined;
        ctx["_notNewList"] = undefined;
        ctx["position"] = undefined;
        ctx["_listLength"] = undefined;
        ctx["_currBlock"] = undefined;
        ctx["mods"] = undefined;
        ctx["elemMods"] = undefined;
    },
    resetApplyNext: function(ctx) {
        ctx["__$a0"] = 0;
    }
});

function __$b1(__$ctx, __$ref) {
    var ctx__$0 = __$ctx.ctx;
    return {
        src: ctx__$0.url,
        width: ctx__$0.width,
        height: ctx__$0.height,
        alt: ctx__$0.alt,
        title: ctx__$0.title
    };
}

function __$b2(__$ctx, __$ref) {
    var ctx__$4 = __$ctx.ctx, attrs__$5 = {}, tabIndex__$6;
    if (!$$mods.disabled) {
        if (ctx__$4.url) {
            attrs__$5.href = ctx__$4.url;
            tabIndex__$6 = ctx__$4.tabIndex;
        } else {
            tabIndex__$6 = ctx__$4.tabIndex || 0;
        }
    }
    typeof tabIndex__$6 === "undefined" || (attrs__$5.tabindex = tabIndex__$6);
    ctx__$4.title && (attrs__$5.title = ctx__$4.title);
    ctx__$4.target && (attrs__$5.target = ctx__$4.target);
    return attrs__$5;
}

function __$b25(__$ctx, __$ref) {
    var ctx__$7 = __$ctx.ctx;
    typeof ctx__$7.url === "object" && (ctx__$7.url = __$ctx.reapply(ctx__$7.url));
    var __$r__$9;
    var __$l0__$10 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2;
    __$r__$9 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l0__$10;
    return;
}

function __$b26(__$ctx, __$ref) {
    __$ctx._defPageApplied = true;
    var ctx__$14 = __$ctx.ctx;
    var __$r__$16;
    var __$l0__$17 = $$mode;
    $$mode = "";
    var __$l1__$18 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$14.doctype || "<!DOCTYPE html>", {
        tag: "html",
        cls: "ua_js_no",
        content: [ {
            elem: "head",
            content: [ {
                tag: "meta",
                attrs: {
                    charset: "utf-8"
                }
            }, {
                tag: "title",
                content: ctx__$14.title
            }, {
                block: "ua"
            }, ctx__$14.head, ctx__$14.styles, ctx__$14.favicon ? {
                elem: "favicon",
                url: ctx__$14.favicon
            } : "" ]
        }, ctx__$14 ]
    } ];
    var __$r__$20;
    var __$l2__$21 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8;
    __$r__$20 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$21;
    __$r__$16 = __$r__$20;
    $$mode = __$l0__$17;
    __$ctx.ctx = __$l1__$18;
    __$ctx._defPageApplied = false;
    return;
}

function __$b27(__$ctx, __$ref) {
    var BEM_INTERNAL__$22 = __$ctx.BEM.INTERNAL, ctx__$23 = __$ctx.ctx, isBEM__$24, tag__$25, res__$26;
    var __$r__$28;
    var __$l0__$29 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$30 = $$block;
    var __$r__$32;
    var __$l1__$33 = $$mode;
    $$mode = "tag";
    __$r__$32 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$33;
    tag__$25 = __$r__$32;
    typeof tag__$25 !== "undefined" || (tag__$25 = ctx__$23.tag);
    typeof tag__$25 !== "undefined" || (tag__$25 = "div");
    if (tag__$25) {
        var jsParams__$34, js__$35;
        if (vBlock__$30 && ctx__$23.js !== false) {
            var __$r__$36;
            var __$l2__$37 = $$mode;
            $$mode = "js";
            __$r__$36 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$37;
            js__$35 = __$r__$36;
            js__$35 = js__$35 ? __$ctx.extend(ctx__$23.js, js__$35 === true ? {} : js__$35) : ctx__$23.js === true ? {} : ctx__$23.js;
            js__$35 && ((jsParams__$34 = {})[BEM_INTERNAL__$22.buildClass(vBlock__$30, ctx__$23.elem)] = js__$35);
        }
        __$ctx._str += "<" + tag__$25;
        var __$r__$38;
        var __$l3__$39 = $$mode;
        $$mode = "bem";
        __$r__$38 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$39;
        isBEM__$24 = __$r__$38;
        typeof isBEM__$24 !== "undefined" || (isBEM__$24 = typeof ctx__$23.bem !== "undefined" ? ctx__$23.bem : ctx__$23.block || ctx__$23.elem);
        var __$r__$41;
        var __$l4__$42 = $$mode;
        $$mode = "cls";
        __$r__$41 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$42;
        var cls__$40 = __$r__$41;
        cls__$40 || (cls__$40 = ctx__$23.cls);
        var addJSInitClass__$43 = ctx__$23.block && jsParams__$34 && !ctx__$23.elem;
        if (isBEM__$24 || cls__$40) {
            __$ctx._str += ' class="';
            if (isBEM__$24) {
                __$ctx._str += BEM_INTERNAL__$22.buildClasses(vBlock__$30, ctx__$23.elem, ctx__$23.elemMods || ctx__$23.mods);
                var __$r__$45;
                var __$l5__$46 = $$mode;
                $$mode = "mix";
                __$r__$45 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$46;
                var mix__$44 = __$r__$45;
                ctx__$23.mix && (mix__$44 = mix__$44 ? [].concat(mix__$44, ctx__$23.mix) : ctx__$23.mix);
                if (mix__$44) {
                    var visited__$47 = {}, visitedKey__$48 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$47[visitedKey__$48(vBlock__$30, $$elem)] = true;
                    __$ctx.isArray(mix__$44) || (mix__$44 = [ mix__$44 ]);
                    for (var i__$49 = 0; i__$49 < mix__$44.length; i__$49++) {
                        var mixItem__$50 = mix__$44[i__$49], hasItem__$51 = mixItem__$50.block || mixItem__$50.elem, mixBlock__$52 = mixItem__$50.block || mixItem__$50._block || $$block, mixElem__$53 = mixItem__$50.elem || mixItem__$50._elem || $$elem;
                        hasItem__$51 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$22[hasItem__$51 ? "buildClasses" : "buildModsClasses"](mixBlock__$52, mixItem__$50.elem || mixItem__$50._elem || (mixItem__$50.block ? undefined : $$elem), mixItem__$50.elemMods || mixItem__$50.mods);
                        if (mixItem__$50.js) {
                            (jsParams__$34 || (jsParams__$34 = {}))[BEM_INTERNAL__$22.buildClass(mixBlock__$52, mixItem__$50.elem)] = mixItem__$50.js === true ? {} : mixItem__$50.js;
                            addJSInitClass__$43 || (addJSInitClass__$43 = mixBlock__$52 && !mixItem__$50.elem);
                        }
                        if (hasItem__$51 && !visited__$47[visitedKey__$48(mixBlock__$52, mixElem__$53)]) {
                            visited__$47[visitedKey__$48(mixBlock__$52, mixElem__$53)] = true;
                            var __$r__$55;
                            var __$l6__$56 = $$mode;
                            $$mode = "mix";
                            var __$l7__$57 = $$block;
                            $$block = mixBlock__$52;
                            var __$l8__$58 = $$elem;
                            $$elem = mixElem__$53;
                            __$r__$55 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$56;
                            $$block = __$l7__$57;
                            $$elem = __$l8__$58;
                            var nestedMix__$54 = __$r__$55;
                            if (nestedMix__$54) {
                                for (var j__$59 = 0; j__$59 < nestedMix__$54.length; j__$59++) {
                                    var nestedItem__$60 = nestedMix__$54[j__$59];
                                    if (!nestedItem__$60.block && !nestedItem__$60.elem || !visited__$47[visitedKey__$48(nestedItem__$60.block, nestedItem__$60.elem)]) {
                                        nestedItem__$60._block = mixBlock__$52;
                                        nestedItem__$60._elem = mixElem__$53;
                                        mix__$44.splice(i__$49 + 1, 0, nestedItem__$60);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$40 && (__$ctx._str += isBEM__$24 ? " " + cls__$40 : cls__$40);
            __$ctx._str += addJSInitClass__$43 ? ' i-bem"' : '"';
        }
        if (isBEM__$24 && jsParams__$34) {
            __$ctx._str += ' data-bem="' + __$ctx.attrEscape(JSON.stringify(jsParams__$34)) + '"';
        }
        var __$r__$62;
        var __$l9__$63 = $$mode;
        $$mode = "attrs";
        __$r__$62 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$63;
        var attrs__$61 = __$r__$62;
        attrs__$61 = __$ctx.extend(attrs__$61, ctx__$23.attrs);
        if (attrs__$61) {
            var name__$64, attr__$65;
            for (name__$64 in attrs__$61) {
                attr__$65 = attrs__$61[name__$64];
                if (typeof attr__$65 === "undefined") continue;
                __$ctx._str += " " + name__$64 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$65) ? attr__$65 : __$ctx.reapply(attr__$65)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$25)) {
        __$ctx._str += "/>";
    } else {
        tag__$25 && (__$ctx._str += ">");
        var __$r__$67;
        var __$l10__$68 = $$mode;
        $$mode = "content";
        __$r__$67 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$68;
        var content__$66 = __$r__$67;
        if (content__$66 || content__$66 === 0) {
            isBEM__$24 = vBlock__$30 || $$elem;
            var __$r__$69;
            var __$l11__$70 = $$mode;
            $$mode = "";
            var __$l12__$71 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$72 = __$ctx.position;
            __$ctx.position = isBEM__$24 ? 1 : __$ctx.position;
            var __$l14__$73 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$24 ? 1 : __$ctx._listLength;
            var __$l15__$74 = __$ctx.ctx;
            __$ctx.ctx = content__$66;
            __$r__$69 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$70;
            __$ctx._notNewList = __$l12__$71;
            __$ctx.position = __$l13__$72;
            __$ctx._listLength = __$l14__$73;
            __$ctx.ctx = __$l15__$74;
        }
        tag__$25 && (__$ctx._str += "</" + tag__$25 + ">");
    }
    res__$26 = __$ctx._str;
    __$r__$28 = undefined;
    __$ctx._str = __$l0__$29;
    __$ctx._buf.push(res__$26);
    return;
}

function __$b40(__$ctx, __$ref) {
    var __$r__$76;
    var __$l0__$77 = $$mode;
    $$mode = "";
    var __$l1__$78 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$80;
    var __$l2__$81 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$80 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$81;
    __$r__$76 = __$r__$80;
    $$mode = __$l0__$77;
    __$ctx.ctx = __$l1__$78;
    return;
}

function __$b41(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$82 = __$ctx.ctx;
    if (ctx__$82 && ctx__$82 !== true || ctx__$82 === 0) {
        __$ctx._str += ctx__$82 + "";
    }
    return;
}

function __$b42(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b43(__$ctx, __$ref) {
    var ctx__$83 = __$ctx.ctx, len__$84 = ctx__$83.length, i__$85 = 0, prevPos__$86 = __$ctx.position, prevNotNewList__$87 = __$ctx._notNewList;
    if (prevNotNewList__$87) {
        __$ctx._listLength += len__$84 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$84;
    }
    __$ctx._notNewList = true;
    while (i__$85 < len__$84) (function __$lb__$88() {
        var __$r__$89;
        var __$l0__$90 = __$ctx.ctx;
        __$ctx.ctx = ctx__$83[i__$85++];
        __$r__$89 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$90;
        return __$r__$89;
    })();
    prevNotNewList__$87 || (__$ctx.position = prevPos__$86);
    return;
}

function __$b44(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$91 = __$ctx.ctx.block, vElem__$92 = __$ctx.ctx.elem, block__$93 = __$ctx._currBlock || $$block;
    var __$r__$95;
    var __$l0__$96 = $$mode;
    $$mode = "default";
    var __$l1__$97 = $$block;
    $$block = vBlock__$91 || (vElem__$92 ? block__$93 : undefined);
    var __$l2__$98 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$91 || vElem__$92 ? undefined : block__$93;
    var __$l3__$99 = $$elem;
    $$elem = vElem__$92;
    var __$l4__$100 = $$mods;
    $$mods = vBlock__$91 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$101 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$95 = undefined;
    $$mode = __$l0__$96;
    $$block = __$l1__$97;
    __$ctx._currBlock = __$l2__$98;
    $$elem = __$l3__$99;
    $$mods = __$l4__$100;
    $$elemMods = __$l5__$101;
    return;
};
     return exports;
  }
  var defineAsGlobal = true;
  if(typeof exports === "object") {
    exports["BEMHTML"] = __bem_xjst({});
    defineAsGlobal = false;
  }
  if(typeof modules === "object") {
    modules.define("BEMHTML",
      function(provide) {
        provide(__bem_xjst({})) });
    defineAsGlobal = false;
  }
  defineAsGlobal && (g["BEMHTML"] = __bem_xjst({}));
})(this);