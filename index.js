'use strict';

var ghdownload = require('github-download');
var isdir = require('is-directory');

module.exports = function (path) {
	if (typeof path !== 'string') {
		throw new TypeError('Expected a string');
	}

    isdir(path, function(err, dir) {
        if (dir) {
            console.error('Error! Cannot install in a directory that exists')
            process.exit(1);
        }

        ghdownload('https://github.com/picdorsey/frunt.git', path)
        .on('end', function() {
            console.log('Succesfully installed Frunt!');
        })
    });

};
