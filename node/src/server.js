var app = require('express')();

var config = {};

app.use(function(req, res, next) {
    console.log('requseting ...', req.url);
    next();
});

require('./server-hello')(config, app);

console.log('Experss server started ...');
app.listen(8088);
