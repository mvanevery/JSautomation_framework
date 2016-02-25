var client = require('../../core/client').client;
var config = require('../projects/payless/config');
var page = require('../projects/payless/config.homepage');
var expect = require('chai').expect;


module.exports = {

	mobileView: function (done) {
		client.setViewportSize({
			height: 559,
			width: 375
		}, true).then(done);
	},

	goTo: function (done) {
		client.init().url(config.routes.baseUrl, done);
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
	menuVerify: function (done) {
		if (client.isVisible('ul.expandable > li.footer-container > div.app-menu-footer > div.app-menu-footer-container > ul.footer-links > li.my-bag > a.cart > h5', done)) {
			client.getText('ul.expandable > li.footer-container > div.app-menu-footer > div.app-menu-footer-container > ul.footer-links > li.my-bag > a.cart > h5').then(function(err, text){
				expect(text).to.equal('My Bag');
				//done();
			})
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