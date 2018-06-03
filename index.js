'use strict';

var fs = require('fs');
var path = require('path');

exports.get = function(event, context, callback) {
  var contents = fs.readFileSync(`public${path.sep}index.html`);
  let a = 2;
  var result = {
    statusCode: 200,
    body: contents.toString(),
    headers: {
      'content-type': 'text/html',
      'content-lenght': '512'
    }
  };
  if (a + a === 4) {
    callback(null, result);
  }
};
