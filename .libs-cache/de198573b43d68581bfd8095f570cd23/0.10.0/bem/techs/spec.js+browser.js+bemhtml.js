var PATH = require('path'),
    DEPS = require('bem/lib/techs/v2/deps.js'),
    Q = require('q');

exports.API_VER = 2;

exports.techMixin = {

    getBuildSuffixesMap : function() {
        return {
            'spec.js': ['spec.js', 'vanilla.js', 'js', 'browser.js', 'bemhtml']
        };
    },

    getBuildResult : function(files, suffix, output, opts) {
        var _this = this,
            context = this.context,
            ctxOpts = context.opts;

        return ctxOpts.declaration
            .then(function(decl) {
                var specJsResults = _this.getTechBuildResults('spec.js', decl, context, output, opts),
                    bemhtmlDecl = new DEPS.Deps(),
                    depsByTechs = decl.depsByTechs || {},
                    depsByTechsJs = depsByTechs.js || {},
                    depsByTechsSpecJs = depsByTechs['spec.js'] || {},
                    browserJsDecl = (new DEPS.Deps())
                        .parse(decl.deps)
                        .parse((depsByTechsSpecJs.js || []).map(function(i) {
                            delete i.tech;
                            return i;
                        })),
                    browserJsResults = _this.getTechBuildResults(
                        'browser.js',
                        { deps : (browserJsDecl.serialize()[''] || {})[''] || [] },
                        context,
                        output,
                        opts);

                bemhtmlDecl
                    .parse(depsByTechsJs.bemhtml || [])
                    .parse(depsByTechsSpecJs.bemhtml || []);

                bemhtmlDecl = { deps : (bemhtmlDecl.serialize()['bemhtml'] || {})['bemhtml'] || [] };

                var bemhtmlResults = bemhtmlDecl.deps.length ?
                    _this.getTechBuildResults('bemhtml', bemhtmlDecl, context, output, opts) :
                    '';

                return Q.all([specJsResults, browserJsResults, bemhtmlResults])
                    .spread(function(specJsResults, browserJsResults, bemhtmlResults) {
                        return [
                            browserJsResults['js'].join(''),
                            specJsResults['spec.js'].join(''),
                            bemhtmlResults['bemhtml.js']
                        ].join('');
                    });
            });
    },

    getTechBuildResults : function(techName, decl, context, output, opts) {
        opts.force = true;
        var tech = context.createTech(techName);

        if(tech.API_VER < 2) {
            return Q.reject(new Error(this.getTechName() +
                ' can’t use v1 ' + techName + ' tech to concat ' + techName + ' content. ' +
                'Configure level to use v2 ' + techName + '.'));
        }

        return tech.getBuildResults(
            tech.transformBuildDecl(decl),
            context.getLevels(),
            output,
            opts
        );
    }

};

// THE CODE BELOW WORKS ONLY \W BEM-TOOS=1.0.0

/*
exports.techMixin = {

    API_VER : 2,

    getBuildSuffixesMap:function(){
        return { 'spec.js' : ['spec.js', 'browser.js', 'js'] };
    },

    getWeakBuildSuffixesMap: function() {
        return {
            'spec.js': ['spec.js', 'vanilla.js', 'js', 'browser.js', 'bemhtml']
        };
    },

    transformBuildDecl: function(decl) {
        var buildSuffixes = this.getWeakBuildSuffixesMap();
        var sourceSuffixes = this.getWeakSuffixesMap();

        return decl
            .then(function(decl){
                var deps = new Deps().parseDepsDecl(decl)
                    .filter(function(dependsOn, dependent) {
                        return (((dependsOn.item.tech in sourceSuffixes) && dependent.item.tech in buildSuffixes) ||
                           (!dependsOn.item.tech && !dependent.item.tech));
                    }).map(function(item){
                        return item.item;
                    });
                return {deps: deps};
            });
    },

    getBuildResult: function(files, suffix, output, opts) {
        var bemhtmlTech = this.context.createTech('bemhtml'),
            browserTech = this.context.createTech('browser.js'),
            testJSTech = this.context.createTech('spec.js'),
            decl = this.transformBuildDecl(this.context.opts.declaration);

        if(!(browserTech.API_VER === 2 && bemhtmlTech.API_VER === 2 && testJSTech.API_VER === 2)){
            return Q.reject(this.getTechName() + ' can\'t use v1 techs to produce pieces of result');
        }

        opts = Object.create(opts);
        opts.force = true;

        return Q.all(
            [
                bemhtmlTech.getBuildResults(
                    bemhtmlTech.transformBuildDecl(decl),
                    this.context.getLevels(),output,opts),
                browserTech.getBuildResults(
                    browserTech.transformBuildDecl(decl),
                    this.context.getLevels(),output,opts),
                testJSTech.getBuildResults(
                    testJSTech.transformBuildDecl(decl),
                    this.context.getLevels(),output,opts)])
            .spread(function(bemhtml, browser, test){
                var result = browser.js;
                result.push(test['spec.js'] + '\n');
                result.push(bemhtml['bemhtml.js']+'\n');
                return result;
            });
    }

};
*/
