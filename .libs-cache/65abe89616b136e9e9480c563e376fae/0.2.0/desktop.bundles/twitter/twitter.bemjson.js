({
    block : 'page',
    title : 'BEM Social Library Page',
    head : [
        { elem : 'css', url : '_twitter.css' }
    ],
    scripts : [{ elem : 'js', url : '_twitter.js' }],
    content : [
        {
            block : 'twitter',
            mods : { widget : 'tweet' },
            content : [
                '<p>Сделал кнопку Твиттера в либу. Социальные кнопки на БЭМ ',
                '<a href="https://t.co/9hclJfMtba">https://t.co/9hclJfMtba</a> ',
                '<a href="https://twitter.com/hashtag/bem?src=hash">#bem</a> ',
                '<a href="https://twitter.com/hashtag/b_?src=hash">#b_</a> ',
                'с помощью <a href="https://twitter.com/bem_ru">@bem_ru</a></p>',
                '&mdash; Ваня Воищев (@voischev) <a href="https://twitter.com/voischev/status/511972758528344064">16 сентября 2014</a>']
        },
        {
            block : 'twitter',
            mods : { widget : 'share' }
        },
        {
            block : 'twitter',
            mods : { widget : 'share' },
            url : 'https://github.com/voischev/bem-social',
            text : 'Социальные кнопки на БЭМ',
            via : 'voischev',
            related : 'bem_ru',
            hashtags : 'bem,b_',
            size : 'large',
            lang : 'ru'
        },
        {
            block : 'twitter',
            mods : { widget : 'share' },
            url : 'https://github.com/voischev/bem-social',
            text : 'Социальные кнопки на БЭМ',
            via : 'voischev',
            related : 'bem_ru',
            count : 'vertical',
            hashtags : 'bem,b_',
            lang : 'ru'
        }
    ]
})
