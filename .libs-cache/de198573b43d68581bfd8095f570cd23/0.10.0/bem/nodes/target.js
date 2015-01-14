var PATH = require('path'),
    BEM = require('bem'),
    QFS = require('q-io/fs'),
    createLevel = BEM.createLevel;

module.exports = function(registry) {

registry.decl('TargetNode', 'GeneratedFileNode', {

    make : function() {
        var path = this.getPath();
        return QFS.exists(path).then(function(exists) {
            if(!exists) return QFS.makeTree(path);
        });
    }

}, {

    createId : function(o) {
        return this.__base(o) + '~';
    }

});

registry.decl('TargetLevelNode', 'GeneratedLevelNode', {

    __constructor : function(o) {
        this.sources = o.sources || [];
        this.techName = o.techName;
        this.__base(o);
    },

    getBundleNodeClassName : function() {
        return 'TargetBundleNode';
    },

    getSourceItemTechs : function() {
        return [];
    }

});

registry.decl('TargetBundleNode', 'BundleNode', {

    __constructor : function(o) {
        this.__base(o);

        this.rootLevel = createLevel(this.root);
        this.source = o.source;
    },

    getTechs : function() {
        return this.__base.apply(this, arguments);
    },

    getSourceNodePrefix : function() {
        if(!this._sourceNodePrefix) {
            this._sourceNodePrefix = this.__self.createNodePrefix({
                root  : this.root,
                level : this.source.level,
                item  : this.item
            });
        }

        return this._sourceNodePrefix;
    }

});

};
