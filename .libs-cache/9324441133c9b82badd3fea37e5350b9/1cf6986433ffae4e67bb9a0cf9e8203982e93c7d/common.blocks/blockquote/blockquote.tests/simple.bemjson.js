({
    block : 'page',
    title : 'bem-content: blockquote',
    head : [
    { elem : 'css', url : '_simple.css' },
    { elem : 'js', url : '_simple.js' }
    ],
    content : [
        { block : 'blockquote', content : 'Default blockquote' },
        {
            block : 'blockquote',
            source : 'Anton Winogradov',
            content : [
                'Blockquote with source'
            ]
        },
        { tag : 'hr' },
        {
            block : 'blockquote',
            mods :  { test : 'mod' },
            source : 'Anton Winogradov',
            content : [
                'Blockquote with mod'
            ]
        },
        {
            block : 'blockquote',
            mix :  { block : 'custom', elem : 'item' },
            source : 'Anton Winogradov',
            content : [
                'Blockquote with mix'
            ]
        },
        {
            block : 'blockquote',
            attrs :  { 'data-title' : 'Blockquote title', title : 'Blockquote title' },
            source : 'Anton Winogradov',
            content : [
                'Blockquote with custom attributes'
            ]
        },
        {
            block : 'blockquote',
            mods :  { test : 'mod' },
            mix :  { block : 'custom', elem : 'item' },
            attrs :  { 'data-title' : 'All in one', title : 'All in one' },
            source : 'Anton Winogradov',
            content : [
                'All in one'
            ]
        }
    ]
})
