/* global modules:false */

modules.define('share', function(provide, Share) {

provide(Share.decl({ modName : 'service', modVal : 'vkontakte' }, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                // При желании кастомная обработка
            }
        }
    }
}));

});
