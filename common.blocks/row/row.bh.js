module.exports = function(bh) {
    bh.match('row', function(ctx) {
        ctx.js(true);
    });
};
