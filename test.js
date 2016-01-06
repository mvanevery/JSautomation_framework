var webdriverio = require('webdriverio');
var options = {
	desiredCapabilities: {
		browserName: 'firefox',
		width: 375,
		height: 650
	}
};
webdriverio
	.remote(options)
	.init()
	.url('https://madmobile-staging.payless.com')
	.title(function(err, res) {
		console.log(res.value);
	})
//	.end();
