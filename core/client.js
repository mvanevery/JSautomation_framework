var config = require('./projects/payless/config');

exports.client = require('webdriverio').remote({
	desiredCapabilities: {
		browserName: 'firefox',
		//'phantomjs.binary.path': require('phantomjs').path,
		page: {
			settings: {
				userAgent: config.userAgents.mobile
			}
		}
	}
});

