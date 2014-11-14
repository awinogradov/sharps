modules.define(
    'row',
    ['i-bem__dom', 'BEMHTML'],
    function(provide, BEMDOM, BEMHTML, Row) {

provide(Row.decl({ modName : 'type', modVal : 'js' }, {
    /**
     * Get right index of __col
     *
     * If index is integer return it as right,
     * If `index` is undefined return last __col
     * or id `start` is true return 0.
     *
     * @param {Integer} index
     * @param {Boolean=} start
     * @returns {Integer} index
     */
    _resolveIndex : function(index, start) {
        if(index !== undefined) return index;
        if(start) return 0;
        return this.getCols().length - 1;
    },

    /**
     * Alias to get all __cols without cache
     *
     * @returns {JQuery collection}
     */
    getCols : function() {
        return this.findElem('col');
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

        return BEMDOM.after(this.getCols()[i], BEMHTML.apply(col));
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

        return BEMDOM.before(this.getCols()[i], BEMHTML.apply(col));
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

        if(index === this.getCols().length - 1){
            method = 'append';
        } else {
            method = 'prepend';
            i = index;
        }

        this.remove(index);

        return this[method](col, i);
    },

    /**
     * Remove __col by index
     *
     * @param {Integer} index
     * @returns {Boolean} result
     */
    remove : function(index) {
        if(this.getCols().length < index) return false;

        return BEMDOM.destruct(this.getCols().eq(index));
    }

}));

});
