var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('girl', { title: 'Dream Woman: Tianna Gregory' });
});

module.exports = router;