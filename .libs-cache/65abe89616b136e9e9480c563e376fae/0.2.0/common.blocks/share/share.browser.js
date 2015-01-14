/* global modules:false */

modules.define('share', ['i-bem__dom', 'control'], function(provide, BEMDOM, Control) {

provide(BEMDOM.decl({ block : this.name, baseBlock : Control }, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.bindTo('click', this._openPopup);
            }
        }
    },
    _openPopup : function() {
        window.open(this.domElem.attr('href'), '', 'toolbar=0,status=0,width=626,height=436');
        return false;
    }
}));
});
