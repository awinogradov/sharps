module.exports = function(registry) {

registry.decl('SetNode', {

    'create-tests-node' : function(item, sourceNode, setNode) {
        return this.createLevelNode(item, sourceNode, setNode, 'TestsLevelNode');
    }

});

registry.decl('TestsLevelNode', 'ExamplesLevelNode', {

    getProtoLevelName : function() {
        return 'tests-set';
    },

    getBundleNodeClassName : function() {
        return 'TestNode';
    }

});

registry.decl('TestNode', 'ExampleNode', {});

};
