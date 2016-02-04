var client = require('../core/client').client;
var expect = require('chai').expect;
//var options = {
//	desiredCapabilities: {
//		browserName: 'phantomjs'
//	}
//};

//options.desiredCapabilities.phantomjs = {
//	page: {
//		settings: {
//			userAgent: 'Mozilla/5.0 (Linux; Android 4.4; Nexus 5 Build/BuildID) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36'
//		}
//	}
//};
//Setting up the test bed. Launching the browser, navigating to the homepage and verifying the page has been reached.
//client
//	.url('https://madmobile-staging.payless.com')
//	.title(function(err, res) {
//		console.log(res.value);
//	})
////this step is waiting for an element to render and then click the menu icon to open the hamburger menu
//	.waitForVisible('div.slider-container > a > img',5000).click('a.menu-trigger > i.icon')
////this step clicks the first menu option. Women
//	.click('li > a > i.icon')
////this step verifies that the Women section of the menu is open by getting the text from the Women category link
//	.getText('span.back-text').then(function(text){
//		console.log(text);
//	})
//
//	.end();

//describe('Test m.payless.com', function () {
//	before(function (done) {
//		client.init().url('https://m.madmobile.com', done);
//	});
//	it('should see the correct title', function (done) {
//		client.getTitle(function (title) {
//			expect(title).to.have.string('Payless ShoeSource | Shoes, Boots, Sandals, Designer Shoes & Handbags');
//			done();
//		});
//	});
//
//	after(function (done) {
//		client.end();
//		done();
//	});
//});

describe('Test example.com', function(){
	before(function(done) {
		client.init().url('http://example.com', done);
	});

	describe('Check homepage', function(){
		it('should see the correct title', function(done) {
			client.getTitle(function(err, title){
				expect(title).to.have.string('Example Domain');
				done();
			});
		});

		it('should check the title again damnit', function(done) {
			client.getTitle(function(err, title){
				expect(title).to.have.string('Example Domain');
				done();
			});
		});
	});

	after(function(done) {
		client.end();
		done();
	});
});
