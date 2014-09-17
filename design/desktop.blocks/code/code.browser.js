modules.define(
    'code',
    ['i-bem__dom', 'jquery', 'dom', 'code__highlight'],
    function(provide, BEMDOM, $, dom, hljs) {

provide(BEMDOM.decl(this.name, {

    onSetMod: {
        'js' : {
            'inited' : function () {
                hljs.highlightBlock(this.elem('source')[0]);
            }
        }
    }

}));

});
