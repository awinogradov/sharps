/**
 * An "after run" hook for [mocha-phantomjs](https://github.com/metaskills/mocha-phantomjs)
 * to store instrumented code coverage results to temporary buffer,
 * so they could be consumed into Istanbul#Collector for future manipulations.

 * @example
 *   $ mocha-phantomjs \
 *      --hooks <path/to/hook/file.js> \
 *      --setting coverage-file=<path/to/coverage/buffer.json> \
 *      <url>
 */
var fs = require('fs'),
    sys = require('system'),
    args = sys.args;

module.exports = {
    afterEnd : function(reporter) {
        var covData = reporter.page.evaluate(function() {
            return window.__coverage__;
        });

        if(!covData || args.length < 3) return;

        args = JSON.parse(args[3]);

        var covBufferPath = args.settings['coverage-file'];
        if(!covBufferPath) return;

        fs.write(covBufferPath, JSON.stringify(covData), 'w');
    }
};
