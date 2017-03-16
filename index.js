'use strict';
const loaderUtils	= require("loader-utils");
const fs = require("fs");
const path = require("path");
const gfsAutoTrycatch = require('/usr/local/lib/node_modules/gfs-auto-trycatch');

module.exports = function(source) {
    // ?
    this.cacheable();
    const currentRequest = loaderUtils.getCurrentRequest(this);
    let content = '';
    try {
      const dir = path.dirname(currentRequest.split('!')[1]);
      // If the encoding option is specified then this function returns a string. Otherwise it returns a buffer.
      const content = fs.readFileSync( currentRequest, 'utf-8');
      console.log('file path is :', currentRequest, ' file directory is: ', dir);
    }catch(e) {
        // not exit
        console.error('patch-web.js is not exit!')
    }
    const newFile = gfsAutoTrycatch(content, source, config);
    return newFile;
};