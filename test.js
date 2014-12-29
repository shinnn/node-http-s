'use strict';

var http = require('http');
var https = require('https');
var url = require('url');

var httpOrHttps = require('./');
var test = require('tape');

test('http-s', function(t) {
  var specs = [
    'should have a function name.',
    'should load `http` module when the string has http protocol.',
    'should load `http` module when the object has http property.',
    'should load `https` module when the string has https protocol.',
    'should load `https` module when the object has https property.',
    'should throw an error when the argument is not a valid string or object.',
    'should throw an error when the string doesn\'t include any protocols.',
    'should throw an error when the string doesn\'t have http or https protocol.',
    'should throw an error when the object doesn\'t have http or https property.'
  ];

  t.plan(specs.length);

  t.equal(httpOrHttps.name, 'httpOrHttps', specs.shift());

  t.deepEqual(httpOrHttps('http://nodejs.org/'), http, specs.shift());
  t.deepEqual(httpOrHttps(url.parse('http://www.ecmascript.org/')), http, specs.shift());
  t.deepEqual(httpOrHttps('https://www.npmjs.com/'), https, specs.shift());
  t.deepEqual(httpOrHttps(url.parse('https://github.com/')), https, specs.shift());
  t.throws(httpOrHttps.bind(null, 1234), TypeError, specs.shift());
  t.throws(httpOrHttps.bind(null, 'foo'), specs.shift());
  t.throws(httpOrHttps.bind(null, 'ws://echo.websocket.org'), specs.shift());
  t.throws(httpOrHttps.bind(null, url.parse('git://github.com/npm/npm.git')), specs.shift());

  t.end();
});
