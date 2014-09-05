({
    block : 'page',
    title : 'Grid examples',
    favicon : 'favicon.ico',
    head : [
        { elem : 'meta', attrs : { name: 'viewport', content: 'width=device-width, initial-scale=1' } }
    ],
    styles : [{ elem : 'css', url : '_index.css' }],
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
                    tag : 'section',
                    content : [
                        {
                            block : 'title',
                            tag : 'h2',
                            content : 'dlw - display large width'
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dlw : 11 },
                                    content : '11'
                                },
                                {
                                    elem : 'col',
                                    mods : { dlw : 1 },
                                    content : '1'
                                }
                            ]
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dlw: 10 },
                                    content : '10'
                                },
                                {
                                    elem : 'col',
                                    mods : { dlw : 2 },
                                    content : '2'
                                }
                            ]
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dlw: 9 },
                                    content : '9'
                                },
                                {
                                    elem : 'col',
                                    mods : { dlw : 3 },
                                    content : '3'
                                }
                            ]
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dlw : 8 },
                                    content : '8'
                                },
                                {
                                    elem : 'col',
                                    mods : { dlw : 4 },
                                    content : '4'
                                }
                            ]
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dlw : 7 },
                                    content : '7'
                                },
                                {
                                    elem : 'col',
                                    mods : { dlw : 5 },
                                    content : '5'
                                }
                            ]
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dlw : 6 },
                                    content : '6'
                                },
                                {
                                    elem : 'col',
                                    mods : { dlw : 6 },
                                    content : '6'
                                },
                            ]
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dlw : 5 },
                                    content : '5'
                                },
                                {
                                    elem : 'col',
                                    mods : { dlw : 7 },
                                    content : '7'
                                }
                            ]
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dlw : 4 },
                                    content : '4'
                                },
                                {
                                    elem : 'col',
                                    mods : { dlw : 8 },
                                    content : '8'
                                }
                            ]
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dlw : 3 },
                                    content : '3'
                                },
                                {
                                    elem : 'col',
                                    mods : { dlw : 9 },
                                    content : '9'
                                }
                            ]
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dlw : 2 },
                                    content : '2'
                                },
                                {
                                    elem : 'col',
                                    mods : { dlw : 10 },
                                    content : '10'
                                }
                            ]
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dlw : 1 },
                                    content : '1'
                                },
                                {
                                    elem : 'col',
                                    mods : { dlw : 11 },
                                    content : '11'
                                }
                            ]
                        }
                    ]
                },
                {
                    tag : 'section',
                    content : [
                        {
                            block : 'title',
                            tag : 'h2',
                            content : 'dmw - display medium width'
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dmw : 6 },
                                    content : '6'
                                },
                                {
                                    elem : 'col',
                                    mods : { dmw : 4 },
                                    content : '4'
                                },
                                {
                                    elem : 'col',
                                    mods : { dmw : 2 },
                                    content : '2'
                                }
                            ]
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dmw : 5 },
                                    content : '5'
                                },
                                {
                                    elem : 'col',
                                    mods : { dmw : 4 },
                                    content : '4'
                                },
                                {
                                    elem : 'col',
                                    mods : { dmw : 3 },
                                    content : '3'
                                }
                            ]
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dmw: 4 },
                                    content : '4'
                                },
                                {
                                    elem : 'col',
                                    mods : { dmw: 4 },
                                    content : '4'
                                },
                                {
                                    elem : 'col',
                                    mods : { dmw: 4 },
                                    content : '4'
                                }
                            ]
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dmw: 3 },
                                    content : '3'
                                },
                                {
                                    elem : 'col',
                                    mods : { dmw: 4 },
                                    content : '4'
                                },
                                {
                                    elem : 'col',
                                    mods : { dmw: 5 },
                                    content : '5'
                                }
                            ]
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dmw: 2 },
                                    content : '2'
                                },
                                {
                                    elem : 'col',
                                    mods : { dmw: 4 },
                                    content : '4'
                                },
                                {
                                    elem : 'col',
                                    mods : { dmw: 6 },
                                    content : '6'
                                }
                            ]
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dmw: 1 },
                                    content : '1'
                                },
                                {
                                    elem : 'col',
                                    mods : { dmw: 4 },
                                    content : '4'
                                },
                                {
                                    elem : 'col',
                                    mods : { dmw: 7 },
                                    content : '7'
                                }
                            ]
                        }
                    ]
                },
                {
                    tag : 'section',
                    content : [
                        {
                            block : 'title',
                            tag : 'h2',
                            content : 'dsw - display small width'
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dsw : 1 },
                                    content : '1'
                                },
                                {
                                    elem : 'col',
                                    mods : { dsw : 2 },
                                    content : '2'
                                },
                                {
                                    elem : 'col',
                                    mods : { dsw : 3 },
                                    content : '3'
                                },
                                {
                                    elem : 'col',
                                    mods : { dsw : 6 },
                                    content : '6'
                                }
                            ]
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dsw : 2 },
                                    content : '2'
                                },
                                {
                                    elem : 'col',
                                    mods : { dsw : 3 },
                                    content : '3'
                                },
                                {
                                    elem : 'col',
                                    mods : { dsw : 4 },
                                    content : '4'
                                },
                                {
                                    elem : 'col',
                                    mods : { dsw : 3 },
                                    content : '3'
                                }
                            ]
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dsw : 3 },
                                    content : '3'
                                },
                                {
                                    elem : 'col',
                                    mods : { dsw : 4 },
                                    content : '4'
                                },
                                {
                                    elem : 'col',
                                    mods : { dsw : 3 },
                                    content : '3'
                                },
                                {
                                    elem : 'col',
                                    mods : { dsw : 2 },
                                    content : '2'
                                }
                            ]
                        }
                    ]
                },
                {
                    tag : 'section',
                    content : [
                        {
                            block : 'title',
                            tag : 'h2',
                            content : 'dlc, dmc, dsc - centered columns'
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dlw: 8, dlc : true },
                                    content : 'dlc - centered on large displays'
                                }
                            ]
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dmw : 6, dmc : true },
                                    content : 'dmc - centered on medium displays'
                                }
                            ]
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dsw : 4, dsc : true },
                                    content : 'dsc - centered on small displays'
                                }
                            ]
                        }
                    ]
                },
                {
                    tag : 'section',
                    content : [
                        {
                            block : 'title',
                            tag : 'h2',
                            content : 'dluc, dmuc, dsuc - uncentered columns'
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dlw: 4, dluc : true },
                                    content : 'dluc - uncentered on large displays'
                                }
                            ]
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dmw : 6, dmuc : true },
                                    content : 'dmuc - uncentered on medium displays'
                                }
                            ]
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dsw : 8, dsuc : true },
                                    content : 'dsuc - uncentered on small displays'
                                }
                            ]
                        }
                    ]
                },
                {
                    tag : 'section',
                    content : [
                        {
                            block : 'title',
                            tag : 'h2',
                            content : 'dlo, dmo, dso - offset columns'
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dlw : 6, dlo : 6 },
                                    content : '6'
                                }
                            ]
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dmw : 4, dmo : 8 },
                                    content : '4'
                                }
                            ]
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dsw : 2, dso : 10 },
                                    content : '2'
                                }
                            ]
                        }
                    ]
                },
                {
                    tag : 'section',
                    content : [
                        {
                            block : 'title',
                            tag : 'h2',
                            content : 'dlph, dmph, dsph - push columns'
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dmw : 2, dsph : 2 },
                                    content : '2'
                                }
                            ]
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dmw : 6, dlph : 4 },
                                    content : '6'
                                }
                            ]
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dsw : 2, dmph : 10 },
                                    content : '2'
                                }
                            ]
                        }
                    ]
                },
                {
                    tag : 'section',
                    content : [
                        {
                            block : 'title',
                            tag : 'h2',
                            content : 'dlpl, dmpl, dspl - pull columns'
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dsw : 2 },
                                    content : '2'
                                },
                                {
                                    elem : 'col',
                                    mods : { dsw : 8, dmpl : 2 },
                                    content : '8'
                                }
                            ]
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dmw : 4 },
                                    content : '4'
                                },
                                {
                                    elem : 'col',
                                    mods : { dmw : 6, dlpl : 4 },
                                    content : '6'
                                }
                            ]
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dlw : 2 },
                                    content : '2'
                                },
                                {
                                    elem : 'col',
                                    mods : { dlw : 5, dspl : 3 },
                                    content : '5'
                                }
                            ]
                        }
                    ]
                },
                {
                    tag : 'section',
                    content : [
                        {
                            block : 'title',
                            tag : 'h2',
                            content : 'dlro, dmro, dsro - reset columns order'
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dlw : 4, dlro : true },
                                    content : '4'
                                },
                                {
                                    elem : 'col',
                                    mods : { dlw : 8, dlro : true },
                                    content : '8'
                                }
                            ]
                        },
                    ]
                }
            ]
        }
    ],
    scripts : [{ elem : 'js', url : '_index.js' }]
})
