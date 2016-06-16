module.exports = function(config) {
    return [
        require('postcss-mixins'),
        require('postcss-for'),
        require('postcss-simple-vars')({
            variables: config
        }),
        require('postcss-custom-media'),
        require('lost'),
        require('postcss-nested'),
        require('postcss-browser-reporter')(),
        require('postcss-reporter')()
    ];
};
