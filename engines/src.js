'use strict';

const fs = require('fs');
const path = require('path');
const files = [
  'common.blocks/mq/mq.post.css',
  'common.blocks/row/__col/row__col.post.css',
  'common.blocks/row/row.post.css'
];

module.exports = files.reduce((prev, curr) => {
  return prev + fs.readFileSync(path.join(__dirname, '..', curr));
}, '');
