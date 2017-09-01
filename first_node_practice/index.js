'use strict';

var lodash = require('lodash');
var logger = require('./lib/logger');
var salutations = require('./lib/salutations');

lodash.each(salutations, function(salutations){
	logger.log(salutations);
})

