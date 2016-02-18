var client = require('../../core/client').client;
var config = require('../projects/payless/config');
var page = require('../projects/payless/config.homepage');
var expect = require('chai').expect;


module.exports = {

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

	end: function (done) {
		client.url('http://localhost:4444/selenium-server/driver?cmd=shutDownSeleniumServer')
			.getUrl().then(function () {
				client.end();
				done();
			});
	}
};