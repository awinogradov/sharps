/**
 * @fileOverview Набор monkey-patched целей bem-make, решающих встречающиеся
 * проблемы, для которых (еще) нет решения в bem-tools.
 */
var BEM = require('bem'),
    PATH = require('path');

module.exports = function(registry) {

registry.decl('BlockNode', {

    /**
     * @see https://github.com/bem/bem-tools/pull/341
     */
    __constructor : function(o) {
        this.__base(o);

        this.level = undefined;
        this._level = typeof o.level === 'string'? o.level : o.level.dir;

        Object.defineProperty(this, 'level', {
            get : function() {
                return BEM.createLevel(PATH.resolve(this.root, this._level));
            }
        });
    }

});

// FIXME: bem/bem-tools#527
registry.decl('BemCreateNode', {

    make : function() {
        var opts = BEM.util.extend({}, {
            force: this.force,
            level: this.level.dir,
            forceTech: this.tech.getTechPath()  // getTechName -> getTechPath
        });

        ['block', 'elem', 'mod', 'val'].forEach(function(key) {
            if(this.item[key]) opts[key] = this.item[key];
        }, this);

        this.log('bem.create(forked=%j, %s, {})',
            this.forked,
            JSON.stringify(opts, null, 4));

        // NOTE: we don't use forked create, since it's just a temporary monkey patching
        return BEM.api.create(opts);
    }

});

};
