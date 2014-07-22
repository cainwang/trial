var fs = require('fs');

var fileName = 'target.txt';
var content = 'I stand for the light.';

function initFile(callback) {
    if (fs.existsSync(fileName)) {
        console.log('Target file exists. Renaming ..');
        fs.unlinkSync(fileName);
    }

    fs.writeFile(fileName, content, function(err) {
        if (err) {
            throw err;
        }
        console.log('File initialized at ' + fs.realpath(fileName));

        fs.stat(fileName, function(err, stats) {
            if (err) throw err;

            console.log('Stats', JSON.stringify(stats));
        });

        if (callback) {
            callback();
        }
    });
}

function pipe() {
    input.pipe(process.stdout);
}

function readStream() {
    console.log('Reading file input stream ...');
    var input = fs.createReadStream('target.txt');
    input.on('data', function(chunk) {
        console.log(chunk.toString());
    });
    input.on('close', function() {
        console.log('File read stream complete.');
    });
}

function readAsync() {
    console.log('Reading file asynchronizedly ...');

    fs.readFile(fileName, function(err, data) {
        if (err) {
            throw err;
        }

        console.log(data.toString());
    });
}

function readSync() {
    console.log('Reading file synchronizedly ...');

    var data = fs.readFileSync(fileName);
    console.log(data.toString());
}

function readDir() {
    fs.readdir('.', function(err, files) {
        if (err) throw err;

        console.log('Reading dir ...');
        files.forEach(function(file) {
            console.log(file);
        });
    });
}

initFile(function() {
    readSync();
    readAsync();
    readStream();
    readDir();
});
