({
    block : 'page',
    title : 'bem-content: figure',
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [
        { block : 'figure', content : 'Default figure' },
        {
            block : 'figure',
            caption : 'This is caption',
            content : [
                'Figure with caption'
            ]
        },
        { tag : 'hr' },
        {
            block : 'figure',
            mods :  { test : 'mod' },
            caption : 'This is caption',
            content : [
                'Figure with mod'
            ]
        },
        {
            block : 'figure',
            mix :  { block : 'custom', elem : 'item' },
            caption : 'This is caption',
            content : [
                'Figure with mix'
            ]
        },
        {
            block : 'figure',
            attrs :  { 'data-title' : 'Figure title', title : 'Figure title' },
            caption : 'This is caption',
            content : [
                'Figure with custom attributes'
            ]
        },
        {
            block : 'figure',
            mods :  { test : 'mod' },
            mix :  { block : 'custom', elem : 'item' },
            attrs :  { 'data-title' : 'All in one', title : 'All in one' },
            caption : 'This is caption',
            content : [
                'All in one'
            ]
        }
    ]
})
