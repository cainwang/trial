var request = require('request');

exports.testBuffer = function(test) {
    test.expect(1);

    request({
        url: 'http://www.google.com'
    }, function(err, response, body) {
        test.ok(body, 'The response should not be empty.');
        test.done();
    });
};
