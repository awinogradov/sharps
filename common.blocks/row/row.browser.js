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
    }

}));

});
