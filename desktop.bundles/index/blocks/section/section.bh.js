module.exports = function(bh) {

    bh.match('section', function(ctx) {
        ctx.tag('section');
    });

};
