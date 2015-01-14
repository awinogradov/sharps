var PATH = require('path'),
    BEM = require('bem');

exports.API_VER = 2;

exports.techMixin = {

    getTemplate : function() {
        return [
            '([',
            '"<!DOCTYPE html>",',
            '{"tag": "html", "content": [',
            '  {"tag": "head", "content": [',
            '    {"tag": "meta", "attrs": {"charset": "utf-8"}},',
            '    {"tag": "link", "attrs": {"href": "_{{bemBundleName}}.css", "rel": "stylesheet"}},',
            '    {"tag": "script", "attrs": {"src": "_{{bemBundleName}}.spec.js"}}',
            '  ]},',
            '  {"tag": "body", "content":',
            '    {',
            '      "block": "spec",',
            '      "content": {{bemTmplContent}}',
            '    }',
            '  },',
            '  {"block": "spec-runner"}',
            ']}',
            '])'
        ];
    },

    getCreateResult : function(path, suffix, vars) {
        var envProps = (global.__bempr || {})[PATH.dirname(path)] || {};
        return BEM.template.process(
            this.getTemplate(),
            {
                BundleName : envProps.bundleName || vars.BlockName,
                TmplContent : envProps.bundleContent || '""'
            });
    },

    getCreateSuffixes : function() {
        return ['bemjson.js'];
    }

};
