var cluster = require('cluster');

if (cluster.isMaster) {
    for (var i = 0; i < 2; i ++) {
        cluster.fork();
    }
} else {
    console.log('Work, work.');
}

cluster.on('online', function(worker) {
    console.log('Working online: ', worker);
});

cluster.on('exit', function(worker, code, signal) {
    console.log('Worker exists: ', worker, code, signal);
});