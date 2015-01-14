/**
 * Original [borschik-tech-istanbul](https://github.com/arikon/borschik-tech-istanbul)
 * with BEM-related path about file exclusion.
 */

var PATH = require('path'),
    FS = require('fs'),
    environ = require('bem-environ'),
    istanbul = require('istanbul'),
    instrumenter = new istanbul.Instrumenter({
        coverageVariable : '__coverage__',
        preserveComments : true
    }),
    PRJ_ROOT = environ.PRJ_ROOT,
    EXCLUDE_RE = RegExp([
        '(?:^' + environ.LIB_ROOT + ')',
        '(?:\/node_modules\/)',
        '(?:\\.spec\\.js$)'
    ].join('|'));

module.exports = function(borschik) {
    var base = borschik.getTech('js'),
        File = base.File.inherit({
            read : function() {
                var filePath = this.path;
                if(EXCLUDE_RE.test(filePath)) {
                    this.__base.apply(this, arguments);
                    return;
                }
                var content = FS.readFileSync(this.processPath(filePath), 'utf8');
                this.content = this.parse(
                    instrumenter.instrumentSync(content, PATH.relative(PRJ_ROOT, filePath)));
            }
        }),
        Tech = base.Tech.inherit({ File : File });

    return {
        File : File,
        Tech : Tech
    };
};
