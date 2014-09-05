({
    block: 'page',
    title: 'Grid examples',
    favicon: 'favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } }
    ],
    styles: [{ elem: 'css', url: '_index.css' }],
    content:[
        {
            elem: 'header',
            content: [
                {
                    block: 'title',
                    tag: 'h1',
                    content: 'Grid examples'
                }
            ]
        },
        {
            elem: 'content',
            content: [
                {
                    block: 'title',
                    tag: 'h2',
                    content: 'Mod: dlw (display large width)'
                },
                {
                    block: 'line',
                    content: [
                        {
                            elem: 'col',
                            mods: {'dlw': 4},
                            content: '4'
                        },
                        {
                            elem: 'col',
                            mods: {'dlw': 4},
                            content: '4'
                        },
                        {
                            elem: 'col',
                            mods: {'dlw': 4},
                            content: '4'
                        }
                    ]
                },
                {
                    block: 'line',
                    content: [
                        {
                            elem: 'col',
                            mods: {'dlw': 3},
                            content: '3'
                        },
                        {
                            elem: 'col',
                            mods: {'dlw': 6},
                            content: '6'
                        },
                        {
                            elem: 'col',
                            mods: {'dlw': 3},
                            content: '3'
                        }
                    ]
                },
                {
                    block: 'line',
                    content: [
                        {
                            elem: 'col',
                            mods: {'dlw': 2},
                            content: '2'
                        },
                        {
                            elem: 'col',
                            mods: {'dlw': 8},
                            content: '8'
                        },
                        {
                            elem: 'col',
                            mods: {'dlw': 2},
                            content: '2'
                        }
                    ]
                },
                {
                    block: 'line',
                    content: [
                        {
                            elem: 'col',
                            mods: {'dlw': 3},
                            content: '3'
                        },
                        {
                            elem: 'col',
                            mods: {'dlw': 9},
                            content: '9'
                        }
                    ]
                },
                {
                    block: 'line',
                    content: [
                        {
                            elem: 'col',
                            mods: {'dlw': 4},
                            content: '4'
                        },
                        {
                            elem: 'col',
                            mods: {'dlw': 8},
                            content: '8'
                        }
                    ]
                },
                {
                    block: 'line',
                    content: [
                        {
                            elem: 'col',
                            mods: {'dlw': 5},
                            content: '5'
                        },
                        {
                            elem: 'col',
                            mods: {'dlw': 7},
                            content: '7'
                        }
                    ]
                },
                {
                    block: 'line',
                    content: [
                        {
                            elem: 'col',
                            mods: {'dlw': 6},
                            content: '6'
                        },
                        {
                            elem: 'col',
                            mods: {'dlw': 6},
                            content: '6'
                        }
                    ]
                }
            ]
        }
    ],
    scripts: [{ elem: 'js', url: '_index.js' }]
})
