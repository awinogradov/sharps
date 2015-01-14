({
    block : 'page',
    title : 'bem-content: image',
    head : [
    { elem : 'css', url : '_simple.css' },
    { elem : 'js', url : '_simple.js' }
    ],
    content : [
        {
            block : 'image',
            width : '60px',
            height : '60px',
            title : 'Default image from bem-components',
            url : 'https://raw.githubusercontent.com/bem/bem-identity/master/sign/sign.png'
        },
        {
            block : 'image',
            mods : { wrap : true },
            width : '60px',
            height : '60px',
            title : 'Image wrapped into figure block',
            url : 'https://raw.githubusercontent.com/bem/bem-identity/master/sign/sign.png'
        },
        { tag : 'hr' },
        {
            block : 'image',
            mods : { wrap : true, test : 'mod' },
            width : '60px',
            height : '60px',
            title : 'Image wrapped into figure block and with mods',
            url : 'https://raw.githubusercontent.com/bem/bem-identity/master/sign/sign.png'
        },
        {
            block : 'image',
            mods : { wrap : true },
            mix :  { block : 'custom', elem : 'item' },
            width : '60px',
            height : '60px',
            title : 'Image wrapped into figure block and with mix',
            url : 'https://raw.githubusercontent.com/bem/bem-identity/master/sign/sign.png'
        },
        {
            block : 'image',
            mods : { wrap : true },
            attrs :  { 'data-title' : 'Image title' },
            width : '60px',
            height : '60px',
            title : 'Image wrapped into figure block and with custom attributes',
            url : 'https://raw.githubusercontent.com/bem/bem-identity/master/sign/sign.png'
        },
        {
            block : 'image',
            mods : { wrap : true },
            mix :  { block : 'custom', elem : 'item' },
            attrs :  { 'data-title' : 'Image title' },
            width : '60px',
            height : '60px',
            title : 'Image wrapped into figure block and all in one',
            url : 'https://raw.githubusercontent.com/bem/bem-identity/master/sign/sign.png'
        }
    ]
})
