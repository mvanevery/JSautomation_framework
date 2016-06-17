var client = require('../../core/client').client;
var project = require('../projects/config').project;
var config = require('../projects/' + project + '/config');
var page = require('../projects/' + project + '/config.homepage');
var expect = require('chai').expect;
var assert = require('chai').assert;
var should = require('chai').should();
var $ = require('jQuery');
var mobileTitle = page.mobileTitle;
var date = new Date();
var current = date.getMonth() + "-" + date.getDate() + "-" + date.getFullYear() + "-" + date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds();

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
		client.init().url(config.routes.baseUrl)
			.then(function () {
			client.setViewportSize({
				height: 625,
				width: 285
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
//												MULTI-PAGE FUNCTIONS												//
	pause: function (pauseTime, done) {
		client.pause(pauseTime, done);
	},
	refreshPage: function (done) {
		client.refresh(done);
	},
	clickGeolocation: function(done) {
		if(client.isVisible('button.geo-submit', done)) {
			client.click('button.geo-submit');
		} else {
			if(client.isVisble('#js-geo-submit', done)) {
				client.click('#js-geo-submit');
			} else {
				console.log('no geolocation available');
			}
		}
	},
	searchZipcode: function(zipcode, done) {
		if(client.isVisible('#js-find-store-input', done)) {
			client.setValue('#js-find-store-input', zipcode)
				.then (function() {
				client.click('#js-find-store-button');
			})
		} else {
			if(client.isVisible('#zip', done)) {
				client.setValue('#zip', zipcode)
					.then (function() {
					client.click('button.find-stores');
				})
			} else {
				console.log('no zipcode search available')
			}
		}
	},

// 										HOMEPAGE/MENU FUNCTIONALITY										 //
	
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
	// make sure the test has the arguments matching the test function//
	searchItem: function (done, search) {
		var searchData = (search || config.helpers.search);
		client.waitForVisible('div.app-sub-header > form#search-form div.input > input',10000,done)
				.then(function () {
				client.click('//form[@id="search-form"]/div/input')
					.then(function () {
						client.setValue('//form[@id="search-form"]/div/input', searchData)
							.then(function() {
								client.click('button[type="submit"]')
							})
						})
					})
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
			client.click(config.helpers.catWomenAcc);
		} else {
			console.log('Menu not open');
		}
	},

// 										FIND A STORE/FIND IN STORE FUNCTIONALITY									//

	openFindAStore: function (done) {
		if (client.isVisible('div.slider-container > a > img', done)) {
			client.click('a.location > i.icon');
		} else {
			console.log('Find A Store not available');
		}
	},
	openFindInStore: function (done) {
		if (client.isEnabled('button.add-to-cart', done)) {
			client.click('li.mobile-locate.js-findinstore > a > h5');
		} else {
			console.log('select a size to enable Find In Store')
		}
	},

	verifyStoreAddress: function(done) {
		client.waitForVisible('button.map', 10000, done).then(function () {
			client.scroll('span.mobile-distance');
			client.getText('div > div.locations-page > div#locations-results > div > div.store-locator-results > div.left-column > div.store > span.address')
				.then(function (text) {
					var response = text.join(',').includes(config.helpers.storeAddress);
					console.log(response)// this will be a boolean value (true/false) that tell us whether this string is in the array
						try {
							assert.isTrue(response, 'The expected value was not equal to the text');
							done();
						} catch (err) {
							done(err);
						}
				})
		})
	},


//										PLP FUNCTIONALITY 											//
	
	pickItem: function (done) {
		client.waitForVisible('div.details > div.mobile-brand > a.name > h3', 20000, done)
			.then(function () {
				client.click('div.details > div.mobile-brand > a.name > h3');
			});
	},
	
//										PDP FUNCTIONALITY												//
	
	selectSize: function (done) {
		if(client.isVisible('tbody > tr > td.size-button > span', done)) {
			client.scroll('tbody > tr > td.size-button > span')
				.then(function () {
					client.click('span=9');
				});
		} else {
			client.scroll('button.add-to-cart');
		};
	},

	addToBag: function (done) {
		client.waitForVisible('button.add-to-cart', 10000, done)
			.then(function () {
				client.scroll('button.add-to-cart')
					.then(function () {
						client.click('button.add-to-cart');
				})
		});
	},
	proceedToCartModal: function (done) {
		client.waitForVisible('button.btn-checkout', 10000, done)
			.then(function () {
				client.scroll('button.btn-checkout')
					.then(function () {
						client.click('button.btn-checkout');
						})
					});
	},
	verifyItemTitle: function (expected, done) {
		client.waitForVisible('h1.title', 10000, function () {
				client.getText('h1.title').then(function (title) {
				try {
					assert.equal(expected, title, 'The expected value was not equal to the text');
					done();
				} catch (err) {
					done(err);
				}
					})
			})
	},
	verifyItemNumber: function (expected, done) {
		client.waitForVisible('h1.title', 10000, function () {
			client.getText('div.number > span')
				.then(function (text) {
					try {
						assert.equal(expected, text, 'The expected value was not equal to the text');
						done();
					} catch (err) {
						done(err);
					}
				})
		})
	},
	
// 											CART FUNCTIONALITY 											//
	
	proceedToCheckoutCart: function (done) {
		client.waitForVisible('button.checkout-proceed', 10000, done)
			.then(function () {
				client.scroll('button.checkout-proceed')
					.then(function () {
						client.click('button.checkout-proceed');
					})
			});
	},
	
// 											CHECKOUT FUNCTIONALITY										 //	
	loginButton: function(done) {
		if (client.isVisible('#activate-login', done)) {
		client.click('#activate-login')
		} else {
			console.log('login not possible');
		}
	},
	addLoginInfo: function(done, username, password) {
		client.waitForVisible('//form[@id="login-form"]/div[2]/div/div/input', 10000, done)
			.then(function () {
				client.setValue('//form[@id="login-form"]/div[2]/div/div/input', username || config.helpers.username)
					.then(function () {
						client.setValue('//form[@id="login-form"]/div[2]/div/div[2]/input', password || config.helpers.password)
							.then(function () {
								client.click('#submit');
							})
					})
			})
	},
//---------------------------------------------------------SHIPPING SECTION----------------------------------------------------------//

	selectStore: function (done) {
		if(client.isVisible('#js-store-6641', done)) {
			client.scroll('button.select-store')
				.then (function() {
				client.click('button.select-store')
				});
		} else {
			console.log('Nothing to Select');
		}
	},
	proceedToBilling_ShipToStore: function(done) {
		client.waitForVisible('button.geo-submit', 10000, done)
			.then(function () {
				client.scroll('#js-submit-shipping-btn-mobile')
					.then(function() {
						client.click('#js-submit-shipping-btn-mobile');
					})
			})
	},
	addShipFirstName: function(done, first) {
		client.waitForVisible('//input[@id="firstName"]', 10000, done)
			.then(function () {
				client.setValue('//input[@id="firstName"]', (first || config.helpers.firstName));
			});
	},
	addShipLastName: function (done, last) {
		client.waitForVisible('//input[@id="lastName"]', 10000, done)
			.then(function () {
				client.setValue('//input[@id="lastName"]', last || config.helpers.lastName);
			});
	},
	addShipAddress: function (done, addln1) {
		client.waitForVisible('//input[@id="street_number"]', 10000, done)
			.then(function () {
				client.setValue('//input[@id="street_number"]', addln1 || config.helpers.address1);
			});
	},
	addShipAddress2: function(done, addln2) {
		client.waitForVisible('//input[@id="address2"]', 10000, done)
			.then(function() {
				client.setValue('//input[@id="address2"]',addln2 || config.helpers.address2);
			})
	},
	addShipCity: function(done, city) {
		client.waitForVisible('//input[@id="locality"]', 10000, done)
			.then(function() {
				client.setValue('//input[@id="locality"]', city || config.helpers.city);
			})
	},
	addShipState: function(done, state) {
		client.waitForVisible('//select[@id="administrative_area_level_1"]', 10000, done)
			.then(function() {
				client.selectByValue('//select[@id="administrative_area_level_1"]', state || config.helpers.state);
			})
	},
	addShipZipcode: function(done, zipcode) {
		client.waitForVisible('//input[@id="postal_code"]', 10000, done)
			.then(function() {
				client.setValue('//input[@id="postal_code"]', zipcode || config.helpers.zipcode);
			})
	},
	addShipPhone: function(done, phone) {
		client.waitForVisible('//input[@name="dwfrm_singleshipping_shippingAddress_addressFields_phone"]', 10000, done)
			.then(function() {
				client.setValue('//input[@name="dwfrm_singleshipping_shippingAddress_addressFields_phone"]', phone || config.helpers.phone);
				})
	},
	addShipEmail: function(done, email) {
		client.waitForVisible('//input[@id="shipping-email"]', 10000, done)
			.then(function() {
				client.setValue('//input[@id="shipping-email"]', email || config.helpers.email);
			})
	},

	useTypedAddress: function(done) {
		client.waitForVisible('#js-prediction-confirm', 10000, done)
			.then(function () {
				client.click('#js-prediction-confirm');
			})
	},
	useShipDropdown: function(done, label) {
		client.waitForVisible('//select[@name="dwfrm_singleshipping_addressList"]', 10000, done)
			.then(function() {
				client.selectByValue('//select[@name="dwfrm_singleshipping_addressList"]', label || config.helpers.shipLabel);
			})
	},
	shipToStore: function (done) {
		client.waitForVisible('a.ship-to-store', 10000, done)
			.then(function () {
				client.click('a.ship-to-store');
			})
	},
	//-------------------------------------------------------PAYMENT SECTION-----------------------------------------------------//

	addCCName: function(done, ccname) {
		client.waitForVisible('input[name="dwfrm_billing_paymentMethods_creditCard_owner"]', 10000, done)
			.then(function () {
				client.setValue('//input[@name="dwfrm_billing_paymentMethods_creditCard_owner"]', ccname || config.helpers.ccName);
			})
	},
	addCCNumber: function(done, ccnumber) {
		client.waitForVisible('input[name="dwfrm_billing_paymentMethods_creditCard_number"]', 10000, done)
			.then(function () {
				client.setValue('//input[@name="dwfrm_billing_paymentMethods_creditCard_number"]', ccnumber || config.helpers.ccNumber);
			})
	},
	addCCExpMonth: function(done, ccmonth) {
		client.waitForVisible('//select[@name="dwfrm_billing_paymentMethods_creditCard_month"]', 10000, done)
			.then(function () {
				client.selectByValue('//select[@name="dwfrm_billing_paymentMethods_creditCard_month"]', ccmonth || config.helpers.ccExpMonth);
			})
	},
	addCCExpYear: function(done, ccyear) {
		client.waitForVisible('//select[@name="dwfrm_billing_paymentMethods_creditCard_year"]', 10000, done)
			.then(function () {
				client.selectByValue('//select[@name="dwfrm_billing_paymentMethods_creditCard_year"]', ccyear || config.helpers.ccExpYear);
			})
	},
	addCCSecurity: function(done, ccsecurity) {
		client.waitForVisible('input[name="dwfrm_billing_paymentMethods_creditCard_cvn"]', 10000, done)
			.then(function () {
				client.setValue('//input[@name="dwfrm_billing_paymentMethods_creditCard_cvn"]', ccsecurity || config.helpers.ccSecurity);
			})
	},
	reviewOrder: function(done) {
		client.scroll('#js-submit-payment-btn-mobile', done)
			.then(function () {
				client.click('#js-submit-payment-btn-mobile');
			})
	},

//	----------------------------------------------------------BILLING SECTION -------------------------------------------------------//

	addBillFirstName: function(done, first) {
		client.waitForVisible('//input[@id="firstName"]', 10000, done)
			.then(function () {
				client.setValue('//input[@id="firstName"]', (first || config.helpers.firstName));
			});
	},
	addBillLastName: function (done, last) {
		client.waitForVisible('//input[@id="lastName"]', 10000, done)
			.then(function () {
				client.setValue('//input[@id="lastName"]', last || config.helpers.lastName);
			});
	},
	addBillAddress: function (done, addln1) {
		client.waitForVisible('//input[@id="street_number"]', 10000, done)
			.then(function () {
				client.setValue('//input[@id="street_number"]', addln1 || config.helpers.address1);
			});
	},
	addBillAddress2: function(done, addln2) {
		client.waitForVisible('//input[@id="address2"]', 10000, done)
			.then(function() {
				client.setValue('//input[@id="address2"]',addln2 || config.helpers.address2);
			})
	},
	addBillCity: function(done, city) {
		client.waitForVisible('//input[@id="locality"]', 10000, done)
			.then(function() {
				client.setValue('//input[@id="locality"]', city || config.helpers.city);
			})
	},
	addBillState: function(done, state) {
		client.waitForVisible('//select[@id="administrative_area_level_1"]', 10000, done)
			.then(function() {
				client.selectByValue('//select[@id="administrative_area_level_1"]', state || config.helpers.state);
			})
	},
	addBillZipcode: function(done, zipcode) {
		client.waitForVisible('//input[@id="postal_code"]', 10000, done)
			.then(function() {
				client.setValue('//input[@id="postal_code"]', zipcode || config.helpers.zipcode);
			})
	},
	addBillPhone: function(done, phone) {
		client.waitForVisible('//input[@name="dwfrm_billing_billingAddress_addressFields_phone"]', 10000, done)
			.then(function() {
				client.setValue('//input[@name="dwfrm_billing_billingAddress_addressFields_phone"]', phone || config.helpers.phone);
			})
	},
	addBillEmail: function(done, email) {
		client.waitForVisible('//input[@id="shipping-email"]', 10000, done)
			.then(function() {
				client.setValue('//input[@id="shipping-email"]', email || config.helpers.email);
			})
	},
	proceedToPayment: function(done) {
		client.waitForVisible('#js-submit-billing-btn-mobile', 10000, done)
			.then(function () {
				client.scroll('#js-submit-billing-btn-mobile')
					.then(function() {
						client.click('#js-submit-billing-btn-mobile');
					})
			})
	},

// -------------------------------------------------------------REVIEW ORDER ----------------------------------------------------------//

	verifyShippingTitle: function(done) {
		client.waitForVisible('div.box-section.select-shipping-method > div.title-bar > h3', 10000, function () {
				client.getText('div.box-section.select-shipping-method > div.title-bar > h3')
					.then(function (text) {
						try {
							assert.equal(config.helpers.shipTitle, text, 'The expected value was not equal to the text');
							done();
						} catch (err) {
							done(err);
						}
					});
			})
	},
		verifyShipToStore: function(done) {
			client.waitForVisible('#summary-shipping-subheader', 10000, function() {
					client.getText('#js-shipping-summary-body > ul')
						.then(function (text) {
							try {
								assert.sameMembers(config.helpers.shipToStoreAddress, text.split('\n'), 'The expected value was not equal to the text');
								done();
							} catch (err) {
								done(err);
							}
						})
				});
		},
	verifyShipToAddress: function(done) {
		client.waitForVisible('#summary-shipping-subheader', 10000, function() {
			client.getText('#js-shipping-summary-body > ul')
				.then(function (text) {

					try {
						assert.sameMembers(config.helpers.shipInfoReal, text.split('\n'), 'The expected value was not equal to the text');
						done();
					} catch (err) {
						done(err);
					}
				})
		});
	},
	verifyPaymentInfo: function(done) {
		client.waitForVisible('#summary-payment-subheader', 10000, function () {
			client.getText('#js-payment-summary-body > ul.payment-method')
				.then(function (text) {
					try {
						assert.sameMembers(config.helpers.payInfo, text.split('\n'), 'The expected value was not equal to the text');
						done();
					} catch (err) {
						done(err);
					}
				})
		});
	},
	verifyPaymentName: function(done) {
		client.waitForVisible('#summary-payment-subheader', 10000, function () {
				client.getText('#js-payment-summary-body > ul.payment-method')
					.then(function (text) {
						try {
							assert.equal(config.helpers.payName, text, 'The expected value was not equal to the text');
							done();
						} catch (err) {
							done(err);
						}
					})
			});
	},
	verifyPaymentType: function(done) {
		client.waitForVisible('div.box-section.payment-method > div.title-bar > h3', 10000, function () {
				client.getText('div#js-payment-summary-body.checkout-step.payment-summary > div.payment-method p.type')
					.then(function (text) {
						try {
							assert.equal(config.helpers.payType, text, 'The expected value was not equal to the text');
							done();
						} catch (err) {
							done(err);
						}
					})
			});
	},
	verifyPaymentNumber: function(done) {
		client.waitForVisible('div.box-section.payment-method > div.title-bar > h3', 10000, function () {
				client.getText('div#js-payment-summary-body.checkout-step.payment-summary > div.payment-method p.number')
					.then(function (text) {
						try {
							assert.equal(config.helpers.payNumber, text, 'The expected value was not equal to the text');
							done();
						} catch (err) {
							done(err);
						}
					})
			});
	},
	verifyPaymentExpire: function(done) {
		client.waitForVisible('div.box-section.payment-method > div.title-bar > h3', 10000, function () {
				client.getText('div#js-payment-summary-body.checkout-step.payment-summary > div.payment-method p.expire')
					.then(function (text) {
						try {
							assert.equal(config.helpers.payExpires, text, 'The expected value was not equal to the text');
							done();
						} catch (err) {
							done(err);
						}
					})
			});
	},
	verifyBillInfoSTS: function(done) {
		client.waitForVisible('#summary-billing-subheader', 10000, function () {
				client.getText('#js-billing-summary-body > ul')
					.then(function (text) {
						try {
							assert.sameMembers(config.helpers.billInfoSTS, text.split('\n'), 'The expected value was not equal to the text');
							done();
						} catch (err) {
							done(err);
						}
					})
			});
	},
	verifyBillInfoSTA: function(done) {
		client.waitForVisible('#summary-billing-subheader', 10000, function () {
			client.getText('#js-billing-summary-body > ul')
				.then(function (text) {
					try {
						assert.sameMembers(config.helpers.billInfoSTA, text.split('\n'), 'The expected value was not equal to the text');
						done();
					} catch (err) {
						done(err);
					}
				})
		});
	},
	submitPayment: function(done) {
		//client.waitForVisible('#js-submit-payment-btn', 10000, done)
		//	.then(function () {
				client.scroll('#js-submit-final-btn-mobile',done)
					.then(function () {
						client.click('//button[@id="js-submit-final-btn-mobile"]');
					})
			//})
	},
	verifyConfirmOrder: function(done) {
		client.waitForVisible('//div.order > div.check-mark > i.icon', 10000, done)
			.then(function () {
				console.log('Checkmark is visible');
					client.getText('//div.modal.order-confirmation > div.body > div.order > span.success')
						.then(function (status) {
							if (status == 'SUCCESS!') {
								console.log(status + ' = Order Status');
							} else {
								console.log('Did not complete');
							}
						})
			})
	},
	verifyOrderError: function(done) {
		if (client.isVisible('div.left-column > div.checkout-error', done)) {
			client.scroll('div.left-column > div.checkout-error')
				.then(function () {
					client.getText('div.left-column > div.checkout-error')
						.then(function (error) {
							if (error == config.helpers.orderError) {
								console.log(error + ' Order Failed!');
							} else {
								console.log('There was no error');
							}
						})
				})
		} else {
			console.log('There was no error');
		}
	},

	
//														REPORTING											 //
	
	getScreenshot: function(done) {
		client.saveScreenshot('C:/Users/mvanevery/Pictures/Work images/payless/Test Results/checkOutPass ' + current + '.png', done);
	},


	end: function (done) {
		client.end();	//	done();
	}
};
