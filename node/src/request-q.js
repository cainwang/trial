var request = require('request');
var Q = require('q');

var deferred = Q.defer();
var url = '/localhost:8088/hello2/Rinoa';

request(url, function(err, res, body) {
    if (err) {
        deferred.reject(err);
    } else {
        deferred.resolve(body);
    }
});

function success(body) {
    console.log('Promise resolved.');
}

function failure(err) {
    console.log('Promise rejected.');
}

//deferred.promise.then(success, failure);
//Q.nfcall(request.get, url).then(success, failure).done();

Q.nfcall(request.get, url).then(function(body) {
    console.log('First promise resolved.');
    return Q.nfcall(request.get, url);
}, function() {
    console.log('First promise rejected.');
    return 'f';
}).then(function(body) {
    console.log('Second promise resolved.', body);
}, function() {
    console.log('Second promise rejected.', arguments);
}).catch(function(err) {
    console.log('Second promise failed. ' + err);
}).done();