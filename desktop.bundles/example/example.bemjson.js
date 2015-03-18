({
    block : 'page',
    title : 'BEM Grid Example',
    favicon : 'www/favicon.ico',
    head : [{ elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1.0' }}],
    styles : [{ elem : 'css', url : 'example.min.css' }],
    scripts : [{ elem : 'js', url : 'example.min.js' }],
    content : [
        {
            elem : 'header',
            content : [
                {
                    block : 'box',
                    mods : { size : 's', color : 'yellow' },
                    content : 'HEADER - 12 COLUMNS'
                }
            ]
        },
        {
            elem : 'content',
            content : [
                {
                    block : 'row',
                    content : [
                        {
                            elem : 'col',
                            mods : { sw : 2 },
                            content : [
                                {
                                    block : 'box',
                                    mods : { size : 'xl', color : 'yellow' },
                                    content : 'ASIDE - 2 COLUMNS'
                                }
                            ]
                        },
                        {
                            elem : 'col',
                            mods : { sw : 10 },
                            content : [
                                {
                                    block : 'box',
                                    mods : { size : 'xl', color : 'purple' },
                                    content : [
                                        'MAIN SECTION - 10 COLUMNS',
                                        {
                                            block : 'box',
                                            mods : { size : 'l', color : 'brow' },
                                            content : 'SLIDER - 12 COLUMNS'
                                        },
                                        {
                                            block : 'row',
                                            content : (function() {
                                                var articles = [];

                                                for(var i = 0; i < 5; i++) {
                                                    articles.push({
                                                        elem : 'col',
                                                        mods : { s : true },
                                                        content : [
                                                            {
                                                                block : 'box',
                                                                mods : { size : 'm', color : 'brow' },
                                                                content : 'ARTICLE ' + (i + 1) + ' - AUTO SIZE COLUMN'
                                                            }
                                                        ]
                                                    });
                                                }

                                                return articles;
                                            })()
                                        },
                                        {
                                            block : 'row',
                                            content : (function() {
                                                var articles = [];

                                                for(var i = 0; i < 2; i++) {
                                                    articles.push({
                                                        elem : 'col',
                                                        mods : { sw : 6 },
                                                        content : [
                                                            {
                                                                block : 'box',
                                                                mods : { size : 's', color : 'brow' },
                                                                content : 'ARTICLE ' + (i + 1) + ' - 6 COLUMNS'
                                                            }
                                                        ]
                                                    });
                                                }

                                                return articles;
                                            })()
                                        }
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
                    block : 'box',
                    mods : { size : 's', color : 'yellow' },
                    content : 'FOOTER - 12 COLUMNS'
                }
            ]
        }
    ]
})
