var client = require('../../core/client').client;
var project = require('../projects/config').project;
var config = require('../projects/' + project + '/config');
var page = require('../projects/' + project + '/config.homepage');
var expect = require('chai').expect;
var assert = require('chai').assert;
var $ = require('jQuery');
var mobileTitle = page.mobileTitle;
var shipinfo = config.helpers.shipInfo;
var comparisonTestPass = function (array1, array2) {
	// Test lengths first
	if (array1.length !== array2.length) {
		return false;
	}

	// Test that entries match
	for (var i=0; i<array1.length; i++) {
		if (array1[i] !== array2[i]) {
			return false;
		}
	}

	return true;
};


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
	pause: function (done) {
		client.pause(15000, done);
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
	addCCName: function(done) {
		client.waitForVisible('input[name="dwfrm_billing_paymentMethods_creditCard_owner"]', 10000, done)
			.then(function () {
				client.setValue('//input[@name="dwfrm_billing_paymentMethods_creditCard_owner"]', config.helpers.CCName);
			})
	},
	addCCNumber: function(done) {
		client.waitForVisible('input[name="dwfrm_billing_paymentMethods_creditCard_number"]', 10000, done)
			.then(function () {
				client.setValue('//input[@name="dwfrm_billing_paymentMethods_creditCard_number"]', config.helpers.CCNumber);
			})
	},
	addCCExpMonth: function(done) {
		client.waitForVisible('//select[@name="dwfrm_billing_paymentMethods_creditCard_month"]', 10000, done)
			.then(function () {
				client.selectByValue('//select[@name="dwfrm_billing_paymentMethods_creditCard_month"]', config.helpers.CCExpMonth);
			})
	},
	addCCExpYear: function(done) {
		client.waitForVisible('//select[@name="dwfrm_billing_paymentMethods_creditCard_year"]', 10000, done)
			.then(function () {
				client.selectByValue('//select[@name="dwfrm_billing_paymentMethods_creditCard_year"]', config.helpers.CCExpYear);
			})
	},
	addCCSecurity: function(done) {
		client.waitForVisible('input[name="dwfrm_billing_paymentMethods_creditCard_cvn"]', 10000, done)
			.then(function () {
				client.setValue('//input[@name="dwfrm_billing_paymentMethods_creditCard_cvn"]', config.helpers.CCSecurity);
			})
	},
	reviewOrder: function(done) {
		client.waitForVisible('#js-submit-payment-btn', 10000, done)
			.then(function () {
				client.click('#js-submit-payment-btn');
			})
	},
	verifyShippingTitle: function(done) {
		client.waitForVisible('div.box-section.select-shipping-method > div.title-bar > h3', 10000, done)
			.then(function() {
				client.getText('div.box-section.select-shipping-method > div.title-bar > h3')
					.then(function (text) {
						if (text == config.helpers.shipTitle) {
							console.log('Shipping title - PASS');
						} else {
							console.log('Shipping title - FAIL');
						}
					});
			})
	},
		verifyShippingInfo: function(done) {
			client.waitForVisible('div.box-section.payment-method > div.title-bar > h3', 10000, done)
				.then(function () {
					client.getText('div#js-shipping-summary-body.checkout-step.shipping-summary > p.summary-line.address-line')
						.then(function (text) {
							if (comparisonTestPass(text, config.helpers.shipInfo)) {
							//		console.log(text);
							//		console.log(shipinfo);
								console.log('Shipping info - PASS');
							} else {
								console.log('Shipping info - FAIL');
							}
						})
				});
		},

	verifyPaymentName: function(done) {
		client.waitForVisible('div.box-section.payment-method > div.title-bar > h3', 10000, done)
			.then(function () {
				client.getText('div#js-payment-summary-body.checkout-step.payment-summary > div.payment-method p.name')
					.then(function (text) {
						if (text == config.helpers.payName) {
							console.log('Payment Name - PASS');
						} else {
							console.log('Payment Name - FAIL');
						}
					})
			});
	},
	verifyPaymentType: function(done) {
		client.waitForVisible('div.box-section.payment-method > div.title-bar > h3', 10000, done)
			.then(function() {
				client.getText('div#js-payment-summary-body.checkout-step.payment-summary > div.payment-method p.type')
					.then(function (text) {
						if (text == config.helpers.payType) {
							console.log('Payment Type - PASS');
						} else {
							console.log('Payment Type - FAIL');
						}
					})
			});
	},
	verifyPaymentNumber: function(done) {
		client.waitForVisible('div.box-section.payment-method > div.title-bar > h3', 10000, done)
			.then(function() {
				client.getText('div#js-payment-summary-body.checkout-step.payment-summary > div.payment-method p.number')
					.then(function (text) {
						if (text == config.helpers.payNumber) {
							console.log('Payment Number - PASS');
						} else {
							console.log('Payment Number - FAIL');
						}
					})
			});
	},
	verifyPaymentExpire: function(done) {
		client.waitForVisible('div.box-section.payment-method > div.title-bar > h3', 10000, done)
			.then(function() {
				client.getText('div#js-payment-summary-body.checkout-step.payment-summary > div.payment-method p.expire')
					.then(function (text) {
						if (text == config.helpers.payExpires) {
							console.log('Payment Expire - PASS');
						} else {
							console.log('Payment Expire - FAIL');
						}
					})
			});
	},
	verifyBillingInfo: function(done) {
		client.waitForVisible('div.box-section.payment-method > div.title-bar > h3', 10000, done)
			.then(function() {
				client.getText('div#js-billing-summary-body.checkout-step.billing-summary p.summary-line.address-line')
					.then(function (text) {
							if (comparisonTestPass(text, config.helpers.billingInfo)) {
							console.log('Billing info - PASS');
						} else {
							console.log('Billing info - FAIL');
						}
					})
			});
	},
	submitPayment: function(done) {
		client.waitForVisible('#js-submit-payment-btn', 10000, done)
			.then(function () {
				client.scroll('#js-submit-payment-btn')
					.then(function () {
						client.click('//button[@id="js-submit-final-btn"]');
					})
			})
	},
	verifyConfirmOrder: function(done) {
		client.waitForVisible('//div.order > div.check-mark > i.icon', 10000, done)
			.then(function () {
				console.log('Checkmark is visible')
					.then(function() {
						client.getText('//div.modal.order-confirmation > div.body > div.order > span.success')
							.then(function(success) {
								console.log(success + ' = Order Status')
									.then(function(){
										client.getText('//div.modal.order-confirmation > div.body > div.order > span.order-number')
											.then(function(ordernumber){
												console.log(ordernumber);
											})
									})
							})
					})
			})
	},



	//end: function (done) {
	//	client.end();	//	done();
	//}
}
