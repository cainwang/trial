'use strict';

var spawn = require('child_process').spawn;

var ls = spawn('ls', [ '-l' ]);
ls.stdout.pipe(process.stdout);
