'use strict';
const loaderUtils = require("loader-utils");
const fs = require("fs");
const path = require("path");
const gfsAutoTrycatch = require('/usr/local/lib/node_modules/gfs-auto-trycatch');

module.exports = function(source, inputMap) {
    // ?
    this.cacheable();
    const currentRequest = loaderUtils.getCurrentRequest(this);
    const webpackRemainingChain = loaderUtils.getRemainingRequest(this).split("!");
    const filename = webpackRemainingChain[webpackRemainingChain.length - 1];
    const dir = path.dirname(currentRequest.split('!')[1]);
    try {
      // If the encoding option is specified then this function returns a string. Otherwise it returns a buffer.
    }catch(e) {
        // not exit
        console.error('something warn!')
    }
    const newFile = gfsAutoTrycatch(source, {
        cwd: process.cwd(),
        path: dir,
        filename: filename
    });
    return newFile;
};