({
    block : 'page',
    title : 'bem-content: list',
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [
        {
            block : 'list',
            items : [
                'item 1',
                'item 2',
                'item 3'
            ]
        },
        {
            block : 'list',
            items : [
                'item 1',
                'item 2',
                'item 3',
                [
                    {
                        block : 'list',
                        items : ['nested item 1', 'nested item 2']
                    }
                ]
            ]
        },
        {
            block : 'list',
            items : [
                'item 1',
                'item 2',
                'item 3',
                [
                    'item 4',
                    {
                        block : 'list',
                        items : ['nested item 1', 'nested item 2']
                    }
                ]
            ]
        },
        {
            block : 'list',
            items : [
                'item 1',
                'item 2',
                'item 3',
                [
                    'item 4',
                    {
                        block : 'list',
                        mods : { type : 'ordered' },
                        items : ['nested and ordered item 1', 'nested and ordered item 2']
                    }
                ]
            ]
        },
        {
            block : 'list',
            mods : { type : 'ordered' },
            items : [
                'ordered item 1',
                'ordered item 2',
                'ordered item 3'
            ]
        },
        {
            block : 'list',
            mods : { type : 'ordered' },
            items : [
                'ordered item 1',
                'ordered item 2',
                'ordered item 3',
                [
                    'ordered item 4',
                    {
                        block : 'list',
                        items : ['nested item 1', 'nested item 2']
                    }
                ]
            ]
        },
        {
            block : 'list',
            mods : { type : 'ordered' },
            items : [
                'ordered item 1',
                'ordered item 2',
                'ordered item 3',
                [
                    'ordered item 4',
                    {
                        block : 'list',
                        mods : { type : 'ordered' },
                        items : ['nested and ordered item 1', 'nested and ordered item 2']
                    }
                ]
            ]
        },
        { tag : 'hr' },
        {
            block : 'list',
            mods : { type : 'ordered', test : 'mod' },
            items : [
                'ordered item 1',
                'ordered item 2',
                'ordered item 3'
            ]
        },
        {
            block : 'list',
            mods : { type : 'ordered' },
            mix :  { block : 'custom', elem : 'item' },
            items : [
                'ordered item 1',
                'ordered item 2',
                'ordered item 3'
            ]
        },
        {
            block : 'list',
            mods : { type : 'ordered' },
            attrs :  { 'data-title' : 'List title', title : 'List title' },
            items : [
                'ordered item 1',
                'ordered item 2',
                'ordered item 3'
            ]
        },
        {
            block : 'list',
            mods : { type : 'ordered', test : 'mod' },
            mix :  { block : 'custom', elem : 'item' },
            attrs :  { 'data-title' : 'All in one', title : 'All in one' },
            items : [
                'ordered item 1',
                'ordered item 2',
                'ordered item 3'
            ]
        }
    ]
})
