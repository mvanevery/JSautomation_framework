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
//Setting up the test bed. Launching the browser, navigating to the homepage and verifying the page has been reached.
webdriverio
	.remote(options)
	.init()
	.url('https://madmobile-staging.payless.com')
	.title(function(err, res) {
		console.log(res.value);
	})
//this step is waiting for an element to render and then click the menu icon to open the hamburger menu
	.waitForVisible('div.slider-container > a > img',5000).then(function(store){
		store.click('a.menu-trigger > i.icon');
	})
//this step clicks the first menu option. Women
	.click('li > a > i.icon')
//this step verifies that the Women section of the menu is open by getting the text from the Women category link
	.getText('a.title').then(function(text){
		console.log(text);
	})

	.end();






