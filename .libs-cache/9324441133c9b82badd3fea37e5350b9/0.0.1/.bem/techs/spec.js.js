var BEM = require('bem');

exports.baseTechName = '../../libs/bem-pr/bem/techs/spec.js';

exports.techMixin = {

    getCreateResult : function(path, suffix, vars) {
        return BEM.template.process([
            'modules.define(',
            '    \'spec\',',
            '    [\'{{bemBlockName}}\', \'i-bem__dom\', \'jquery\', \'BEMHTML\', \'sinon\'],',
            '    function(provide, {{bemBlockName}}, BEMDOM, $, BEMHTML, sinon) {',

            'describe(\'{{bemBlockName}}\', function() {',
            '   var {{bemBlockName}};',
            '   ',
            '   beforeEach(function() {',
            '        //{{bemBlockName}} = BEMDOM.init($(BEMHTML.apply({})).appendTo(\'body\')).bem(\'\');',
            '   });',
            '   ',
            '   afterEach(function() {',
            '        //BEMDOM.destruct({{bemBlockName}}.domElem);',
            '   });',
            '   ',
            '   describe(\'test\', function() {',
            '       it(\'should be awesome\', function() {',
            '           ',
            '       });',
            '   });',
            '});',
            '   ',
            'provide();',
            '   ',
            '});'
        ], vars);
    }

};
