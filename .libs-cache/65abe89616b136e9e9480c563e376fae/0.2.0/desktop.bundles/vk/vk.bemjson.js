({
    block : 'page',
    title : 'BEM Social Library Page',
    head : [
        { elem : 'css', url : '_vk.css' }
    ],
    scripts : [{ elem : 'js', url : '_vk.js' }],
    content : [
        {
           block : 'vk',
           mods : { widget : 'like' },
           js : { type : 'button' },
           id : 'vk_like'
        },
        {
           block : 'vk',
           mods : { widget : 'like' },
           js : { type : 'button', height : 18 },
           id : 'vk_like2'
        },
        {
           block : 'vk',
           mods : { widget : 'like' },
           js : { type : 'button', verb : 1, height : 24 },
           id : 'vk_like3'
        },
        {
           block : 'vk',
           mods : { widget : 'like' },
           js : { type : 'full' },
           id : 'vk_like4'
        },
        {
           block : 'vk',
           mods : { widget : 'like' },
           js : { type : 'mini' },
           id : 'vk_like4'
        },
        {
           block : 'vk',
           mods : { widget : 'like' },
           js : { type : 'vertical' },
           id : 'vk_like4'
        }
    ]
})
