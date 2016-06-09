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
		if(client.isVisible('button.map', done)) {
			client.scroll('span.mobile-distance')
				.then(function () {
					client.getText('div > div.locations-page > div#locations-results > div > div.store-locator-results > div.left-column > div.store > span.address')
						.then(function(text) {
							var response = text.join(',').includes(config.helpers.storeAddress);
							console.log(response)// this will be a boolean value (true/false) that tell us whether this string is in the array
								.then(function () {
									if(response == 'true', done) {
										console.log("Matching Address Found");
									} else {
										if(response == 'false', done) {
											console.log('Matching Address NOT Found');
										} else {
											console.log('Nothing to Show');
										}
									}
								})
						})
			})
		} else {
			console.log('nothing to show');
		}
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
		client.waitForVisible('h1.title', 10000, done)
			.then(function () {
				client.getText('h1.title')
					.then(function (title) {
						if(title == expected) {
							console.log('Title Matches')
						} else {
							console.log('Titles do not match. Should be this ' + title)
						}
					})
			})
	},
	verifyItemNumber: function (expected, done) {
		client.waitForVisible('h1.title', 10000, done)
			.then(function (text) {
				client.getText('div.number > span')
				//		.then(function (err, number) {
				//			if(assert.equal(number,expected, 'number matches')) {
				//				console.log('Number Matches');
				//			} else {
				//			console.log('Numbers do not match. Should be this ' + number);
				//			}
				//		})
				//})
				try {
					assert.equal(expected, text, 'The expected value was not equal to the text');
					done();
				} catch (err) {
					done(err);
				}
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
//										SHIPPING SECTION												//
	selectStore: function (done) {
		if(client.isVisible('#js-store-6641', done)) {
			client.getText('div#js-store-6641.store > div.store-main-details > span.address')
				.then(function (text) {
					console.log(text);
					//if (comparisonTestPass(text, config.helpers.shipInfoReal)) {
					//	//		console.log(text);
					//	//		console.log(shipinfo);
					//	console.log('Shipping info - PASS');
					//} else {
					//	console.log('Shipping info - FAIL');
					//}
				})
		} else {
			console.log('Nothing to Select');
		}
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
	//												PAYMENT SECTION												//
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
		client.scroll('#js-submit-payment-btn', done)
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
							if (comparisonTestPass(text, config.helpers.shipInfoReal)) {
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
		//client.waitForVisible('#js-submit-payment-btn', 10000, done)
		//	.then(function () {
				client.scroll('#js-submit-final-btn',done)
					.then(function () {
						client.click('//button[@id="js-submit-final-btn"]');
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

//	if (status == 'SUCCESS!') {
//	client.getText('//div.modal.order-confirmation > div.body > div.order > span.order-number')
//		.then(function(ordernumber) {
//			console.log(ordernumber);
//		} else {
//		console.log('No Order');
//	}
//}
//})
	
//														REPORTING											 //
	
	getScreenshot: function(done) {
		client.saveScreenshot('C:/Users/mvanevery/Pictures/Work images/Payless/Test Results/checkOutPass ' + current + '.png', done);
	},


	end: function (done) {
		client.end();	//	done();
	}
};
