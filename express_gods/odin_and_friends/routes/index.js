// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;


var express = require('express')

// Here we build the router.
var router = express.Router()
const {gods} = require('../models/gods')

// Notice how we're calling get on the router
// rather than on the application
router.get('/', function(req, res, next) {
  res.render('index', { gods: gods })
})

// Finally, we return the router so we can
// use it in our app.js
module.exports = router

