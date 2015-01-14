function dropRequireCache(requireFunc, filename) {
    var module = requireFunc.cache[filename];
    if (module) {
        if (module.parent) {
            if (module.parent.children) {
                var moduleIndex = module.parent.children.indexOf(module);
                if (moduleIndex !== -1) {
                    module.parent.children.splice(moduleIndex, 1);
                }
            }
            delete module.parent;
        }
        delete module.children;
        delete requireFunc.cache[filename];
    }
};
dropRequireCache(require, require.resolve("../../node_modules/bh/lib/bh.js"));
var BH = require("../../node_modules/bh/lib/bh.js");
var bh = new BH();
bh.setOptions({
   jsAttrName: 'data-bem',
   jsAttrScheme: 'json'
});

dropRequireCache(require, require.resolve("../../libs/bem-core/common.blocks/page/page.bh.js"));
require("../../libs/bem-core/common.blocks/page/page.bh.js")(bh);
dropRequireCache(require, require.resolve("../../libs/bem-core/common.blocks/ua/ua.bh.js"));
require("../../libs/bem-core/common.blocks/ua/ua.bh.js")(bh);
dropRequireCache(require, require.resolve("../../libs/bem-core/common.blocks/page/__css/page__css.bh.js"));
require("../../libs/bem-core/common.blocks/page/__css/page__css.bh.js")(bh);
dropRequireCache(require, require.resolve("../../libs/bem-core/common.blocks/page/__js/page__js.bh.js"));
require("../../libs/bem-core/common.blocks/page/__js/page__js.bh.js")(bh);
dropRequireCache(require, require.resolve("../../common.blocks/row/row.bh.js"));
require("../../common.blocks/row/row.bh.js")(bh);
dropRequireCache(require, require.resolve("../../libs/bem-components/common.blocks/link/link.bh.js"));
require("../../libs/bem-components/common.blocks/link/link.bh.js")(bh);
dropRequireCache(require, require.resolve("../../libs/bem-components/common.blocks/image/image.bh.js"));
require("../../libs/bem-components/common.blocks/image/image.bh.js")(bh);

module.exports = bh;