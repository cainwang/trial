var fs = require('fs');

fs.watch('target.txt', function(event) {
    console.log(event, typeof event);
});

console.log('Start watching target.txt ...');
