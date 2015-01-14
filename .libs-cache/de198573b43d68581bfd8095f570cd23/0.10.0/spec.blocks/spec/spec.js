(function() {

typeof modules === 'object'?
    modules.define(
        'spec',
        ['mocha', 'chai', 'sinon', 'sinon-chai'],
        function(provide, mocha, chai, sinon, sinonChai) {
            define.call(this.global, mocha, chai, sinon, sinonChai);
            provide();
        }) :
    define(this.mocha, this.chai, this.sinon, this.sinonChai);

function define(mocha, chai, sinon, sinonChai) {
    mocha.ui('bdd');

    chai.use(sinonChai);
    chai.should();
}

}());
