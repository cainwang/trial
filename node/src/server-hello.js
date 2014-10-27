var router = require('express').Router();

router.get('/:name', function(req, res) {
    res.status(200).json({
        message: 'Hello, ' + req.params.name + '!'
    });
});

module.exports = router;
