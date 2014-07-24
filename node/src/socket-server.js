'use strict';

var port = 10303, fileName = 'target.txt';

var net = require('net'), fs = require('fs');

var server = net.createServer(function(connection) {
    console.log('Client connected.');
    outputFile(connection);

    connection.on('close', function() {
        console.log('Client disconnected.');
    });
    connection.on('error', function(err) {
        console.log(err);
    });
});

function outputFileSync(connection) {
    var content = fs.readFileSync(fileName);
    connection.write(fileName + '\n');
    connection.write(content + '\n');
}

function outputFile(connection) {
    fs.readFile(fileName, function(err, content) {
        if (err) throw err;

        var response = {
            name: fileName,
            content: content.toString()
        };

        connection.write(JSON.stringify(response));
        connection.write('\n');
    });
}

server.listen(port);
