[{
    tech : 'spec.js',
    mustDeps : { block: 'spec', tech : 'js' }
},
{
    tech : 'js',
    mustDeps : [
        { block : 'i-bem', tech : 'bemhtml' },
        { block : 'spec', tech : 'bemhtml' }
    ]
},
{
    mustDeps : [
        'mocha',
        'chai',
        'sinon',
        'sinon-chai',
        'jquery'
    ]
}]
