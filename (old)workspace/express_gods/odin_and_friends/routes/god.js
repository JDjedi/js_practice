
  var express = require('express');
  var router = express.Router();
  const {God, gods} = require('../models/gods')

  const findGod = (name) => {
    return gods.find(god => name == god.name)
  }

  /* GET home page. */
  router.get('/:name', function(req, res, next) {
    const god = findGod(req.params.name)
    res.render('god', { god: god })
  });

  module.exports = router
  