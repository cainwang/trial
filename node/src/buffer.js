var events = require('events'), util = require('util');

function Buffer(stream) {
    events.EventEmitter.call(this);

    var me = this, buff = '';

    stream.on('data', function(data) {
        data = data.toString();
        buff += data;

        if (data.indexOf('\n') != -1) {
            me.emit('message', JSON.parse(buff));
            buff = '';
        }
    });
}

util.inherits(Buffer, events.EventEmitter);

exports.Buffer = Buffer;
exports.connect = function(stream) {
    return new Buffer(stream);
};
