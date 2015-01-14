modules.define(
    'vk_widget_like',
    ['i-bem__dom', 'vk', 'vk__config'],
    function(provide, BEMDOM, VK) {

    provide(BEMDOM.decl({ block : 'vk', modName : 'widget', modVal : 'like' }, {
        onSetMod : {
            js : {
                inited : function() {
                    var params = this.params;
                    VK.Widgets.Like(params.element_id, params, params.page_id || '');
                }
            }
        }
    }));

});
