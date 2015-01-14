var PATH = require('path'),
    VM = require('vm'),
    QFS = require('q-io/fs'),
    DEPS = require('bem/lib/techs/v2/deps.js');

exports.API_VER = 2;

exports.techMixin = {

    getBuildSuffixesMap : function() {
        return { 'spec.js': ['spec.js'] };
    },

    /**
     * Перестраиваем декларацию таким образом, чтобы в файл <bundle>.spec.js
     * попали **только** тесты БЭМ-сущностей, перечисленных в контенте
     * блока `spec` в <bundle>.bemjson.js
     *
     * @param {Object} decl
     * @returns {Object}
     */
    transformBuildDecl : function(decl) {
        var opts = this.context.opts;

        // XXX: костыль, т.к. иногда transformBuildDecl вызывается в контексте,
        // где нет outputDir и outputName, например из bem/lib/nodes/build.js
        if(!opts.outputDir || !opts.outputName) return decl;

        var _this = this,
            output = PATH.resolve(opts.outputDir, opts.outputName);

        return QFS.read(output + '.bemjson.js', { charset: 'utf8' }).then(function(bemjson) {
            var specs = [],
                newDecl;

            JSON.stringify(VM.runInThisContext(bemjson), function(key, val) {
                if(key === 'block' && val === 'spec') {
                    newDecl = _this.buildBemdeclByBemjson(this.content);
                    newDecl && (specs = specs.concat(newDecl));
                }
                return val;
            });

            if(specs.length) {
                var deps = new DEPS.Deps();
                deps.parse(specs);
                return { deps : deps.serialize()[''][''] };
            } else {
                return decl;
            }
        });
    },

    buildBemdeclByBemjson : function(bemjson) {
        var decl = {
                block : bemjson.block
            },
            mods, m;

        bemjson.elem && (decl.elem = bemjson.elem);

        if(mods = bemjson.mods || bemjson.elemMods) {
            for(m in mods) {
                if(mods.hasOwnProperty(m)) {
                    decl.mod = m;
                    mods[m] && (decl.val = mods[m]);
                    break;
                }
            }
        }

        return decl;
    },

    getBuildResultChunk : function(relPath, path, suffix) {
        return '/*borschik:include:' + relPath + '*/;\n';
    },

    getDependencies : function() {
        return ['bemjson.js'];
    }

};
