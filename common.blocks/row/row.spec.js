modules.define(
    'spec',
    ['row', 'i-bem__dom', 'BEMHTML', 'jquery'],
    function(provide, Row, BEMDOM, BEMHTML, $) {

        describe('row', function() {
            var row,
                col = {
                    block : 'row',
                    elem : 'col',
                    mods : { s : true },
                    attrs : { id : 3 }
                };

            beforeEach(function() {
                row = BEMDOM.init($(BEMHTML.apply({
                    block : 'row',
                    content : [
                        {
                            elem : 'col',
                            mods : { s : true },
                            attrs : { id : 0 }
                        },
                        {
                            elem : 'col',
                            mods : { s : true },
                            attrs : { id : 1 }
                        }
                    ]
                })).appendTo('body')).bem('row');
            });

            afterEach(function() {
                BEMDOM.destruct(row.domElem);
            });

            describe('cols manipulating', function() {
                it('should be appended by new __col with default index', function() {
                    row.cols().length.should.be.equal(2);
                    row.append(col);
                    row.cols().length.should.be.equal(3);
                    $(row.cols()[row.cols().length - 2]).attr('id').should.be.equal('1');
                    $(row.cols()[row.cols().length - 1]).attr('id').should.be.equal(col.attrs.id.toString());
                });

                it('should be appended by new __col with custom index', function() {
                    row.cols().length.should.be.equal(2);
                    row.append(col, 0);
                    row.cols().length.should.be.equal(3);
                    $(row.cols()[0]).attr('id').should.be.equal('0');
                    $(row.cols()[1]).attr('id').should.be.equal(col.attrs.id.toString());
                });

                it('should be prepend by new __col with default index', function() {
                    row.cols().length.should.be.equal(2);
                    row.prepend(col);
                    row.cols().length.should.be.equal(3);
                    $(row.cols()[1]).attr('id').should.be.equal('0');
                    $(row.cols()[0]).attr('id').should.be.equal(col.attrs.id.toString());
                });

                it('should be prepend by new __col with custom index', function() {
                    row.cols().length.should.be.equal(2);
                    row.prepend(col, 1);
                    row.cols().length.should.be.equal(3);
                    $(row.cols()[2]).attr('id').should.be.equal('1');
                    $(row.cols()[1]).attr('id').should.be.equal(col.attrs.id.toString());
                });

                it('should be replace target __col with new __col', function() {
                    row.cols().length.should.be.equal(2);
                    $(row.cols()[1]).attr('id').should.be.equal('1');
                    row.replace(col, 1);
                    row.cols().length.should.be.equal(2);
                    $(row.cols()[1]).attr('id').should.be.equal(col.attrs.id.toString());
                });

                it('should be remove target __col', function() {
                    row.cols().length.should.be.equal(2);
                    row.remove(1);
                    row.cols().length.should.be.equal(1);
                    $(row.cols()[0]).attr('id').should.be.equal('0');
                });
            });

        });

        provide();

    });
