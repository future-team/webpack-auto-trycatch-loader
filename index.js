'use strict';
var loaderUtils = require("loader-utils");
var fs = require("fs");
var path = require("path");
var assign = require('object-assign');
var pkg = require("./package.json");
var gfsAutoTrycatch = require('gfs-auto-trycatch');

module.exports = function(source, inputSourceMap) {
    this.cacheable();
    // Handle options
    var webpackRemainingChain = loaderUtils.getRemainingRequest(this).split('!');
    var filename = webpackRemainingChain[webpackRemainingChain.length - 1];
    // var relativeDir = loaderUtils.urlToRequest(url, root)
    var globalOptions = this.options.babel || {};
    // var loaderOptions = loaderUtils.parseQuery(this.resourceQuery);
    var userOptions = assign({}, globalOptions);
    var defaultOptions = {
        sourceRoot: process.cwd(),
        filename: filename,
        filenameRelative: path.relative(process.cwd(), filename),
        sourceMap: inputSourceMap,
    };
    var options = assign({}, defaultOptions, userOptions);
    if (options.sourceMap === undefined) {
        options.sourceMap = this.sourceMap;
    }
    var newFile = source;
    try {
        newFile = gfsAutoTrycatch(source, options);
    }catch(e) {
        console.error('something warn!', e)
    }
    return newFile;
};