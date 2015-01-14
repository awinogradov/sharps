var PATH = require('path'),
    BEM = require('bem'),
    QFS = require('q-io/fs'),
    U = BEM.util,
    api = BEM.api,
    createLevel = BEM.createLevel;

module.exports = function(registry) {

registry.decl('BemCreateLevelNode', 'GeneratedFileNode', {

    __constructor : function(o) {
        this.name = o.name;
        this.output = o.output;
        this.proto = o.proto;
        this.force = !!o.force || false;

        this.levelPath = this.__self.createLevelPath(o);

        this.__base(U.extend({ path : this.__self.createPath(o) }, o));
    },

    getOutputDir : function() {
        return PATH.join(this.root, this.output);
    },

    getLevelPath : function() {
        return PATH.resolve(this.root, this.levelPath);
    },

    getLevelProtoPath : function() {
        return PATH.resolve(this.root, this.proto);
    },

    lastModified : function() {
        var base = this.__base.bind(this, arguments);
        return QFS.lastModified(this.getLevelPath())
            .fail(base);
    },

    createLevel : function(opts, args) {
        return api.create.level(opts, args).then(function() {
            // NOTE: drops level path cache (for bem tech/v2)
            createLevel(this.getPath(), { projectRoot : this.root, noCache : true });
        }.bind(this));
    },

    make : function() {
        return QFS.exists(this.getLevelPath()).then(function(exists) {
            if(exists && !this.ctx.force) return;

            var opts = U.extend({}, {
                    force : this.force,
                    level : this.getLevelProtoPath(),
                    outputDir : this.getOutputDir()
                }),
                args = { names : [this.name] };

            this.log('bem.create.level(%s %s)',
                JSON.stringify(opts, null, 4),
                JSON.stringify(args, null, 4));

            return this.createLevel(opts, args);
        }.bind(this));
    }

}, {

    createId : function(o) {
        return this.createLevelPath(o);
    },

    createPath : function(o) {
        return PATH.join(o.output, o.name);
    },

    createLevelPath : function(o) {
        return PATH.join(this.createPath(o), '.bem/level.js');
    }

});

};
