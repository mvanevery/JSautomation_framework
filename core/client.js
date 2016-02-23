var config = require('./projects/payless/config');

exports.client = require('webdriverio').remote({
	desiredCapabilities: {
		browserName: 'phantomjs',
		page: {
			settings: {
				userAgent: config.userAgents.mobile
			}
		}
	}
});

