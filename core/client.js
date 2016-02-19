var config = require('./projects/payless/config');

exports.client = require('webdriverio').remote({
	desiredCapabilities: {
		browserName: 'firefox',
		page: {
			settings: {
				userAgent: config.userAgents.mobile
			}
		}
	}
});

