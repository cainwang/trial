'use strict';

var net = require('net'), buffer = require('./buffer.js');

var port = 10303;

var client = net.connect({
    port: port
});

var bufferClient = buffer.connect(client);
bufferClient.on('message', function(response) {
    console.log('File name: ' + response.name);
    console.log('Content:');
    console.log(response.content);
});
