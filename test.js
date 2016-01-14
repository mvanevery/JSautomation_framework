var webdriverio = require('webdriverio');
var options = {
	desiredCapabilities: {
		browserName: 'phantomjs'
	}
};

options.desiredCapabilities.phantomjs = {
	page: {
		settings: {
			userAgent: 'Mozilla/5.0 (Linux; Android 4.4; Nexus 5 Build/BuildID) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36'
		}
	}
};

webdriverio
	.remote(options)
	.init()
	.url('https://madmobile-staging.payless.com')
	.title(function(err, res) {
		console.log(res.value);
	})
	.onloadend = function(screen){
		screen.saveScreenshot('c:/screen.png')
	}
	.end;



