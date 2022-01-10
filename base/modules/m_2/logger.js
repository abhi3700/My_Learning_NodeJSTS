let url = 'https://logger.com/log';

function log(message) {
	console.log(message);
}

// In modules, we can export object or single function
module.exports = log;