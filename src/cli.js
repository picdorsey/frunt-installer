#!/usr/bin/env node
'use strict';

import meow from 'meow';
import updateNotifier from 'update-notifier';
import installer from './';

const cli = meow([
	'Usage',
	'  $ frunt new <path>',
	'',
	'Examples',
	'  $ frunt new site',
]);

updateNotifier({pkg: cli.pkg}).notify();

const command = cli.input[0];
const path = cli.input[1];

if (command != 'new') {
    console.error('Command not recognized');
    process.exit(1);
}

if (! path) {
    console.error('Specify a filepath');
    process.exit(1);
}

installer(path);
