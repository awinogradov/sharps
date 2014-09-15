modules.define(
    'row',
    ['i-bem__dom', 'jquery', 'dom'],
    function(provide, BEMDOM, $, dom) {

provide(BEMDOM.decl(this.name, {

    onSetMod: {
        'js' : {
            'inited' : function () {
                var detect = document.createElement('detect');
                detect.style.display = 'flex';
                detect.style.display === 'flex' && this.setMod('no-flexbox', true);
            }
        }
    }

}));

});
