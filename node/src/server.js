var express = require('express');
var app = express();

var path = require('path');

app.use(function(req, res, next) {
    console.log('requseting ...', req.url);
    console.log('Accept', req.get('Accept'));
    console.log('Accept', req.header('Accept-Encoding'));

    next();
});

app.use('/hello', require('./server-hello'));

app.use(express.static(path.join(__dirname, '..')));

console.log('Experss server started ...');
app.listen(8088);
