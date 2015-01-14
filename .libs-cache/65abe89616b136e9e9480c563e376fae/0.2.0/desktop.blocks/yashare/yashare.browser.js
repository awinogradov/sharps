modules.define(
    'yashare',
    ['i-bem__dom', 'loader_type_js'],
    function(provide, BEMDOM, Loader) {
    provide(BEMDOM.decl('yashare', {
        onSetMod : {
            js : {
                inited : function() {
                    Loader('//yandex.st/share/share.js');
                }
            }
        }
    }));
});
