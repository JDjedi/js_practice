var chalk = require('chalk');

var logger = {
	log: function(message, level) {
		if (level == 'info') {
			console.log(chalk.blue(message))
		} else if (level == 'warning') {
			console.log(chalk.yellow(message))
		} else if (level == 'error') {
			console.log(chalk.red(message))
		} else {
			console.log('Nothing to log here...')
		}
	}
};

module.exports = logger;

