[{
    tech : 'js',
    mustDeps : [
        { tech : 'bemhtml', block : 'i-bem' },
        { tech : 'bemhtml', block : 'row' }
    ]
},
{
    tech : 'spec.js',
    mustDeps : [
        { tech : 'bemhtml', block : 'row' },
        { block : 'row', mods : { js : true } }
    ]
},
{
    mustDeps : [
        { block : 'i-bem', elems : 'dom' }
    ]
}]
