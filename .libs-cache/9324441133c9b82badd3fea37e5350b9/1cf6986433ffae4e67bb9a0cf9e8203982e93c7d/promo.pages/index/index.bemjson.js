({
    block : 'page',
    title : 'BEM Content',
    favicon : 'www/favicon.ico',
    head : [{ elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1.0' }}],
    styles : [{ elem : 'css', url : '_index.css' }],
    scripts : [{ elem : 'js', url : '_index.js' }],
    content : [
        {
            elem : 'header',
            content : [
                {
                    block : 'github-ribbon',
                    mods : { theme : 'darkblue', right : true },
                    url : '//github.com/verybigman/bem-content'
                },
                { block : 'heading', content : 'BEM Content' },
                {
                    block : 'paragraph',
                    mods : { type : 'lead' },
                    content : [
                        'Library for simple work with static content.'
                    ]
                },
                {
                    block : 'github-button',
                    mods : { type : 'star', count : true },
                    user : 'verybigman',
                    repo : 'bem-content'
                },
                {
                    block : 'twitter',
                    mods : { widget : 'share' },
                    url : 'https://github.com/verybigman/bem-content',
                    text : 'Отличный набор блоков для верстки статики в терминах БЭМ',
                    via : 'verybigman',
                    related : 'bem_ru',
                    hashtags : 'bem,b_',
                    size : 'small',
                    lang : 'ru'
                }
            ]
        },
        {
            elem : 'content',
            content : [
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            lvl : 2,
                            mix : [ { block : 'section', elem : 'title' } ],
                            content : 'Headings'
                        },
                        {
                            elem : 'content',
                            content : [
                                {
                                    block : 'example',
                                    content : [
                                        {
                                            elem : 'build',
                                            content : [
                                                { block : 'heading', content : 'h1. Level 1' },
                                                { block : 'heading', lvl : 2, content : 'h2. Level 2' },
                                                { block : 'heading', lvl : 3, content : 'h3. Level 3' },
                                                { block : 'heading', lvl : 4, content : 'h4. Level 4' }
                                            ]
                                        },
                                        {
                                            elem : 'source',
                                            content : [
                                                {
                                                    block : 'source',
                                                    mods : { lang : 'js', theme : 'github' },
                                                    content : [
                                                        '{ block : \'heading\', content : \'h1. Level 1\' },\n',
                                                        '{ block : \'heading\', lvl : 2, content : \'h2. Level 2\' },\n',
                                                        '{ block : \'heading\', lvl : 3, content : \'h3. Level 3\' },\n',
                                                        '{ block : \'heading\', lvl : 4, content : \'h4. Level 4\' }'
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block : 'paragraph',
                                    content : [
                                        'Headings sizes writed in rem and uses auto calculating for pretty view.',
                                        'You can customize sizes and math model in variables block.'
                                    ]
                                },
                            ]
                        }
                    ]
                },
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            lvl : 2,
                            mix : [ { block : 'section', elem : 'title' } ],
                            content : 'Paragraphs'
                        },
                        {
                            elem : 'content',
                            content : [
                                {
                                    block : 'example',
                                    content : [
                                        {
                                            elem : 'build',
                                            content : [
                                                {
                                                    block : 'paragraph',
                                                    mods : { type : 'lead' },
                                                    content : [
                                                        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                                                        'Aenean commodo ligula eget dolor. Aenean massa. ',
                                                        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
                                                        'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
                                                        'Nulla consequat massa quis enim.'
                                                    ]
                                                },
                                                {
                                                    block : 'paragraph',
                                                    content : [
                                                        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                                                        'Aenean commodo ligula eget dolor. Aenean massa. ',
                                                        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
                                                        'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
                                                        'Nulla consequat massa quis enim.'
                                                    ]
                                                },
                                                {
                                                    block : 'paragraph',
                                                    mods : { type : 'marked' },
                                                    mark : 'nb',
                                                    content : [
                                                        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                                                        'Aenean commodo ligula eget dolor. Aenean massa. ',
                                                        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
                                                        'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
                                                        'Nulla consequat massa quis enim.'
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem : 'source',
                                            content : [
                                                {
                                                    block : 'source',
                                                    mods : { lang : 'js', theme : 'github' },
                                                    content : [
                                                        '{\n',
                                                        '   block : \'paragraph\',\n',
                                                        '   mods : { type : \'lead\' },\n',
                                                        '   content : [\n',
                                                        '       \'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. \',\n',
                                                        '       \'Aenean commodo ligula eget dolor. Aenean massa. \',\n',
                                                        '       \'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \',\n',
                                                        '       \'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. \',\n',
                                                        '       \'Nulla consequat massa quis enim.\'\n',
                                                        '   ]\n',
                                                        '},\n',
                                                        '{\n',
                                                        '   block : \'paragraph\',\n',
                                                        '   content : [\n',
                                                        '       \'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. \',\n',
                                                        '       \'Aenean commodo ligula eget dolor. Aenean massa. \',\n',
                                                        '       \'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \',\n',
                                                        '       \'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. \',\n',
                                                        '       \'Nulla consequat massa quis enim.\'\n',
                                                        '   ]\n',
                                                        '},\n',
                                                        '{\n',
                                                        '   block : \'paragraph\',\n',
                                                        '   mods : { type : \'marked\' },\n',
                                                        '   mark : \'nb\',\n',
                                                        '   content : [\n',
                                                        '       \'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. \',\n',
                                                        '       \'Aenean commodo ligula eget dolor. Aenean massa. \',\n',
                                                        '       \'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \',\n',
                                                        '       \'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. \',\n',
                                                        '       \'Nulla consequat massa quis enim.\'\n',
                                                        '   ]\n',
                                                        '}\n'
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block : 'paragraph',
                                    content : [
                                        'Paragraphs sizes also customizable'
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            lvl : 2,
                            mix : [ { block : 'section', elem : 'title' } ],
                            content : 'Lists'
                        },
                        {
                            elem : 'content',
                            content : [
                                {
                                    block : 'example',
                                    content : [
                                        {
                                            elem : 'build',
                                            content : [
                                                {
                                                    block : 'list',
                                                    items: [
                                                        'item 1',
                                                        'item 2'
                                                    ]
                                                },
                                                {
                                                    block : 'list',
                                                    mods : { type: 'ordered' },
                                                    items: [
                                                        'ordered item 1',
                                                        'ordered item 2'
                                                    ]
                                                },
                                                {
                                                    block : 'list',
                                                    items : [
                                                        'item 1',
                                                        [
                                                            'item 2',
                                                            {
                                                                block : 'list',
                                                                items : [
                                                                    'nested item 1',
                                                                    'nested item 2'
                                                                ]
                                                            }
                                                        ]
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem : 'source',
                                            content : [
                                                {
                                                    block : 'source',
                                                    mods : { lang : 'js', theme : 'github' },
                                                    content : [
                                                        '{\n',
                                                        '   block : \'list\',\n',
                                                        '   items: [\n',
                                                        '       \'item 1\',\n',
                                                        '       \'item 2\'\n',
                                                        '   ]\n',
                                                        '},\n',
                                                        '{\n',
                                                        '   block : \'list\',\n',
                                                        '   mods : { type: \'ordered\' },\n',
                                                        '   items: [\n',
                                                        '       \'ordered item 1\',',
                                                        '       \'ordered item 2\'',
                                                        '   ]\n',
                                                        '},\n',
                                                        '{\n',
                                                        '   block : \'list\',\n',
                                                        '   items: [\n',
                                                        '       \'item 1\',\n',
                                                        '       [\n',
                                                        '           \'item 2\'\n',
                                                        '           {\n',
                                                        '               block : \'list\',\n',
                                                        '               items: [\n',
                                                        '                   \'nested item 1\',\n',
                                                        '                   \'nested item 2\'\n',
                                                        '               ]\n',
                                                        '           }\n',
                                                        '       ]\n',
                                                        '   ]\n',
                                                        '}\n'
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block : 'paragraph',
                                    content : [
                                        'BEM Content library add wrapper for image for caption writing and HTML5 semantic'
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            lvl : 2,
                            mix : [ { block : 'section', elem : 'title' } ],
                            content : 'Images'
                        },
                        {
                            elem : 'content',
                            content : [
                                {
                                    block : 'example',
                                    content : [
                                        {
                                            elem : 'build',
                                            content : [
                                                {
                                                    block : 'image',
                                                    url : '//raw.githubusercontent.com/bem/bem-identity/master/sign/sign.png'
                                                },
                                                {
                                                    block : 'image',
                                                    url : '//raw.githubusercontent.com/bem/bem-identity/master/sign/sign.png',
                                                    mods : { wrap : true },
                                                    caption : 'This is BEM logo caption',
                                                    width : '60px',
                                                    height: '50px'
                                                }
                                            ]
                                        },
                                        {
                                            elem : 'source',
                                            content : [
                                                {
                                                    block : 'source',
                                                    mods : { lang : 'js', theme : 'github' },
                                                    content : [
                                                        '{\n',
                                                        '   block : \'image\',\n',
                                                        '   url : \'//raw.githubusercontent.com/bem/bem-identity/master/sign/sign.png\'',
                                                        '},\n',
                                                        '{\n',
                                                        '   block : \'image\',\n',
                                                        '   mods : { wrap : true },\n',
                                                        '   url : \'//raw.githubusercontent.com/bem/bem-identity/master/sign/sign.png\',\n',
                                                        '   caption : \'This is BEM logo caption\',\n',
                                                        '   width : \'60px\',\n',
                                                        '   height: \'50px\'\n',
                                                        '}\n'
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block : 'paragraph',
                                    content : [
                                        'BEM Content library add wrapper for image for caption writing and pretty HTML5 semantic.'
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            lvl : 2,
                            mix : [ { block : 'section', elem : 'title' } ],
                            content : 'Sources'
                        },
                        {
                            elem : 'content',
                            content : [
                                {
                                    block : 'example',
                                    content : [
                                        {
                                            elem : 'build',
                                            content : [
                                                {
                                                    block : 'source',
                                                    mods : { lang : 'js', theme : 'github' },
                                                    content : [
                                                        'function test() {\n' +
                                                        '    return \'false\';\n' +
                                                        '}'
                                                    ]
                                                },
                                                {
                                                    block : 'source',
                                                    caption : 'Source with caption',
                                                    mods : { lang : 'js', theme : 'github' },
                                                    content : [
                                                        'function test() {\n' +
                                                        '    return \'false\';\n' +
                                                        '}'
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem : 'source',
                                            content : [
                                                {
                                                    block : 'source',
                                                    mods : { lang : 'js', theme : 'github' },
                                                    content : [
                                                        '{\n',
                                                        '   block : \'source\',\n',
                                                        '   mods : { lang : \'js\', theme : \'github\' },\n',
                                                        '   content : [\n',
                                                        '       \'function test() {\\n\',\n',
                                                        '       \'    return \\\'false\\\';\\n\',\n',
                                                        '       \'}\'\n',
                                                        '   ]\n',
                                                        '},\n',
                                                        '{\n',
                                                        '   block : \'source\',\n',
                                                        '   caption : \'Source with caption\',\n',
                                                        '   mods : { lang : \'js\', theme : \'github\' },\n',
                                                        '   content : [\n',
                                                        '       \'function test() {\\n\',\n',
                                                        '       \'    return \\\'false\\\';\\n\',\n',
                                                        '       \'}\'\n',
                                                        '   ]\n',
                                                        '}\n'
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
                    block : 'section',
                    content : [
                        {
                            block : 'heading',
                            lvl : 2,
                            mix : [ { block : 'section', elem : 'title' } ],
                            content : 'Blockquotes'
                        },
                        {
                            elem : 'content',
                            content : [
                                {
                                    block : 'example',
                                    content : [
                                        {
                                            elem : 'build',
                                            content : [
                                                {
                                                    block : 'blockquote',
                                                    content : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
                                                },
                                                {
                                                    block : 'blockquote',
                                                    source : 'Anton Winogradov',
                                                    content : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
                                                }
                                            ]
                                        },
                                        {
                                            elem : 'source',
                                            content : [
                                                {
                                                    block : 'source',
                                                    mods : { lang : 'js', theme : 'github' },
                                                    content : [
                                                        '{\n',
                                                        '   block : \'blockquote\',\n',
                                                        '   content : \'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\'\n',
                                                        '},\n',
                                                        '{\n',
                                                        '   block : \'blockquote\',\n',
                                                        '   source : \'Anton Winogradov\',\n',
                                                        '   content : \'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\'\n',
                                                        '}\n'
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
            elem : 'footer',
            content : [
                {
                    block : 'paragraph',
                    content : [
                        {
                            block : 'link',
                            url : '//bem.info',
                            content : [
                                {
                                    block : 'image',
                                    url : '//rawgit.com/bem/bem-identity/master/sign/sign.png',
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
