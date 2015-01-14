modules.define(
    'source',
    ['i-bem__dom', 'jquery', 'dom', 'source__highlight'],
    function(provide, BEMDOM, $, dom, hljs) {

provide(BEMDOM.decl(this.name, {

    onSetMod: {
        'js' : {
            'inited' : function () {
                hljs.highlightBlock(this.elem('code')[0]);
            }
        }
    }

}));

});
