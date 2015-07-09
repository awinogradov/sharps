({
    block: 'page',
    title: 'BEM Grid Example',
    head: [{elem: 'meta', attrs: {name: 'viewport', content: 'width=device-width, initial-scale=1.0'}}],
    styles: [{elem: 'css', url: 'example.css'}],
    content: [
        {
            elem: 'header',
            content: [
                {
                    block: 'box',
                    mods: {size: 's', color: 'yellow'},
                    content: 'HEADER - 12 COLUMNS'
                }
            ]
        },
        {
            elem: 'content',
            content: [
                {
                    block: 'row',
                    content: [
                        {
                            elem: 'col',
                            mods: {sw: 2},
                            content: [
                                {
                                    block: 'box',
                                    mods: {size: 'xl', color: 'yellow'},
                                    content: 'ASIDE - 2 COLUMNS'
                                }
                            ]
                        },
                        {
                            elem: 'col',
                            mods: {sw: 10},
                            content: [
                                {
                                    block: 'box',
                                    mods: {size: 'xl', color: 'purple'},
                                    content: [
                                        'MAIN SECTION - 10 COLUMNS',
                                        {
                                            block: 'box',
                                            mods: {size: 'l', color: 'brow'},
                                            content: 'SLIDER - 12 COLUMNS'
                                        },
                                        {
                                            block: 'row',
                                            mods: { in: 10 },
                                            content: (function () {
                                                var articles = [];

                                                for (var i = 0; i < 5; i++) {
                                                    articles.push({
                                                        elem: 'col',
                                                        mods: {s: true},
                                                        content: [
                                                            {
                                                                block: 'box',
                                                                mods: {size: 'm', color: 'brow'},
                                                                content: 'ARTICLE ' + (i + 1) + ' - AUTO SIZE COLUMN'
                                                            }
                                                        ]
                                                    });
                                                }

                                                return articles;
                                            })()
                                        },
                                        {
                                            block: 'row',
                                            content: (function () {
                                                var articles = [];

                                                for (var i = 0; i < 2; i++) {
                                                    articles.push({
                                                        elem: 'col',
                                                        mods: {sw: 6},
                                                        content: [
                                                            {
                                                                block: 'box',
                                                                mods: {size: 's', color: 'brow'},
                                                                content: 'ARTICLE ' + (i + 1) + ' - 6 COLUMNS'
                                                            }
                                                        ]
                                                    });
                                                }

                                                return articles;
                                            })()
                                        },
                                        {
                                            block: 'row',
                                            mods: { in: 10 },
                                            content: [
                                                {
                                                    elem: 'col',
                                                    mods: { nest: 7 },
                                                    content: [
                                                        {
                                                            block: 'box',
                                                            mods: {size: 's', color: 'brow'},
                                                            content: [
                                                                '7 COLUMNS IN 10 ROW',
                                                                {
                                                                    block: 'row',
                                                                    mods: { in: 7 },
                                                                    content: [
                                                                        {
                                                                            elem: 'col',
                                                                            mods: { nest: 2 },
                                                                            content: [
                                                                                {
                                                                                    block: 'box',
                                                                                    mods: {size: 's', color: 'green'},
                                                                                    content: [
                                                                                        '2 COLUMNS IN 7 ROW',
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'col',
                                                                            mods: { nest: 5 },
                                                                            content: [
                                                                                {
                                                                                    block: 'box',
                                                                                    mods: {size: 's', color: 'green'},
                                                                                    content: [
                                                                                        '5 COLUMNS IN 7 ROW',
                                                                                    ]
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
                                                    elem: 'col',
                                                    mods: { nest: 3 },
                                                    content: [
                                                        {
                                                            block: 'box',
                                                            mods: {size: 's', color: 'brow'},
                                                            content: '3 COLUMNS IN 10 ROW'
                                                        }
                                                    ]
                                                }
                                            ]
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
            elem: 'footer',
            content: [
                {
                    block: 'box',
                    mods: {size: 's', color: 'yellow'},
                    content: 'FOOTER - 12 COLUMNS'
                }
            ]
        }
    ]
})
