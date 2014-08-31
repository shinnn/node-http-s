# http-s 

[![NPM version](https://badge.fury.io/js/http-s.svg)](http://badge.fury.io/js/http-s)
[![Build Status](https://travis-ci.org/shinnn/node-http-s.svg?branch=master)](https://travis-ci.org/shinnn/node-http-s)
[![Build status](https://ci.appveyor.com/api/projects/status/ygrt2hgh5iba4jtt)](https://ci.appveyor.com/project/ShinnosukeWatanabe/node-http-s)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/node-http-s.svg)](https://coveralls.io/r/shinnn/node-http-s)
[![devDependency Status](https://david-dm.org/shinnn/node-http-s/dev-status.svg)](https://david-dm.org/shinnn/node-http-s#info=devDependencies)

A [Node][node] module to load the [http][http] or [https][https] module accordingly to the protocol name

```javascript
var httpOrHttps = require('http-s');

httpOrHttps('http://nodejs.org/'); // equivalent of `require('http')`
httpOrHttps('https://www.npmjs.org/'); // equivalent of `require('https')`
httpOrHttps({protocol: 'http:'}); // equivalent of `require('http')`
```

## Installation

[Install with npm](https://www.npmjs.org/doc/cli/npm-install.html). (Make sure you have installed [Node][node])

```
npm install --save http-s
```

## API

```javascript
var httpOrHttps = require('http-s');
```

### httpOrHttps(*urlObject*)

*urlObject*: `Object` (which has `protocol` property)  
Return: [http][http] or [https][https]

It returns [http][http] module if the `protocol` property is `"http:"`, or returns [https][https] module if the property is `"https:"`.

```javascript
httpOrHttps({protocol: 'https:'}); //=> https

var url = require('url');
var options = url.parse('http://nodejs.org/api/url.html');
// => {protocol: 'http:', slashes: true, auth: null, ...}

httpOrHttps(options); //=> http
```

### httpOrHttps(*urlString*)

*urlString*: `String`  
Return: [http][http] or [https][https]

When it takes a string as an argument instead of an object, it automatically parses the string with [`url.parse()`](http://nodejs.org/api/url.html#url_url_parse_urlstr_parsequerystring_slashesdenotehost).

```javascript
httpOrHttps('http://nodeschool.io/'); //=> http
```

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT LIcense](./LICENSE).

[node]: http://nodejs.org/
[http]: http://nodejs.org/api/http.html#http_http
[https]: http://nodejs.org/api/https.html#https_https
