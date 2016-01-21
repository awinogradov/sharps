var fs = require('fs');
var path = require('path');
var files = [
    'common.blocks/mq/mq.post.css',
    'common.blocks/row/__col/row__col.post.css',
    'common.blocks/row/row.post.css'
];

module.exports = files.reduce(function(prev, curr) {
    return prev + fs.readFileSync(path.join(__dirname, '..', curr));
}, '');
