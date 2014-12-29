/*!
 * http-s | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/node-http-s
*/

'use strict';

var parseUrl = require('url').parse;

module.exports = function httpOrHttps(options) {
  if (typeof options === 'string') {
    options = parseUrl(options);
  } else if (typeof options !== 'object') {
    throw new TypeError('Argument to http-s must be a string or an object.');
  }

  if (options.protocol === 'http:') {
    return require('http');
  } else if (options.protocol === 'https:') {
    return require('https');
  } else if (!options.protocol) {
    throw new Error('Doesn\'t include any protocols');
  }

  throw new Error('Unsupported protocol: ' + options.protocol);
};
