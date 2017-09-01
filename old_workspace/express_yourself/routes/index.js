var express = require('express');
var router = express.Router();

const {skills} = require('../models/info')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'JD\'s Portfolio Page', skills: skills });
});

module.exports = router;
