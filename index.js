'use strict';

const ghdownload = require('github-download');
const isdir = require('is-directory');

export default function (path) {

    isdir(path, (err, dir) => {

    	// Do not overwrite any directory
        if (dir) {
            console.error('Error! Cannot install in a directory that exists')
            process.exit(1);
        }

        // Download Frunt
        ghdownload('https://github.com/picdorsey/frunt.git', path)
        	.on('end', () => console.log('Succesfully installed Frunt!'));

    });

};
