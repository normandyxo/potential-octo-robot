'use strict';

var mongoose = require('mongoose'),
    fs = require('fs'),
    id3js = require('id3js');

var traverseFileSystem = function (currentPath) {

    var files = fs.readdirSync(currentPath),
        currentFile,
        stats;

    for (var i in files) {

        if (files[i].match)
        currentFile = currentPath + '/' + files[i];
        stats = fs.statSync(currentFile);

        if (stats.isFile()) {
            //console.log(stats);
        }
        else if (stats.isDirectory()) {
            traverseFileSystem(currentFile);
        }
    }
};

if (process.argv.length < 3) {
    throw new Error ('Path is required to run the import.');
}
else {
    traverseFileSystem(process.argv[2] + '');
}