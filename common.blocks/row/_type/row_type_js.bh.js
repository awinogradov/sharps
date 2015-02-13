module.exports = function(bh) {
    bh.match('row_type_js', function(ctx) {
        ctx.js(true);
    });
};
