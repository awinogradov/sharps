({
    tech : 'js',
    mustDeps : [
        { block : 'i-bem', tech : 'bemhtml' }
    ]
},
{
    tech : 'spec.js',
    mustDeps : [
        { block : 'row', tech : 'bemhtml' }
    ]
},
{
    mustDeps : [
        { block : 'i-bem', elems : 'dom' },
        { block : 'mq' }
    ],
    shouldDeps : [
        { block : 'row', mods : { flexbox : 'disabled' } },
        { elems : 'col' }
    ]
})
