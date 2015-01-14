var FS = require('fs'),
    PATH = require('path'),
    URL = require('url'),
    UTIL = require('util'),
    BEM = require('bem'),
    Q = require('q'),
    exec = require('child_process').exec,
    LOGGER = BEM.logger,
    MOCHA_PHANTOM_BIN = require.resolve('mocha-phantomjs/bin/mocha-phantomjs'),
    MOCHA_PHANTOM_HOOK = PATH.resolve(__dirname, '../hooks/mocha-phantomjs.js'),
    MOCHA_PHANTOM_REPORTER = process.env.MOCHA_PHANTOM_REPORTER || 'spec',
    MOCHA_PHANTOM_MAX_COUNT = parseInt(process.env.MOCHA_PHANTOM_MAX_COUNT, 10) || 10,
    phantomCount = 0,
    phantomQueue = [],
    NEED_COVERAGE = process.env.ISTANBUL_COVERAGE,
    covCollector,
    covIdx;

if(NEED_COVERAGE) {
    covCollector = new (require('istanbul').Collector)();
    covIdx = 0;
}

exports.API_VER = 2;

exports.techMixin = {

    getDependencies : function() {
        return ['html', 'spec.js'];
    },

    getCoverageReportDir : function() {
        return this.context.opts.dir || process.cwd();
    },

    createByDecl : function(item, level) {
        var root = this.context.opts.dir || '',
            prefix = level.getByObj(item),
            relPrefix = PATH.relative(root, prefix),
            path = this.getPath(prefix, 'html'),
            args = '--reporter ' + MOCHA_PHANTOM_REPORTER,
            url = URL.format({
                protocol : 'file',
                host : '/',
                pathname : path
            }),
            defer = Q.defer(),
            covBufFile;

        if(NEED_COVERAGE) {
            covBufFile = PATH.join(root, UTIL.format(
                '__coverage-%s-%s-%s.json',
                relPrefix.replace(/[^A-Za-z0-9_. ]/g, '_'),
                Date.now()-0,
                covIdx++));

            LOGGER.fdebug('Store coverage buffer for "%s" into "%s"', relPrefix, covBufFile);

            args += ' --hooks ' + MOCHA_PHANTOM_HOOK;
            args += ' --setting coverage-file=' + covBufFile;
        }

        phantomCount < MOCHA_PHANTOM_MAX_COUNT?
            runMochaPhantom() :
            phantomQueue.push(runMochaPhantom);

        var _this = this;

        function getCovData() {
            var data = {},
                exists = FS.existsSync(covBufFile);

            LOGGER.fdebug('Coverage buffer for "%s" %s', relPrefix, exists? 'found' : 'doesn\'t exist');

            if(exists) {
                data = JSON.parse(FS.readFileSync(covBufFile, 'utf8'));
                dropCovBuffer();
            }

            return data;
        }

        function dropCovBuffer() {
            try {
                FS.unlinkSync(covBufFile);
            } catch(e) {}
        }

        function runMochaPhantom() {
            phantomCount++;

            exec([MOCHA_PHANTOM_BIN, args, url].join(' '), function(err, stdout, stderr) {
                --phantomCount;
                phantomQueue.length && phantomQueue.shift()();

                var passed = err === null;

                LOGGER.finfo('Tests results for "%s":\n%s',
                    PATH.relative(root, path), stdout, stderr? '\nStderr: ' + stderr : '');

                if(passed) {
                    if(NEED_COVERAGE) {
                        LOGGER.fdebug('Going to read coverage buffer for "%s"', relPrefix);

                        covCollector.add(getCovData());
                        phantomCount || _this.storeFinalCoverage();
                    }
                    defer.resolve();
                } else {
                    LOGGER.error('Tests failed:', err);

                    NEED_COVERAGE && dropCovBuffer();

                    defer.reject(err);
                }
            });
        }

        LOGGER.finfo('[i] Page was sent to Phantom (%s)', url);

        return defer.promise;
    },

    storeFinalCoverage : function() {
        var covFile = PATH.resolve(this.getCoverageReportDir(), 'coverage.json');

        LOGGER.finfo('[i] Store final coverage "%s"', covFile);
        FS.writeFileSync(covFile, JSON.stringify(covCollector.getFinalCoverage()), 'utf8');

        covCollector.dispose();
    }

};
