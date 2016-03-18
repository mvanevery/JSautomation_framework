var client = require('../../core/client').client;
var project = require('../projects/config').project;
var config = require('../projects/' + project + '/config');
var page = require('../projects/' + project + '/config.homepage');
var expect = require('chai').expect;


module.exports = {

	mobileView: function (done) {
		client.setViewportSize({
			height: 559,
			width: 375
		}, true).then(done);
	},

	goTo: function (done) {
		client.init().url(config.routes.baseUrl).then(function () {
			client.setViewportSize({
				height: 559,
				width: 375
			}, true).then(done);
		});
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
			expect(url).to.have.string(page.mobileUrl || page.tabletUrl);
			callback();
		});
	},

	openMenu: function (done) {
		if (client.isVisible('div.slider-container > a > img', done)) {
			client.click('a.menu-trigger > i.icon');
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

	closeMenu: function (done) {
		if (client.isVisible('a.close > i.icon', done)) {
			client.click('a.close > i.icon', done);
		} else {
			console.log('Menu not open');
		}
	},
	pickCategory: function(done) {
		if (client.isVisible('a.close > i.icon', done))  {
			client.click('/men-shoes/').then(function () {
				client.open(page.mobileUrl + '/mens-shoes/')
			});
		} else {
			console.log('Menu not open');
		}
	},

	pickStyle: function(done) {
		if (client.isVisible('li.active.active-leaf > a.title', done))  {
			console.log('Styles are open');
		} else {
			console.log('Menu not open');
		}
	},
	pickItem: function(done) {
		if (client.isVisible('div.brand-notice > span', done)) {
			client.click('=/womens-karmen-pump');
		} else {
			console.log('Karmen Pumps not displayed');
		}
	},



	end: function (done) {
		client.end();
		done();
	}
};