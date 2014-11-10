modules.define(
    'row',
    ['i-bem__dom'],
    function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {

    onSetMod : {
        'js' : {
            'inited' : function() {
                var detect = document.createElement('detect');
                detect.style.display = 'flex';
                detect.style.display !== 'flex' && this.setMod('no-flexbox', true);
            }
        }
    },

    length : function() {
        // cols count
    },

    append : function() {
        // add col to stack
    },

    prepend : function() {
        // add col to start of stack
    },

    addByIndex : function() {
        // paste new element to row by index
    },

    removeByIndex : function() {
        // remove element from row by index
    },

    sort : function() {
        // sort columns
    }

}));

});
