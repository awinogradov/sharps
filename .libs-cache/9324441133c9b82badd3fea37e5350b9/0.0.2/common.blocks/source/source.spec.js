modules.define(
    'spec',
    ['source', 'i-bem__dom', 'jquery', 'BEMHTML', 'sinon'],
    function(provide, Source, BEMDOM, $, BEMHTML, sinon) {

describe('source', function() {
    var source;

    beforeEach(function() {
        source = BEMDOM.init($(BEMHTML.apply({ block : 'source', mods : { lang : 'js', theme : 'github' }, })).appendTo('body'))
            .bem('source');
    });

    afterEach(function() {
        BEMDOM.destruct(source.domElem);
    });


    describe('highlight', function() {
        it('should load highlight.js', function() {
            
        });
    });

});

provide();

});
