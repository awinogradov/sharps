({
    block : 'page',
    title : 'BEM Flexbox grid',
    favicon : 'favicon.ico',
    head : [{ elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1.0' }}],
    styles : [{ elem : 'css', url : 'assets/application.min.css' }],
    scripts : [{ elem : 'js', url : 'assets/application.min.js' }],
    content : [
        {
            elem : 'header',
            content : [
                {
                    block : 'gh-ribbon',
                    url : 'https://github.com/verybigman/bem-grid'
                },
                {
                    block : 'heading', lvl : 1, content : 'Flexbox bem-grid'
                },
                {
                    block : 'paragraph',
                    mods : { lead : true },
                    content : 'This is very simple flexbox grid for your bem-projects. Change browser width to take effect.'
                }
            ]
        },
        {
            elem : 'content',
            content : [
                {
                    tag : 'section',
                    content : [
                        {
                            block : 'heading', lvl : 2, content : 'Awesome for responsive bem-projects'
                        },
                        {
                            block : 'paragraph',
                            content : 'Responsive mods enable specifying different column sizes, offsets and alignment at s, m & l widths'
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 12, mw : 3, lw : 1 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 6, mw : 7, lw : 10 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 6, mw : 2, lw : 1 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 12, mw : 2, lw : 1 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 12, mw : 10, lw : 11 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 10, mw : 8, lw : 10 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 2, mw : 4, lw : 2 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'example',
                            content : [
                                {
                                    block : 'link',
                                    url : 'https://github.com/verybigman/bem-grid/blob/master/desktop.pages/index/index.bemjson.js#L39-L102',
                                    target : '_blank',
                                    content : 'view source'
                                }
                            ]
                        }
                    ]
                },
                {
                    tag : 'section',
                    content : [
                        {
                            block : 'heading', lvl : 2, content : 'Fluid '
                        },
                        {
                            block : 'paragraph',
                            content : 'Percent based widths allow fluid resizing of columns and rows'
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 1 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 2 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 6 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 2 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 4 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 4 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 2 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'example',
                            content : [
                                {
                                    block : 'link',
                                    url : 'https://github.com/verybigman/bem-grid/blob/master/desktop.pages/index/index.bemjson.js#L126-L224',
                                    target : '_blank',
                                    content : 'view source'
                                }
                            ]
                        }
                    ]
                },
                {
                    tag : 'section',
                    content : [
                        {
                            block : 'heading', lvl : 2, content : 'Offsets'
                        },
                        {
                            block : 'paragraph',
                            content : 'Offset a column'
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 10, so : 2 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 8, so : 4 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 6, so : 6 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 4, so : 8 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 2, so : 10 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'example',
                            content : [
                                {
                                    block : 'link',
                                    url : 'https://github.com/verybigman/bem-grid/blob/master/desktop.pages/index/index.bemjson.js#L248-L307',
                                    target : '_blank',
                                    content : 'view source'
                                }
                            ]
                        }
                    ]
                },
                {
                    tag : 'section',
                    content : [
                        {
                            block : 'heading', lvl : 2, content : 'Auto size'
                        },
                        {
                            block : 'paragraph',
                            content : 'Any number of auto sizing columns to a row'
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { s : true },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { s : true },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { s : true },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { s : true },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { s : true },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'example',
                            content : [
                                {
                                    block : 'link',
                                    url : 'https://github.com/verybigman/bem-grid/blob/master/desktop.pages/index/index.bemjson.js#L331-L375',
                                    target : '_blank',
                                    content : 'view source'
                                }
                            ]
                        }
                    ]
                },
                {
                    tag : 'section',
                    content : [
                        {
                            block : 'heading', lvl : 2, content : 'Alignment'
                        },
                        {
                            block : 'paragraph',
                            content : 'Mods to align elements to the left or right of a row as well as the top, bottom, or center of a column'
                        },
                        {
                            block : 'row',
                            mods : { sal : true },
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 2 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 2 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            mods : { sac : true },
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 2 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 2 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            mods : { sar : true },
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 2 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 2 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            mods : { svat : true },
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 6 },
                                    content : [
                                        { block : 'box' },
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 6 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            mods : { svam : true },
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 6 },
                                    content : [
                                        { block : 'box' },
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 6 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            mods : { svab : true },
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 6 },
                                    content : [
                                        { block : 'box' },
                                        { block : 'box' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 6 },
                                    content : [
                                        { block : 'box' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'example',
                            content : [
                                {
                                    block : 'link',
                                    url : 'https://github.com/verybigman/bem-grid/blob/master/desktop.pages/index/index.bemjson.js#L399-L521',
                                    target : '_blank',
                                    content : 'view source'
                                }
                            ]
                        }
                    ]
                },
                {
                    tag : 'section',
                    content : [
                        {
                            block : 'heading', lvl : 2, content : 'Ordering'
                        },
                        {
                            block : 'paragraph',
                            content : 'Mods to reorder columns'
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 4 },
                                    content : [
                                        { block : 'box', content : '1' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 4 },
                                    content : [
                                        { block : 'box', content : '2' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 4, sof : true },
                                    content : [
                                        { block : 'box', content : '3' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        { block : 'box', content : '1' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3, sol : true },
                                    content : [
                                        { block : 'box', content : '2' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        { block : 'box', content : '3' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { sw : 3 },
                                    content : [
                                        { block : 'box', content : '4' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'example',
                            content : [
                                {
                                    block : 'link',
                                    url : 'https://github.com/verybigman/bem-grid/blob/master/desktop.pages/index/index.bemjson.js#L545-L603',
                                    target : '_blank',
                                    content : 'view source'
                                }
                            ]
                        }
                    ]
                },
                {
                    tag : 'section',
                    content : [
                        {
                            block : 'heading', lvl : 2, content : 'Mantle'
                        },
                        {
                            block : 'paragraph',
                            content : 'Block for pretty work with different screens. Resize your browser :-)'
                        },
                        {
                            block : 'row',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { m : true, sw : 0  },
                                    content : [
                                        { block : 'box', content : '1' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { s : true, mw : 0 },
                                    content : [
                                        { block : 'box', content : '2' }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mix : [ { block : 'mantle', mods : { hidden : 'l' } } ],
                                    mods : { s : true, lw : 0 },
                                    content : [
                                        { block : 'box', content : '3' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'example',
                            content : [
                                {
                                    block : 'link',
                                    url : 'https://github.com/verybigman/bem-grid/blob/master/desktop.pages/index/index.bemjson.js#L627-L653',
                                    target : '_blank',
                                    content : 'view source'
                                }
                            ]
                        }
                    ]
                },
                {
                    tag : 'section',
                    content : [
                        {
                            block : 'heading', lvl : 2, content : 'Customize'
                        },
                        {
                            block : 'paragraph',
                            content : [
                                'Grid very simple for customize. You can configure everything. Ex: base grid width, columns count, media queries, paddings and more.',
                                'To do this you need create block <strong>variables</strong> on one of levels in your project and override any variable in it.',
                                'So, list of variables you can watch ',
                                {
                                    block : 'link',
                                    url : 'https://github.com/verybigman/bem-grid/blob/master/common.blocks/variables/variables.styl',
                                    target : '_blank',
                                    content : 'here'
                                },
                                '.'
                            ]
                        }
                    ]
                },
                {
                    tag : 'section',
                    content : [
                        {
                            block : 'heading', lvl : 2, content : 'Browsers support'
                        },
                        {
                            block : 'paragraph',
                            content : [
                                'All features work in: IE 10+, FF 25+, Chrome 28+, Safari 7+, Opera 12.1+, iOS 7.1+, Android Browser 4.1+, Chrome for Android 37+. <br>',
                                'For support old browsers i made degradation blocks and in future this grid maybe support IE 8+.'
                            ]
                        }
                    ]
                }
            ]
        },
        {
            elem : 'footer',
            content : [
                {
                    block : 'paragraph',
                    content : [
                        {
                            block : 'link',
                            url : 'http://bem.info',
                            content : [
                                {
                                    block : 'image',
                                    url : 'https://rawgit.com/bem/bem-identity/master/sign/sign.png',
                                    width: '50px'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})
