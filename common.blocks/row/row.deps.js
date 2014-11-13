({
    tech : 'js',
    mustDeps : [
        { tech : 'bemhtml', block : 'i-bem' },
        { tech : 'bemhtml', block : 'row' }
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
