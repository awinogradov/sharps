modules.define(
    'vk',
    ['loader_type_js', 'vk__config'],
    function(provide, loader, cfg) {

    /* global VK */
    loader(cfg.url, function() {
        VK.init({ apiId : cfg.apiId, onlyWidgets : cfg.onlyWidgets });
        provide(VK);
    });
});
