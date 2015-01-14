var PATH = require('path'),
    UTIL = require('util'),
    BEM = require('bem'),
    QFS = require('q-io/fs'),
    JSD = require('bem-jsd'),
    JSDTMD = require('jsdtmd'),
    U = BEM.util;

module.exports = function(registry) {

registry.decl('SetNode', {

    'create-jsdoc-node' : function(item, sourceNode, setNode) {
        return this.createLevelNode(item, sourceNode, setNode, 'JsdocLevelNode');
    }

});

registry.decl('JsdocLevelNode', 'MetadocLevelNode', {

    createBundleNode : function(level, item) {
        var arch = this.ctx.arch,
            sourceNode = this.__base.apply(this, arguments),
            jsdtNode = registry.getNodeClass('JsdtmdNode').create({
                root : this.root,
                input : sourceNode
            });

        arch.setNode(jsdtNode, level, sourceNode);

        return sourceNode;
    },

    getBundleNodeClass : function() {
        return 'JsdocSourceNode';
    }

});

registry.decl('JsdocSourceNode', 'MetadocSourceNode', {

    processContent : function(content) {
        var sources = this.sources;
        content = content
            .map(function(data, i) {
                var srcPath = sources[i];
                return '/** @file ' + srcPath + ' */\n' + data;
            })
            .join('\n');

        try {
            return JSON.stringify(JSD(content), null, 2);
        } catch(e) {
            e.message = UTIL.format('Error while processing files:\n%s\n\n', sources.join('\n')) + e.message;
            throw e;
        }
    }

}, {

    createPath : function(o) {
        return PATH.join(o.level, this.createNodePrefix(o.item) + '.jsdoc.json');
    }

});

registry.decl('JsdtmdNode', 'GeneratedFileNode', {

    __constructor : function(o) {
        this.input = typeof o.input === 'string'?
            o.input : o.input.getId();
        this.output = PATH.join(
            PATH.dirname(this.input),
            PATH.basename(this.input, '.json') + '.md');

        this.__base(U.extend({ path : this.output }, o));
    },

    make : function() {
        var output = PATH.resolve(this.root, this.output);
        return QFS
            .read(PATH.resolve(this.root, this.input))
            .then(function(json) {
                return JSDTMD(JSON.parse(json));
            })
            .then(function(md) {
                return U.writeFile(output, md);
            });
    }

});

};
