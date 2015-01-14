0.10.0 / 2014-09-11
==================

  * fix spec.js+browser.js+bemhtml.js tech to properly work with "js to spec.js" relation in depsByTech (#89)

0.9.0 / 2014-08-09
==================

  * update [mocha](https://github.com/visionmedia/mocha) to 1.21.4
  * update [sinon](http://sinonjs.org) to 1.10.3
  * update [mocha-phantomjs](https://github.com/metaskills/mocha-phantomjs) to 3.5.0
  * remove `mocha.bail` option from `spec`
  * fix global variable `global` occurrence from mocha.js<1.20
  * fix spec-runner `init` function call to work properly with mocha>=1.20

0.8.0 / 2014-04-14
==================

  * remove temporary coverage reports if specs fail (#84)
  * add @file tag during JSDoc generation (#85)
  * fix duplicates of JSDoc nodes invocation

0.7.1 / 2014-04-02
==================

  * mocha's timeout is set to 5000ms for spec

0.7.0 / 2014-04-01
==================

APRIL FOOLS DAY RELEASE

  * allow specs to be written in environment were no [ym](http://github.com/ymaps/ym) used (#79)
  * generate code coverage for specs (#77)<br/>
    If environment variable `ISTANBUL_COVERAGE` is set, specs would be processed with
    [istanbul](http://github.com/gotwarlost/istanbul) code coverage tool. Final coverage information would be stored
    in the `coverage.json` file in the project's root.<br/>
    See istanbul's documentation for more info about code coverage
  * spec building process simplified to fix some rare issues with Travis CI (see #74, #76)
  * update [chai](http://chaijs.com/) to 1.9.0 (#81)
  * add nodes to build jsdoc (#70)<br/>
    NOTE: we're using [bem-jsd](http://github.com/bem/bem-jsd) tool, so your JSDoc should be written the way bem-jsd
    could parse it
  * build markdown files from jsdoc.json (#82)

0.6.4 / 2014-03-19
==================

  * bem-jsd version updated to 1.3.1

0.6.3 / 2014-03-19
==================

  * fix #73

0.6.2 / 2014-02-07
==================

  * fix #72

0.6.1 / 2014-01-14
==================

  * [mocha](https://github.com/visionmedia/mocha) updated to 1.17.0 (#67)

0.6.0 / 2014-01-13
==================

HAPPY (NEW) YEAR RELEASE

  * add nodes for "tests"-building (#61, #64)
  * [mocha-phantomjs](https://github.com/metaskills/mocha-phantomjs) was updated to 3.2.x
  * minor bugs fixed

0.5.3 / 2013-12-12
==================

  * bug fixed

0.5.2 / 2013-12-09
==================

  * fix #64

0.5.1 / 2013-12-06
==================

  * fix #63

0.5.0 / 2013-12-03
==================

NOTE: this release breaks backward compability with previous versions

  * no more `<setName>.sets` levels needed, all building process are made
    in `<setName>.<tech>` direcotories, e.g. `desktop.examples` (#36)
  * teches are declared with `SetsNode#getSoutceTechs`
  * no more default teches declared — user should always use `getSoutceTechs`
    in `make.js` to specify sets' teches
  * all tests related stuff renamed to `specs` (#62)

    - tests -> specs
    - test.js -> spec.js
    - test-tmpl -> spec.bemjson.js
    - TestNode -> SpecNode

  * SpecNode in no longer inherits from ExampleNode, so
    `SpecNode#getTechs` and `SpecNode#getLevels` should be defined explicitly
  * default test's bundle is <spec-tech-name> instead of `default`,
    for example `desktop.specs/dom/spec-js`
  * bug fixed


0.3.6 / 2013-10-29
==================

  * fix race when running tests from bem-server (@SevInf) #57

0.3.5 / 2013-08-23
==================

NOTE: all tech modules rewriten to v2 API of bem >= 0.6.15

  * fix #46
  * fix #48
  * fix #49
  * drop dependency from bem-core's "page" block in test-tmpls tech

0.3.1 / 2013-08-17
==================

  * bug fixed

0.3.0 / 2013-07-31
==================

NOTE: this release requires bem >= 0.6.x

  * tech modules were refactored to satisfy v2 API (#40)

0.2.3 / 2013-07-27
==================

  * fix #38

0.2.2 / 2013-07-21
==================

  * hot fix

0.2.1 / 2013-07-21
==================

  * build nodes were spreaded into separate modules to simplify future
    maintenance

0.2.0 / 2013-07-18
==================

  * fix #1
  * fix #15
  * fix #26
  * fix #30

0.1.0 / 2013-07-08
==================

  * bugs fixed
  * demo sub-project added

0.0.10 / 2013-06-18
==================

  * Switch to the framework Mocha using the assert library Chai
  * Switch to the module system [ym](https://github.com/ymaps/modules)
  * Renaming the technology phantom.js -> phantomjs
  * The possibility to redefine the console reporter (parameter `consoleReporter`)
  * Added plugin sinon-chai
  * Added the goal to run all tests: all.tests

0.0.9 / 2013-06-05
==================

  * tests assembly added (@mishaberezin) #8
  * documentation for tests assembly added in russian
  * mkdirp npm-dependency removed

0.0.5 / 2013-04-05
==================

  * move to bem>=0.5.30

0.0.4 / 2013-03-12
==================

  * base BEM-configs refactoring

0.0.3 / 2013-01-26
==================

  * adding parent node for "sets" node should be option
  * howto guide improved

0.0.2 / 2013-01-16
==================

  * sets node for bem-make fixed to build all the sets
  * fixed build nodes order
  * fixed issue with first-run levels resolving, when bem-make couldn't resolve tech's path properly (see bem/bem-tools/issues#341)
  * howto guide added in russian

0.0.1 / 2013-01-13
==================

  * root sets node added to build all sets
  * some code refactoring
  * documentation fixed

0.0.0 / 2013-01-10
==================

  * first working draft released
  * basic documentation in russian

