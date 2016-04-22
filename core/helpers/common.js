var client = require('../../core/client').client;
var project = require('../projects/config').project;
var config = require('../projects/' + project + '/config');
var page = require('../projects/' + project + '/config.homepage');
var expect = require('chai').expect;
var $ = require('jQuery');
var mobileTitle = page.mobileTitle;


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
				console.log(title);
				assert.isString(mobileTitle, "Matched")
				//expect(title).to.be.string(page.mobileUrl || page.tabletUrl);
				//done();
			})
		} else {
			client.getTitle(function (err, title) {
				assert.isNotString(mobileTitle, "unMatched");
				//expect(title).to.be.string(page.mobileUrl || page.tabletUrl);
				//done();
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
			client.getText('ul.expandable > li.footer-container > div.app-menu-footer > div.app-menu-footer-container > ul.footer-links > li.my-bag > a.cart > h5').then(function (err, text) {
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
	pickCategory: function (done) {
		if (client.isVisible('a.close > i.icon', done)) {
			client.click(config.helpers.men);
		} else {
			console.log('Menu not open');
		}
	},

	pickStyle: function (done) {
		if (client.isVisible('li.active.active-leaf > a.title', done)) {
			client.click('//a[@href="/mens/casual-shoes/"]');
		} else {
			console.log('Menu not open');
		}
	},
	pickItem: function (done) {
		client.waitForVisible('div.details > div.mobile-brand > a.name > h3', 20000, done)
			.then(function () {
				client.click('div.details > div.mobile-brand > a.name > h3');
			});
	},

	selectSize: function (done) {
		client.waitForVisible('tbody > tr > td.size-button > span', 10000, done)
			.then(function () {
				client.scroll('tbody > tr > td.size-button > span')
					//client.waitForEnabled('tbody > tr > td.size-button > span', 5000, done)
					.then(function () {
						client.click('span=9');
					})
			});
	},
	addToBag: function (done) {
		client.waitForEnabled('button.add-to-cart', 30000, done)
			.then(function () {
				client.click('button.add-to-cart');
			});
	},
	proceedToCartModal: function (done) {
		client.waitForVisible('button.btn-checkout', 15000, done)
			.then(function () {
				client.click('button.btn-checkout');
			})
	},
	proceedToCheckoutCart: function (done) {
		client.waitForVisible('button.checkout-proceed', 10000, done)
			.then(function () {
				client.waitForEnabled('button.checkout-proceed', 5000)
					.then(function () {
						client.click('button.checkout-proceed');
					})
			});
	},
	addShipFirstName: function (done) {
		client.waitForVisible('//input[@id="firstName"]', 10000, done)
			.then(function () {
				client.setValue('//input[@id="firstName"]', config.helpers.FirstName);
			});
	},
	addShipLastName: function (done) {
		client.waitForVisible('//input[@id="lastName"]', 10000, done)
			.then(function () {
				client.setValue('//input[@id="lastName"]', config.helpers.LastName);
			});
	},
	addShipAddress: function (done) {
		client.waitForVisible('//input[@id="street_number"]', 10000, done)
			.then(function () {
				client.setValue('//input[@id="street_number"]', config.helpers.Address);
			});
	},
	addShipAddress2: function(done) {
		client.waitForVisible('//input[@id="address2"]', 10000, done)
			.then(function() {
				client.setValue('//input[@id="address2"]', config.helpers.Address2);
			})
	},
	addShipCity: function(done) {
		client.waitForVisible('//input[@id="locality"]', 10000, done)
			.then(function() {
				client.setValue('//input[@id="locality"]', config.helpers.City);
			})
	},
	addShipState: function(done) {
		client.waitForVisible('//select[@id="administrative_area_level_1"]', 10000, done)
			.then(function() {
				client.selectByValue('//select[@id="administrative_area_level_1"]', config.helpers.State);
			})
	},
	addShipZipcode: function(done) {
		client.waitForVisible('//input[@id="postal_code"]', 10000, done)
			.then(function() {
				client.setValue('//input[@id="postal_code"]', config.helpers.Zipcode);
			})
	},
	addShipPhone: function(done) {
		client.waitForVisible('//input[@name="dwfrm_singleshipping_shippingAddress_addressFields_phone"]', 10000, done)
			.then(function() {
				client.setValue('//input[@name="dwfrm_singleshipping_shippingAddress_addressFields_phone"]', config.helpers.Phone);
				})
	},
	addShipEmail: function(done) {
		client.waitForVisible('//input[@id="shipping-email"]', 10000, done)
			.then(function() {
				client.setValue('//input[@id="shipping-email"]', config.helpers.Email);
			})
	},
	proceedToPayment: function(done) {
		client.waitForVisible('#js-submit-shipping-btn', 10000, done)
			.then(function () {
				client.scroll('#js-submit-shipping-btn')
					.then(function() {
						client.click('#js-submit-shipping-btn');
					})
				})
	},
	useTypedAddress: function(done) {
		client.waitForVisible('#js-prediction-confirm', 10000, done)
			.then(function () {
				client.click('#js-prediction-confirm');
			})
	},


	end: function (done) {
		client.end();
		done();
	}
};