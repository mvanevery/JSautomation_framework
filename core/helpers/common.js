const client = require('../../core/client').client;
const project = require('../projects/config').project;
const config = require('../projects/' + project + '/config');
const page = require('../projects/' + project + '/config.homepage');
const expect = require('chai').expect;
const assert = require('chai').assert;
const mobileTitle = page.mobileTitle;
const date = new Date();
const current = date.getMonth() + '-' + date.getDate() + '-' + date.getFullYear() + '-' + date.getHours() + '-' + date.getMinutes() + '-' + date.getSeconds();

const comparisonTestPass = (array1, array2) => {
  // Test lengths first
  if (array1.length !== array2.length) {
    return false;
  }

  // Test that entries match
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};


module.exports = {

  mobileView: (done) => {
    client.setViewportSize({
      height: 559,
      width: 375
    }, true).then(done);
  },

  goTo: (done) => {
    client.init().url(config.routes.baseUrl).then(() => {
      client.setViewportSize({
        height: 559,
        width: 375
      }, true).then(done);
    });
  },
// MULTI-PAGE FUNCTIONS
  pause: (pauseTime, done) => {
    client.pause(pauseTime, done);
  },
  refreshPage: (done) => {
    client.refresh(done);
  },
  clickGeolocation: (done) => {
    if (client.isVisible('button.geo-submit', done)) {
      client.click('button.geo-submit');
    } else if (client.isVisble('#js-geo-submit', done)) {
      client.click('#js-geo-submit');
    } else {
      console.log('no geolocation available');
    }
  },


// HOMEPAGE/MENU FUNCTIONALITY

  openMenu: (done) => {
    if (client.isVisible('div.slider-container > a > img', done)) {
      client.click('a.menu-trigger > i.icon');
    } else {
      console.log('Menu not available');
    }
  },
  menuVerify: (done) => {
    if (client.isVisible('ul.expandable > li.footer-container > div.app-menu-footer > div.app-menu-footer-container > ul.footer-links > li.my-bag > a.cart > h5', done)) {
      client.getText('ul.expandable > li.footer-container > div.app-menu-footer > div.app-menu-footer-container > ul.footer-links > li.my-bag > a.cart > h5').then(function (err, text) {
        expect(text).to.equal('My Bag');
        done();
      });
    }

  },
  closeMenu: (done) => {
    if (client.isVisible('a.close > i.icon', done)) {
      client.click('a.close > i.icon', done);
    } else {
      console.log('Menu not open');
    }
  },
  searchItem: (done, search) => {
    var searchData = (search || config.helpers.search);
    client.waitForVisible('div.app-sub-header > form#search-form div.input > input', 10000, done)
      .then(() => {
        client.click('//form[@id="search-form"]/div/input')
          .then(() => {
            client.setValue('//form[@id="search-form"]/div/input', searchData)
              .then(() => {
                client.click('button[type="submit"]');
              });
          });
      });
  },
  pickCategory: (done) => {
    if (client.isVisible('a.close > i.icon', done)) {
      client.click(config.helpers.men);
    } else {
      console.log('Menu not open');
    }
  },

  pickStyle: (done) => {
    if (client.isVisible('li.active.active-leaf > a.title', done)) {
      client.click(config.helpers.catWomenAcc);
    } else {
      console.log('Menu not open');
    }
  },

// FIND A STORE/FIND IN STORE FUNCTIONALITY

  openFindAStore: (done) => {
    if (client.isVisible('div.slider-container > a > img', done)) {
      client.click('a.location > i.icon');
    } else {
      console.log('Find A Store not available');
    }
  },
  openFindInStore: (done) => {
    if (client.isEnabled('button.add-to-cart', done)) {
      client.click('li.mobile-locate.js-findinstore > a > h5');
    } else {
      console.log('select a size to enable Find In Store');
    }
  },

  verifyStoreAddress: (done) => {
    client.waitForVisible('button.map', 10000, done).then(() => {
      client.scroll('span.mobile-distance');
      client.getText('div > div.locations-page > div#locations-results > div > div.store-locator-results > div.left-column > div.store > span.address')
        .then((text) => {
          var response = text.join(',').includes(config.helpers.storeAddress);
          console.log(response);// this will be a boolean value (true/false) that tell us whether this string is in the array
          try {
            assert.isTrue(response, 'The expected value was not equal to the text');
            done();
          } catch (err) {
            done(err);
          }
          // .then(function () {
          //	if (response == 'true', done) {
          //		console.log("Matching Address Found");
          //	} else {
          //		if (response == 'false', done) {
          //			console.log('Matching Address NOT Found');
          //		} else {
          //			console.log('Nothing to Show');
          //		}
          //	}
          // })
        });
    });
  },


// PLP FUNCTIONALITY

  pickItem: (done) => {
    client.waitForVisible('div.details > div.mobile-brand > a.name > h3', 20000, done)
      .then(() => {
        client.click('div.details > div.mobile-brand > a.name > h3');
      });
  },

// PDP FUNCTIONALITY

  selectSize: (done) => {
    if (client.isVisible('tbody > tr > td.size-button > span', done)) {
      client.scroll('tbody > tr > td.size-button > span')
        .then(() => {
          client.click('span=9');
        });
    } else {
      client.scroll('button.add-to-cart');
    }
  },

  addToBag: (done) => {
    client.waitForVisible('button.add-to-cart', 10000, done)
      .then(() => {
        client.scroll('button.add-to-cart')
          .then(() => {
            client.click('button.add-to-cart');
          });
      });
  },
  proceedToCartModal: (done) => {
    client.waitForVisible('button.btn-checkout', 10000, done)
      .then(() => {
        client.scroll('button.btn-checkout')
          .then(() => {
            client.click('button.btn-checkout');
          });
      });
  },
  verifyItemTitle: (expected, done) => {
    client.waitForVisible('h1.title', 10000, () => {
      client.getText('h1.title').then((title) => {
        try {
          assert.equal(expected, title, 'The expected value was not equal to the text');
          done();
        } catch (err) {
          done(err);
        }
        // .then(function (title) {
        //	if(title == expected) {
        //		console.log('Title Matches')
        //	} else {
        //		console.log('Titles do not match. Should be this ' + title)
      });
    });
  },
  verifyItemNumber: (expected, done) => {
    client.waitForVisible('h1.title', 10000, () => {
      client.getText('div.number > span')
        .then((text) => {
          //		.then(function (err, number) {
          //			if(assert.equal(number,expected, 'number matches')) {
          //				console.log('Number Matches');
          //			} else {
          //			console.log('Numbers do not match. Should be this ' + number);
          //			}
          //		})
          // })
          try {
            assert.equal(expected, text, 'The expected value was not equal to the text');
            done();
          } catch (err) {
            done(err);
          }
        });
    });
  },

// CART FUNCTIONALITY

  proceedToCheckoutCart: (done) => {
    client.waitForVisible('button.checkout-proceed', 10000, done)
      .then(() => {
        client.scroll('button.checkout-proceed')
          .then(() => {
            client.click('button.checkout-proceed');
          });
      });
  },

// CHECKOUT FUNCTIONALITY
  loginButton: (done) => {
    if (client.isVisible('#activate-login', done)) {
      client.click('#activate-login');
    } else {
      console.log('login not possible');
    }
  },
  addLoginInfo: (done, username, password) => {
    client.waitForVisible('//form[@id="login-form"]/div[2]/div/div/input', 10000, done)
      .then(() => {
        client.setValue('//form[@id="login-form"]/div[2]/div/div/input', username || config.helpers.username)
          .then(() => {
            client.setValue('//form[@id="login-form"]/div[2]/div/div[2]/input', password || config.helpers.password)
              .then(() => {
                client.click('#submit');
              });
          });
      });
  },
// SHIPPING SECTION
  selectStore: (done) => {
    if (client.isVisible('#js-store-6641', done)) {
      client.getText('div#js-store-6641.store > div.store-main-details > span.address')
        .then((text) => {
          console.log(text);
          // if (comparisonTestPass(text, config.helpers.shipInfoReal)) {
          //	//		console.log(text);
          //	//		console.log(shipinfo);
          //	console.log('Shipping info - PASS');
          // } else {
          //	console.log('Shipping info - FAIL');
          // }
        });
    } else {
      console.log('Nothing to Select');
    }
  },
  addShipFirstName: (done, first) => {
    client.waitForVisible('//input[@id="firstName"]', 10000, done)
      .then(() => {
        client.setValue('//input[@id="firstName"]', (first || config.helpers.firstName));
      });
  },
  addShipLastName: (done, last) => {
    client.waitForVisible('//input[@id="lastName"]', 10000, done)
      .then(() => {
        client.setValue('//input[@id="lastName"]', last || config.helpers.lastName);
      });
  },
  addShipAddress: (done, addln1) => {
    client.waitForVisible('//input[@id="street_number"]', 10000, done)
      .then(() => {
        client.setValue('//input[@id="street_number"]', addln1 || config.helpers.address1);
      });
  },
  addShipAddress2: (done, addln2) => {
    client.waitForVisible('//input[@id="address2"]', 10000, done)
      .then(() => {
        client.setValue('//input[@id="address2"]', addln2 || config.helpers.address2);
      });
  },
  addShipCity: (done, city) => {
    client.waitForVisible('//input[@id="locality"]', 10000, done)
      .then(() => {
        client.setValue('//input[@id="locality"]', city || config.helpers.city);
      });
  },
  addShipState: (done, state) => {
    client.waitForVisible('//select[@id="administrative_area_level_1"]', 10000, done)
      .then(() => {
        client.selectByValue('//select[@id="administrative_area_level_1"]', state || config.helpers.state);
      });
  },
  addShipZipcode: (done, zipcode) => {
    client.waitForVisible('//input[@id="postal_code"]', 10000, done)
      .then(() => {
        client.setValue('//input[@id="postal_code"]', zipcode || config.helpers.zipcode);
      });
  },
  addShipPhone: (done, phone) => {
    client.waitForVisible('//input[@name="dwfrm_singleshipping_shippingAddress_addressFields_phone"]', 10000, done)
      .then(() => {
        client.setValue('//input[@name="dwfrm_singleshipping_shippingAddress_addressFields_phone"]', phone || config.helpers.phone);
      });
  },
  addShipEmail: (done, email) => {
    client.waitForVisible('//input[@id="shipping-email"]', 10000, done)
      .then(() => {
        client.setValue('//input[@id="shipping-email"]', email || config.helpers.email);
      });
  },
  proceedToPayment: (done) => {
    client.waitForVisible('#js-submit-shipping-btn', 10000, done)
      .then(() => {
        client.scroll('#js-submit-shipping-btn')
          .then(() => {
            client.click('#js-submit-shipping-btn');
          });
      });
  },
  useTypedAddress: (done) => {
    client.waitForVisible('#js-prediction-confirm', 10000, done)
      .then(() => {
        client.click('#js-prediction-confirm');
      });
  },
  useShipDropdown: (done, label) => {
    client.waitForVisible('//select[@name="dwfrm_singleshipping_addressList"]', 10000, done)
      .then(() => {
        client.selectByValue('//select[@name="dwfrm_singleshipping_addressList"]', label || config.helpers.shipLabel);
      });
  },
  shipToStore: (done) => {
    client.waitForVisible('a.ship-to-store', 10000, done)
      .then(() => {
        client.click('a.ship-to-store');
      });
  },
  // PAYMENT SECTION
  addCCName: (done, ccname) => {
    client.waitForVisible('input[name="dwfrm_billing_paymentMethods_creditCard_owner"]', 10000, done)
      .then(() => {
        client.setValue('//input[@name="dwfrm_billing_paymentMethods_creditCard_owner"]', ccname || config.helpers.ccName);
      });
  },
  addCCNumber: (done, ccnumber) => {
    client.waitForVisible('input[name="dwfrm_billing_paymentMethods_creditCard_number"]', 10000, done)
      .then(() => {
        client.setValue('//input[@name="dwfrm_billing_paymentMethods_creditCard_number"]', ccnumber || config.helpers.ccNumber);
      });
  },
  addCCExpMonth: (done, ccmonth) => {
    client.waitForVisible('//select[@name="dwfrm_billing_paymentMethods_creditCard_month"]', 10000, done)
      .then(() => {
        client.selectByValue('//select[@name="dwfrm_billing_paymentMethods_creditCard_month"]', ccmonth || config.helpers.ccExpMonth);
      });
  },
  addCCExpYear: (done, ccyear) => {
    client.waitForVisible('//select[@name="dwfrm_billing_paymentMethods_creditCard_year"]', 10000, done)
      .then(() => {
        client.selectByValue('//select[@name="dwfrm_billing_paymentMethods_creditCard_year"]', ccyear || config.helpers.ccExpYear);
      });
  },
  addCCSecurity: (done, ccsecurity) => {
    client.waitForVisible('input[name="dwfrm_billing_paymentMethods_creditCard_cvn"]', 10000, done)
      .then(() => {
        client.setValue('//input[@name="dwfrm_billing_paymentMethods_creditCard_cvn"]', ccsecurity || config.helpers.ccSecurity);
      });
  },
  reviewOrder: (done) => {
    client.scroll('#js-submit-payment-btn', done)
      .then(() => {
        client.click('#js-submit-payment-btn');
      });
  },
  verifyShippingTitle: (done) => {
    client.waitForVisible('div.box-section.select-shipping-method > div.title-bar > h3', 10000, () => {
      client.getText('div.box-section.select-shipping-method > div.title-bar > h3')
        .then((text) => {
          // if (text == config.helpers.shipTitle) {
          //	console.log('Shipping title - PASS');
          // } else {
          //	console.log('Shipping title - FAIL');
          // }
          try {
            assert.equal(config.helpers.shipTitle, text, 'The expected value was not equal to the text');
            done();
          } catch (err) {
            done(err);
          }
        });
    });
  },
  verifyShippingInfo: (done) => {
    client.waitForVisible('div.box-section.payment-method > div.title-bar > h3', 10000, () => {
      // .then(function () {
      client.getText('div#js-shipping-summary-body.checkout-step.shipping-summary > p.summary-line.address-line')
        .then((text) => {
          // if (comparisonTestPass(text, config.helpers.shipInfoReal)) {
          // //		console.log(text);
          // //		console.log(shipinfo);
          //	console.log('Shipping info - PASS');
          // } else {
          //	console.log('Shipping info - FAIL');
          // }
          try {
            assert.equal(config.helpers.shipInfoReal, text, 'The expected value was not equal to the text');
            done();
          } catch (err) {
            done(err);
          }
        });
    });
  },
  verifyPaymentName: (done) => {
    client.waitForVisible('div.box-section.payment-method > div.title-bar > h3', 10000, () => {
      // .then(function () {
      client.getText('div#js-payment-summary-body.checkout-step.payment-summary > div.payment-method p.name')
        .then((text) => {
          // if (text == config.helpers.payName) {
          //	console.log('Payment Name - PASS');
          // } else {
          //	console.log('Payment Name - FAIL');
          // }
          try {
            assert.equal(config.helpers.payName, text, 'The expected value was not equal to the text');
            done();
          } catch (err) {
            done(err);
          }
        });
    });
  },
  verifyPaymentType: (done) => {
    client.waitForVisible('div.box-section.payment-method > div.title-bar > h3', 10000, () => {
      // .then(function() {
      client.getText('div#js-payment-summary-body.checkout-step.payment-summary > div.payment-method p.type')
        .then((text) => {
          // if (text == config.helpers.payType) {
          //	console.log('Payment Type - PASS');
          // } else {
          //	console.log('Payment Type - FAIL');
          // }
          try {
            assert.equal(config.helpers.payType, text, 'The expected value was not equal to the text');
            done();
          } catch (err) {
            done(err);
          }
        });
    });
  },
  verifyPaymentNumber: (done) => {
    client.waitForVisible('div.box-section.payment-method > div.title-bar > h3', 10000, () => {
      // .then(function() {
      client.getText('div#js-payment-summary-body.checkout-step.payment-summary > div.payment-method p.number')
        .then((text) => {
          // if (text == config.helpers.payNumber) {
          //	console.log('Payment Number - PASS');
          // } else {
          //	console.log('Payment Number - FAIL');
          // }
          try {
            assert.equal(config.helpers.payNumber, text, 'The expected value was not equal to the text');
            done();
          } catch (err) {
            done(err);
          }
        });
    });
  },
  verifyPaymentExpire: (done) => {
    client.waitForVisible('div.box-section.payment-method > div.title-bar > h3', 10000, () => {
      // .then(function() {
      client.getText('div#js-payment-summary-body.checkout-step.payment-summary > div.payment-method p.expire')
        .then((text) => {
          // if (text == config.helpers.payExpires) {
          //	console.log('Payment Expire - PASS');
          // } else {
          //	console.log('Payment Expire - FAIL');
          // }
          try {
            assert.equal(config.helpers.payExpires, text, 'The expected value was not equal to the text');
            done();
          } catch (err) {
            done(err);
          }
        });
    });
  },
  verifyBillingInfo: (done) => {
    client.waitForVisible('div.box-section.payment-method > div.title-bar > h3', 10000, () => {
      // .then(function() {
      client.getText('div#js-billing-summary-body.checkout-step.billing-summary p.summary-line.address-line')
        .then((text) => {
          //	if (comparisonTestPass(text, config.helpers.billingInfo)) {
          //	console.log('Billing info - PASS');
          // } else {
          //	console.log('Billing info - FAIL');
          // }
          try {
            assert.equal(config.helpers.billingInfo, text, 'The expected value was not equal to the text');
            done();
          } catch (err) {
            done(err);
          }
        });
    });
  },
  submitPayment: (done) => {
    // client.waitForVisible('#js-submit-payment-btn', 10000, done)
    //	.then(function () {
    client.scroll('#js-submit-final-btn', done)
      .then(() => {
        client.click('//button[@id="js-submit-final-btn"]');
      });
    // })
  },
  verifyConfirmOrder: (done) => {
    client.waitForVisible('//div.order > div.check-mark > i.icon', 10000, done)
      .then(() => {
        console.log('Checkmark is visible');
        client.getText('//div.modal.order-confirmation > div.body > div.order > span.success')
          .then((status) => {
            if (status == 'SUCCESS!') {
              console.log(status + ' = Order Status');
            } else {
              console.log('Did not complete');
            }
          });
      });
  },
  verifyOrderError: (done) => {
    if (client.isVisible('div.left-column > div.checkout-error', done)) {
      client.scroll('div.left-column > div.checkout-error')
        .then(() => {
          client.getText('div.left-column > div.checkout-error')
            .then((error) => {
              if (error == config.helpers.orderError) {
                console.log(error + ' Order Failed!');
              } else {
                console.log('There was no error');
              }
            });
        });
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
// }
// })

// REPORTING

  getScreenshot: (done) => {
    client.saveScreenshot('C:/Users/mvanevery/Pictures/Work images/Payless/Test Results/checkOutPass ' + current + '.png', done);
  },

  end: (done) => {
    client.end(done);
  }
};
