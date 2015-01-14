({
    block : 'page',
    title : 'bem-content: paragraph',
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [
        { block : 'paragraph', content : 'Default paragraph' },
        {
            block : 'paragraph',
            mods : { type : 'lead' },
            content : 'Lead paragraph'
        },
        {
            block : 'paragraph',
            mark : 'nb',
            content : 'Paragraph with mark: nb'
        },
        { tag : 'hr' },
        {
            block : 'paragraph',
            content : [
                'Paragraph',
                ' from ',
                'array'
            ]
        },
        {
            block : 'paragraph',
            mods :  { test : 'mod' },
            content : 'Paragraph with mods'
        },
        {
            block : 'paragraph',
            mix :  { block : 'custom', elem : 'item' },
            content : 'Paragraph with mix'
        },
        {
            block : 'paragraph',
            attrs :  { 'data-title' : 'Paragraph title', title : 'Paragraph title' },
            content : 'Paragraph with custom attributes'
        },
        {
            block : 'paragraph',
            mark : 'Ex:',
            mods :  { type : 'lead', test : 'mod' },
            mix :  { block : 'custom', elem : 'item' },
            attrs :  { 'data-title' : 'All in one', title : 'All in one' },
            content : 'All in one'
        },
    ]
})
