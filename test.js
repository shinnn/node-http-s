'use strict';

var http = require('http');
var https = require('https');
var url = require('url');

var test = require('tape');

var httpOrHttps = require('require-main')();

test('http-s', function(t) {
  var behaviors = [
    'should load `http` module when the string has http protocol.',
    'should load `http` module when the object has http property.',
    'should load `https` module when the string has https protocol.',
    'should load `https` module when the object has https property.',
    'should throw an error when the argument is not a valid string or object.',
    'should throw an error when the string doesn\'t have http or https protocol.',
    'should throw an error when the object doesn\'t have http or https property.'
  ];

  t.plan(behaviors.length);

  t.deepEqual(httpOrHttps('http://nodejs.org/'), http, behaviors[0]);
  t.deepEqual(httpOrHttps(url.parse('http://www.ecmascript.org/')), http, behaviors[1]);
  t.deepEqual(httpOrHttps('https://www.npmjs.org/'), https, behaviors[2]);
  t.deepEqual(httpOrHttps(url.parse('https://github.com/')), https, behaviors[3]);
  t.throws(httpOrHttps.bind(null, 1234), TypeError, behaviors[4]);
  t.throws(httpOrHttps.bind(null, 'ws://echo.websocket.org'), behaviors[5]);
  t.throws(httpOrHttps.bind(null, url.parse('git://github.com/npm/npm.git')), behaviors[6]);

  t.end();
});
