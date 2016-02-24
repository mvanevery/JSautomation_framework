var config = require('./projects/payless/config');

exports.client = require('webdriverio').remote({
	desiredCapabilities: {
		browserName: 'chrome',
		//'phantomjs.binary.path': require('phantomjs').path,
		page: {
			settings: {
				userAgent: config.userAgents.mobile
			}
		}
	}
});

