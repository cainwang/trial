module.exports = function(config, app) {
    app.get('/hello/:name', function(req, res) {
        res.status(200).json({
            message: 'Hello, ' + req.params.name + '!'
        });
    });
};
