var client = require('../../core/client').client;
var config = require('../projects/payless/config');
var page = require('../projects/payless/config.homepage');
var expect = require('chai').expect;


module.exports = {

	goTo: function (done) {
		client.init().url(config.routes.baseUrl, done);
		client.init().viewport(config.devices.nexus5, done);
	},

	getPageTitle: function (done) {
		if (client.isVisible('div', done)) {
			client.getTitle(function (err, title) {
				expect(title).to.have.string(page.mobileTitle || page.tabletTitle);
				done();
			});
		} else {
			client.getTitle(function (err, title) {
				console.log('Was not visible but here is the title now: ' + title);
				done();
			})
		}
	},

	verifyPageUrl: function (callback) {
		client.getUrl().then(function (url) {
			console.log(url);
			expect(url).to.have.string(page.mobileUrl || page.tabletUrl);
			callback();
		});
	},

	openMenu: function (done) {
		if (client.isVisible('div.slider-container > a > img', done)) {
			client.click('a.menu-trigger > i.icon', done);
		} else {
			console.log('Menu not available');
		}
	},

	end: function (done) {
		//	client.url('http://localhost:4444/selenium-server/driver?cmd=shutDownSeleniumServer')
		//		.getUrl().then(function () {
		//			client.end();
		//			done();
		//		});
		//}
		client.end();
		done();
	}
};