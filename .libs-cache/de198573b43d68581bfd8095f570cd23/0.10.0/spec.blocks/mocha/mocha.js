(function(name, ctx, define) {
    var module = define.call(ctx, ctx);
    typeof modules === 'object'?
        modules.define(name, function(provide) { provide(module); }) :
        (ctx[name] = module);
}('mocha', this, function(global) {
// NOTE: prevent global variable `global` to appear from mocha.js
/*borschik:include:__v1-21/mocha__v1-21.js*/;
return global.mocha;
}));
