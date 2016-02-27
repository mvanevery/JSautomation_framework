var config = require('./browser/config');

exports.client = require('webdriverio').remote({
	desiredCapabilities: {
		browserName: 'phantomjs',
		page: {
			settings: {
				userAgent: config.userAgent.mobile
			}
		}
	}
});

