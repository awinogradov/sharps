module.exports = function(config) {
    return [
        require('postcss-mixins'),
        require('postcss-for'),
        require('postcss-simple-vars')({
            variables : config.grid
        }),
        require('lost'),
        require('cssnext')(),
        require('postcss-nested'),
        require('autoprefixer-core')({
            browsers : config.browsers
        })
    ];
};
