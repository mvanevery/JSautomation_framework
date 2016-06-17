var config = require('./browser/config');
var phantomjs = require('phantomjs-prebuilt');
var binPath = phantomjs.path;

exports.client = require('webdriverio').remote({
	desiredCapabilities: {
		browserName: 'chrome',
		//page: {
		//	settings: {
		//		userAgent: config.userAgent.mobile
        //
		//	}
		//},
		'phantomjs.binary.path': binPath,
		chromeOptions: {
			'mobileEmulation': {
				'deviceName': 'Apple iPhone 6'
			}
		}
	}
});