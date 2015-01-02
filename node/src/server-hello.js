var router = require('express').Router();

router.get('/:name', function(req, res) {
    res.status(200).json({
        message: 'Hello, ' + req.params.name
    });
});

router.post('/', function(req, res) {
    var body = req.body;
    res.status(200).json({
        message: 'Hello, ' + body.name
    });
})

module.exports = router;
