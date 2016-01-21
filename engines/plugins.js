module.exports = function(config) {
    return [
        require('postcss-mixins'),
        require('postcss-for'),
        require('postcss-simple-vars')({
            variables: config
        }),
        require('lost'),
        require('postcss-import')(),
        require('postcss-url')(),
        require('postcss-cssnext')(),
        require('postcss-nested'),
        require('postcss-browser-reporter')(),
        require('postcss-reporter')()
    ];
};
