({
    block : 'page',
    title : 'Grid examples',
    favicon : 'favicon.ico',
    head : [
        { elem : 'meta', attrs : { name: 'viewport', content: 'width=device-width, initial-scale=1' } }
    ],
    styles : [
        { elem : 'css', url : '_index.css' }
    ],
    content : [
        {
            elem : 'header',
            content : [
                {
                    block : 'title',
                    tag : 'h1',
                    content : 'Grid examples'
                },
                {
                    block : 'text',
                    tag : 'p',
                    content : 'Change browser width to take effect'
                }
            ]
        },
        {
            elem : 'content',
            content : [
                {
                    block : 'grid',
                    content : [
                        {
                            block : 'title',
                            tag : 'h2',
                            content : 'Awesome for responsive bem-projects'
                        },
                        {
                            block : 'text',
                            tag : 'p',
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
                                    mods : { sw : 6, mw : 8, lw : 10 },
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
                        }
                    ]
                },
                {
                    block : 'grid',
                    content : [
                        {
                            block : 'title',
                            tag : 'h2',
                            content : 'Fluid '
                        },
                        {
                            block : 'text',
                            tag : 'p',
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
                        }
                    ]
                },
                {
                    block : 'grid',
                    content : [
                        {
                            block : 'title',
                            tag : 'h2',
                            content : 'Offsets'
                        },
                        {
                            block : 'text',
                            tag : 'p',
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
                        }
                    ]
                },
                {
                    block : 'grid',
                    content : [
                        {
                            block : 'title',
                            tag : 'h2',
                            content : 'Auto size'
                        },
                        {
                            block : 'text',
                            tag : 'p',
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
                        }
                    ]
                },
                {
                    block : 'grid',
                    content : [
                        {
                            block : 'title',
                            tag : 'h2',
                            content : 'Alignment'
                        },
                        {
                            block : 'text',
                            tag : 'p',
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
                    ]
                },
                {
                    block : 'grid',
                    content : [
                        {
                            block : 'title',
                            tag : 'h2',
                            content : 'Ordering'
                        },
                        {
                            block : 'text',
                            tag : 'p',
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
                        }
                    ]
                }
            ]
        },
        {
            elem : 'footer',
            content : [
                {
                    block : 'grid',
                    content : [
                        {
                            block : 'title',
                            tag : 'h2',
                            content : 'Browsers support'
                        },
                        {
                            block : 'text',
                            tag : 'p',
                            content : [
                                'All features work in: IE 10+, FF 25+, Chrome 28+, Safari 7+, Opera 12.1+, iOS 7.1+, Android Browser 4.1+, Chrome for Android 37+. <br>',
                                'For support old browsers i made degradation blocks and in future this grid maybe support IE 8+.'
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    scripts : [{ elem : 'js', url : '_index.js' }]
})
