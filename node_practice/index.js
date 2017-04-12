'use strict';

var _ = require('lodash');
var logger = require('./lib/logger');
var sal = require('./lib/salutations');

_.each(sal, function(sal){
	logger.log(sal)
})

