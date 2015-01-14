({
    block : 'page',
    title : 'bem-content: source',
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [
        {
            block : 'source',
            content : 'function test() {\n return true;\n }\n'
        },
        {
            block : 'source',
            mods : { lang : 'js' },
            content : 'function test() {\n return true;\n }\n'
        },
        {
            block : 'source',
            mods : { theme : 'github' },
            content : 'function test() {\n return true;\n }\n'
        },
        {
            block : 'source',
            mods : { lang : 'js', theme : 'github' },
            content : 'function test() {\n return true;\n }\n'
        },
        {
            block : 'source',
            mods : { lang : 'js', theme : 'github' },
            caption : 'Source with caption',
            content : 'function test() {\n return true;\n }\n'
        },
        { tag : 'hr' },
        {
            block : 'source',
            mods : { lang : 'js', theme : 'github' },
            caption : 'Source with caption and array content',
            content : [
                'function test() {\n',
                '    return true;\n',
                '}\n'
            ]
        },
        {
            block : 'source',
            mods : { lang : 'js', theme : 'github', test : 'mod' },
            caption : 'Source with caption and custom mods',
            content : 'function test() {\n return true;\n }\n'
        },
        {
            block : 'source',
            mods : { lang : 'js', theme : 'github' },
            mix :  { block : 'custom', elem : 'item' },
            caption : 'Source with caption and mix',
            content : 'function test() {\n return true;\n }\n'
        },
        {
            block : 'source',
            mods : { lang : 'js', theme : 'github' },
            attrs :  { 'data-title' : 'Source title', title : 'Source title' },
            caption : 'Source with caption and custom attributes',
            content : 'function test() {\n return true;\n }\n'
        },
        {
            block : 'source',
            mods : { lang : 'js', theme : 'github', test : 'mod' },
            mix :  { block : 'custom', elem : 'item' },
            attrs :  { 'data-title' : 'All in one', title : 'All in one' },
            caption : 'Source with caption and all in one',
            content : 'function test() {\n return true;\n }\n'
        }
    ]
})
