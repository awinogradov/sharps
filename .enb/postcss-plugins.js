module.exports = [
    require('postcss-mixins'),
    require('postcss-for'),
    require('postcss-simple-vars')({
        variables : {
            gridMaxWidth : '1100px',
            gridGutter : '10px',
            gridFlex : 'flex'
        }
    }),
    require('lost'),
    require('cssnext')(),
    require('postcss-nested'),
    require('autoprefixer-core')({
        browsers : [
            'last 2 versions',
            'ie 10',
            'ff 24',
            'android 4',
            'ios >= 5'
        ]
    })
];
