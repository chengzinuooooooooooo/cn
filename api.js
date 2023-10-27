var express = require('express');
var router = express.Router();

/* GET api listing. */
router.get('/version', function(req, res, next) {
  res.send({ 'version': '1.0.0' });
});

router.get('/sum', function (req, res, next) {
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    var result = a + b;
    res.send({ 'result': result });
});

module.exports = router;
