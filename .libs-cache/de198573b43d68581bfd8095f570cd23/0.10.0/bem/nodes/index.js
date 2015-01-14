module.exports = function rollRegistry(registry) {
    [
        'monkey',
        'level',
        'common',
        'target',
        'sets',
        'examples',
        'tests',
        'specs',
        'metadoc',
        'jsdoc'
//        'site'
    ]
    .forEach(function(mod) {
        require('./' + mod)(registry);
    });
};
