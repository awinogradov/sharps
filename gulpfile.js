var $        = require('gulp-load-plugins')(),
    pkg      = require('./package.json'),
    settings = require('./settings.json'),
    bsync    = require('browser-sync'),
    tsync    = require('run-sequence'),
    bem      = require('bem').api,
    gulp     = require('gulp'),
    path     = require('path'),
    join     = path.join,

    APATH    = join(settings.library.pages.dir, settings.assets.name),
    CSS      = join(APATH, '_' + settings.assets.name + '.css'),
    JS       = join(APATH, '_' + settings.assets.name + '.js'),
    PAGES    = ['index'].map(function(page){ return join(settings.library.pages.dir, page, page + '.html')}),

    V        = pkg.version,
    DNAME    = pkg.name + '_v' + V;

gulp.task('bem', function(){
    return bem.make({verbosity: 'error'});
});

gulp.task('styles', function() {
    gulp.src(CSS)
        .pipe($.minifyCss())
        .pipe($.rename(settings.assets.styles.name))
        .pipe(gulp.dest(settings.assets.styles.dir));
});

gulp.task('bem-styles', function () {
    tsync('bem', 'styles');
});

gulp.task('scripts', function() {
    gulp.src(JS)
        .pipe($.rename(settings.assets.scripts.name))
        .pipe(gulp.dest(settings.assets.scripts.dir))
});

gulp.task('bem-scripts', function () {
    tsync('bem', 'scripts');
});

gulp.task('assets', ['styles', 'scripts']);

gulp.task('pages', function(){
    gulp.src(PAGES)
        .pipe(gulp.dest(settings.public));
});

gulp.task('watch', function() {
    gulp.watch([
            'design/{' + settings.library.levels + '}/**/*.styl',
            'design/{' + settings.library.levels + '}/**/**/*.styl'
        ],  $.shell.task(['gulp bem-styles']));

    gulp.watch([
            '{' + settings.library.levels + '}/*.js',
            '{' + settings.library.levels + '}/**/*.js'
        ],  $.shell.task(['gulp bem-scripts']));

    gulp.watch([
            settings.library.pages.dir + '/**/*.bemjson.js',
            '{' + settings.library.levels + '}/**/*.bemhtml',
            '{' + settings.library.levels + '}/**/**/*.bemhtml'
        ],  $.shell.task(['gulp build']));
});

gulp.task('sync', function(){
    var files = [
        join(settings.public, '*.html'),
        join(settings.assets.scripts.dir, settings.assets.scripts.name),
        join(settings.assets.styles.dir, settings.assets.styles.name)
    ];

    var options = {
        notify: false,
        open: false,
        ghostMode: false,
        logLevel: 'debug',
        minify: false,
        server: {
            baseDir: settings.public
        }
    };

    bsync.init(files, options, function (err, inj) {
        if (err) throw Error(err);
    });
});

gulp.task('build', function () {
    tsync('bem', ['pages', 'assets']);
});

gulp.task('default', function () {
    tsync('default', ['build', 'watch', 'sync']);
});
