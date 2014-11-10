modules.define(
    'row',
    ['i-bem__dom', 'BEMHTML', 'jquery'],
    function(provide, BEMDOM, BEMHTML, $) {

provide(BEMDOM.decl(this.name, {

    onSetMod : {
        'js' : {
            'inited' : function() {
                var detect = document.createElement('detect');
                detect.style.display = 'flex';
                detect.style.display !== 'flex' && this.setMod('flexbox', 'disabled');
            }
        }
    },

    /**
     * Get right index of col
     *
     * If index is integer return it as right,
     * If `index` is undefined return last of row col
     * or id `start` is true return 0.
     *
     * @param {Integer} index
     * @param {Boolean=} start
     * @returns {Integer} index
     */
    _resolveIndex : function(index, start) {
        if(index !== undefined) return index;
        if(start) return 0;
        return this.cols().length - 1;
    },

    /**
     * Alias to get all __cols without cache
     *
     * @returns {JQuery collection}
     */
    cols : function() {
        return $(this.findElem('col'));
    },

    /**
     * Append __cols with new __col
     *
     * Create new __col after `index`.
     *
     * @param {BEMJSON} col
     * @param {Integer=} index
     * @returns {domElem} new __col
     */
    append : function(col, index) {
        var i = this._resolveIndex(index);

        BEMDOM.after(this.cols()[i], BEMHTML.apply(col));

        return this.cols()[i];
    },

    /**
     * Prepend __cols with new __col
     *
     * Create new __col before `index`.
     *
     * @param {BEMJSON} col
     * @param {Integer=} index
     * @returns {domElem} new __col
     */
    prepend : function(col, index) {
        var i = this._resolveIndex(index, true);

        BEMDOM.before(this.cols()[i], BEMHTML.apply(col));

        return this.cols()[i];
    },

    /**
     * Replace __col with new __col
     *
     * @param {BEMJSON} col
     * @param {Integer} index
     * @returns {domElem} new __col
     */
    replace : function(col, index) {
        var method, i;

        if(index === this.cols().length - 1) method = 'append';
        else {
            method = 'prepend';
            i = index;
        }

        this.remove(index);
        this[method](col, i);

        return this.cols()[index];
    },

    /**
     * Remove __col by index
     *
     * @param {Integer} index
     * @returns {Boolean} result
     */
    remove : function(index) {
        if(this.cols().length < index) return false;

        BEMDOM.destruct($(this.cols()[index]));
        return true;
    }

}));

});
