modules.define('row',
    ['i-bem__dom'],
    function(provide, BEMDOM) {

provide(BEMDOM.decl({ block : this.name, modName : 'flexbox', modVal : 'detect' }, {

    onSetMod : {
        'js' : {
            'inited' : function() {
                var detect = document.createElement('detect');
                detect.style.display = 'flex';

                if(detect.style.display !== 'flex') {
                    detect.style.display = '-webkit-flex';
                }

                if(detect.style.display !== 'flex' && detect.style.display !== '-webkit-flex') {
                    this.setMod('flexbox', 'disabled');
                } else {
                    this.setMod('flexbox', 'detected');
                }
            }
        }
    }

}));

});
