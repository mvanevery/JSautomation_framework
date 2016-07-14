const clientType = require('../../../projects/config').client;
const client = require(`../../../../core/clients/${clientType}`).client;
const project = require('../../../projects/config').project;
const config = require(`../../../projects/${project}/config`);
const home = require(`../../../projects/${project}/helpers/home`);
const pdp = require(`../../../projects/${project}/helpers/pdp`);
const plp = require(`../../../projects/${project}/helpers/plp`);
const store = require(`../../../projects/${project}/helpers/store-locator`);
const expect = require('chai').expect;
const assert = require('chai').assert;
const date = new Date();
const current = `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;


module.exports = {
  mobileView: (done) => {
    client.setViewportSize({
      height: 559,
      width: 375
    }, true).then(done);
  },

// MULTI-PAGE FUNCTIONS
  gotoHomepage: (done) => {
    client.click(home.helpers.homepage, done);
  },

  pause: (pauseTime, done) => {
    client.pause(done, pauseTime);
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
  searchZipcodeCheckout: (done, zipcode) => {
    if (client.isVisible('//input[@id="js-find-store-input"]', done)) {
      client.setValue('//input[@id="js-find-store-input"]', zipcode)
        .then(() => {
          client.click('#js-find-store-button');
        });
    } else {
      console.log('no zipcode search available');
    }
  },
  searchZipcodeFAS: (done, zipcode) => {
    if (client.isVisible(store.helpers.findStoreZipcode, done)) {
      client.setValue(store.helpers.findStoreZipcode, zipcode)
        .then(() => {
          client.click(store.helpers.zipcodeFASButton);
        });
    } else {
      console.log('No button to click');
    }
  },
  searchZipcodeFIS: (done, zipcode) => {
    if (client.isVisible(store.helpers.findStoreZipcode, done)) {
      client.setValue(store.helpers.findStoreZipcode, zipcode)
        .then(() => {
          client.click(store.helpers.zipcodeFISButton);
        });
    } else {
      console.log('No button to click');
    }
  },
  goTo: (done) => {
    client.init().url(config.routes.baseUrl, done);
  },

// HOMEPAGE/MENU FUNCTIONALITY

  openMenu: (done) => {
    if (client.isVisible(home.helpers.menu, done)) {
      client.click(home.helpers.menu);
    } else {
      console.log('Menu not available');
    }
  },
  menuVerify: (done) => {
    if (client.isVisible('ul.expandable > li.footer-container > div.app-menu-footer > div.app-menu-footer-container > ul.footer-links > li.my-bag > a.cart > h5', done)) {
      client.getText('ul.expandable > li.footer-container > div.app-menu-footer > div.app-menu-footer-container > ul.footer-links > li.my-bag > a.cart > h5').then((err, text) => {
        expect(text).to.equal('My Bag');
        done();
      });
    }

  },
  closeMenu: (done) => {
    if (client.isVisible(home.helpers.menuClose, done)) {
      client.click(home.helpers.menuClose, done);
    } else {
      console.log('Menu not open');
    }
  },
  searchItem: (done, pauseTime, search) => {
    const searchData = (search || home.helpers.searchInfo);
    if (client.isVisible(home.helpers.searchField, done)) {
      client.click(home.helpers.searchBox)
        .then(() => {
          client.setValue(home.helpers.searchBox, searchData)
            .then(() => {
              client.click(home.helpers.searchButton);
              // .then (() => {
              //  pause(pauseTime)
              // });
            });
        });
    }
  },
  pickCategory: (done) => {
    if (client.isVisible(home.helpers.menuClose, done)) {
      client.click(config.helpers.men);
    } else {
      console.log('Menu not open');
    }
  },

  pickStyle: (done) => {
    if (client.isVisible(home.helpers.stylesTitle, done)) {
      client.click(config.helpers.catWomenAcc);
    } else {
      console.log('Menu not open');
    }
  },

  gotoCart: (done) => {
  if (client.isVisible(home.helpers.cartIcon, done)) {
      client.click(home.helpers.cartIcon);
    } else {
      console.log('Icon not visible');
    }
  },

// FIND A STORE/FIND IN STORE FUNCTIONALITY

  openFindAStore: (done) => {
    if (client.isVisible(home.helpers.heroBanner, done)) {
      client.click(home.helpers.locationIcon);
    } else {
      console.log('Find A Store not available');
    }
  },
  openFindInStore: (done) => {
    if (client.isVisible(pdp.helpers.addItem, done)) {
      client.click(store.helpers.openFIS);
    } else {
      console.log('select a size to enable Find In Store');
    }
  },

  verifyStoreAddress: (done) => {
    if (client.isVisible(store.helpers.locationMap, done)) {
      client.scroll(store.helpers.locationDistance);
      client.getText(store.helpers.locationAddress)
        .then((text) => {
          //console.log('test');
          const response = text.join(',').includes(config.helpers.storeAddress);
          //console.log(response); // This will be a boolean value (true/false) that will tell us whether this string is in the array
          try {
            assert.isTrue(response, 'The expected value was not equal to the text');
          } catch (err) {
            done(err);
          }
        });
    }
  },


// PLP FUNCTIONALITY

  pickItem: (done) => {
    if (client.isVisible('div.details > div.mobile-brand > a.name > h3', done)) {
      client.click('div.details > div.mobile-brand > a.name > h3');
    }
  },
  //filterItems:

  //sortItems:

  //clickImage:

  //clickColorSwatch:



// PDP FUNCTIONALITY

  selectSize: (done, size) => {
    if (client.isVisible(pdp.helpers.sizeGrid, done)) {
      client.scroll(pdp.helpers.sizeGrid)
        .then(() => {
          client.click(`${pdp.helpers.actualSize}${size}`);
        });
    } else {
      client.scroll(pdp.helpers.addItem);
    }
  },

  addToBag: (done) => {
    if (client.isVisible(pdp.helpers.addItem, done)) {
      client.scroll(pdp.helpers.addItem)
        .then(() => {
          client.click(pdp.helpers.addItem);
        });
    }
  },
  proceedToCartModal: (done) => {
    if (client.isVisible(pdp.helpers.gotoCheckout, done)) {
      client.scroll(pdp.helpers.gotoCheckout)
        .then(() => {
          client.click(pdp.helpers.gotoCheckout);
        });
    }
  },
  verifyCheckoutCTA: (done, expected) => {
    if (client.isVisible('#js-submit-final-btn-top', done)) {
      console.log('The button is visible');
      client.getText('h1.title').then((title) => {
        try {
          assert.equal(expected, title, 'The expected value was not equal to the text');
          done();
        } catch (err) {
          done(err);
        }
      });
    }
  },

  verifyItemTitle: (done, expected) => {
    if (client.isVisible(pdp.helpers.itemTitle, done)) {
      client.getText(pdp.helpers.itemTitle).then((title) => {
        try {
          assert.equal(expected, title, 'The expected value was not equal to the text');
        } catch (err) {
          done(err);
        }
      });
    }
  },
  verifyItemNumber: (done, expected) => {
    if (client.isVisible(pdp.helpers.itemTitle, done)) {
      client.getText(pdp.helpers.itemNumber).then((text) => {
        try {
          assert.equal(expected, text, 'The expected value was not equal to the text');
        } catch (err) {
          done(err);
        }
      });
    }
  },
  closeModal: (done) => {
    if (client.isVisible(pdp.helpers.gotoCheckout, done)) {
      client.click(pdp.helpers.closeModal);
    } else {
      console.log('modal not open');
    }
  },

// CART FUNCTIONALITY

  proceedToCheckoutCart: (done) => {
    if (client.isVisible('button.checkout-proceed', done)) {
      client.scroll('button.checkout-proceed')
        .then(() => {
          client.click('button.checkout-proceed');
        });
    }
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
    if (client.isVisible('#submit', done)) {
      client.setValue('//form[@id="login-form"]/div[2]/div/div/input', username || config.helpers.username)
        .then(() => {
          client.setValue('input[name="dwfrm_login_password"]', password || config.helpers.password)
            .then(() => {
              client.click('#submit');
            });
        });
    } else {
      console.log('Login area not displayed');
    }
  },
// SHIPPING SECTION

  shipToStore: (done) => {
    if (client.isVisible('a.ship-to-store', done)) {
      client.click('a.ship-to-store');
    }
  },
  selectStore: (done) => {
    if (client.isVisible('#js-store-6641', done)) {
      client.scroll('button.select-store')
        .then(() => {
          client.click('button.select-store');
        });
    } else {
      console.log('Nothing to Select');
    }
  },
  proceedToBilling: (done) => {
    if (client.isVisible('#js-geo-submit', done)) {
      client.scroll('#js-submit-shipping-btn-mobile')
        .then(() => {
          client.click('#js-submit-shipping-btn-mobile');
        });
    } else {
      if (client.isVisible('//input[@id="firstName"]', done)) {
        client.click('#js-submit-shipping-btn-mobile');
      }
    }
  },
  addShipFirstName: (done, first) => {
    if (client.isVisible('//input[@id="firstName"]', done)) {
      client.setValue('//input[@id="firstName"]', (first || config.helpers.firstName));
    }
  },
  addShipLastName: (done, last) => {
    if (client.isVisible('//input[@id="lastName"]', done)) {
      client.setValue('//input[@id="lastName"]', last || config.helpers.lastName);
    }
  },
  addShipAddress: (done, addln1) => {
    if (client.isVisible('//input[@id="street_number"]', done)) {
      client.setValue('//input[@id="street_number"]', addln1 || config.helpers.address1);
    }
  },
  addShipAddress2: (done, addln2) => {
    if (client.isVisible('//input[@id="address2"]', done)) {
      client.setValue('//input[@id="address2"]', addln2 || config.helpers.address2);
    }
  },
  addShipCity: (done, city) => {
    if (client.isVisible('//input[@id="locality"]', done)) {
      client.setValue('//input[@id="locality"]', city || config.helpers.city);
    }
  },
  addShipState: (done, state) => {
    if (client.isVisible('//select[@id="administrative_area_level_1"]', done)) {
      client.selectByValue('//select[@id="administrative_area_level_1"]', state || config.helpers.stateLabel);
    }
  },
  addShipZipcode: (done, zipcode) => {
    if (client.isVisible('//input[@id="postal_code"]', done)) {
      client.setValue('//input[@id="postal_code"]', zipcode || config.helpers.zipcode);
    }
  },
  addShipPhone: (done, phone) => {
    if (client.waitForVisible('//input[@name="dwfrm_singleshipping_shippingAddress_addressFields_phone"]', done)) {
      client.setValue('//input[@name="dwfrm_singleshipping_shippingAddress_addressFields_phone"]', phone || config.helpers.phone);
    }
  },
  addShipEmail: (done, email) => {
    if (client.isVisible('//input[@id="shipping-email"]', done)) {
      client.setValue('//input[@id="shipping-email"]', email || config.helpers.email);
    }
  },
  useTypedAddress: (done) => {
    if (client.isVisible('#js-prediction-confirm', done)) {
      client.click('#js-prediction-confirm');
    }
  },
  useShipDropdown: (done, label) => {
    if (client.isVisible('//select[@name="dwfrm_singleshipping_addressList"]', done)) {
      client.selectByValue('//select[@name="dwfrm_singleshipping_addressList"]', label || config.helpers.shipLabel);
    }
  },
  // PAYMENT SECTION
  useCCDropdown: (done) => {
    if (client.isVisible('//select[@name="dwfrm_billing_paymentMethods_creditCardList"]', done)) {
      client.click('//select[@name="dwfrm_billing_paymentMethods_creditCardList"]/option[@value="376e1f0bc3952689f86f1865df"]');
    }
  },
  addCCName: (done, ccname) => {
    if (client.isVisible('input[name="dwfrm_billing_paymentMethods_creditCard_owner"]', done)) {
      client.setValue('//input[@name="dwfrm_billing_paymentMethods_creditCard_owner"]', ccname || config.helpers.ccName);
    }
  },
  addCCNumber: (done, ccnumber) => {
    if (client.isVisible('input[name="dwfrm_billing_paymentMethods_creditCard_number"]', done)) {
      client.setValue('//input[@name="dwfrm_billing_paymentMethods_creditCard_number"]', ccnumber || config.helpers.ccNumber);
    }
  },
  addCCExpMonth: (done, ccmonth) => {
    if (client.isVisible('//select[@name="dwfrm_billing_paymentMethods_creditCard_month"]', done)) {
      client.selectByValue('//select[@name="dwfrm_billing_paymentMethods_creditCard_month"]', ccmonth || config.helpers.ccExpMonth);
    }
  },
  addCCExpYear: (done, ccyear) => {
    if (client.isVisible('//select[@name="dwfrm_billing_paymentMethods_creditCard_year"]', done)) {
      client.selectByValue('//select[@name="dwfrm_billing_paymentMethods_creditCard_year"]', ccyear || config.helpers.ccExpYear);
    }
  },
  addCCSecurity: (done, ccsecurity) => {
    if (client.isVisible('input[name="dwfrm_billing_paymentMethods_creditCard_cvn"]', done)) {
      client.setValue('//input[@name="dwfrm_billing_paymentMethods_creditCard_cvn"]', ccsecurity || config.helpers.ccSecurity);
    }
  },
  reviewOrder: (done) => {
    if (client.isVisible('#js-submit-payment-btn-mobile', done)) {
      client.scroll('#js-submit-payment-btn-mobile')
        .then(() => {
          client.click('#js-submit-payment-btn-mobile');
        });
    }
  },

//	BILLING SECTION
  useBillDropdown: (done) => {
    if (client.isVisible('//select[@name="dwfrm_billing_addressList"]', done)) {
      client.click('//select[@name="dwfrm_billing_addressList"]/option[@value="Office"]');
    } else {
      console.log('nothing here');
    }
  },

  addBillFirstName: (done, first) => {
    if (client.isVisible('//input[@id="firstName"]', done)) {
      client.setValue('//input[@id="firstName"]', (first || config.helpers.firstName));
    }
  },
  addBillLastName: (done, last) => {
    if (client.isVisible('//input[@id="lastName"]', done)) {
      client.setValue('//input[@id="lastName"]', last || config.helpers.lastName);
    }
  },
  addBillAddress: (done, addln1) => {
    if (client.isVisible('//input[@id="street_number"]', done)) {
      client.setValue('//input[@id="street_number"]', addln1 || config.helpers.address1);
    }
  },
  addBillAddress2: (done, addln2) => {
    if (client.isVisible('//input[@id="address2"]', done)) {
      client.setValue('//input[@id="address2"]', addln2 || config.helpers.address2);
    }
  },
  addBillCity: (done, city) => {
    if (client.isVisible('//input[@id="locality"]', done)) {
      client.setValue('//input[@id="locality"]', city || config.helpers.city);
    }
  },
  addBillState: (done, state) => {
    if (client.isVisible('//select[@id="administrative_area_level_1"]', done)) {
      client.selectByValue('//select[@id="administrative_area_level_1"]', state || config.helpers.state);
    }
  },
  addBillZipcode: (done, zipcode) => {
    if (client.isVisible('//input[@id="postal_code"]', done)) {
      client.setValue('//input[@id="postal_code"]', zipcode || config.helpers.zipcode);
    }
  },
  addBillPhone: (done, phone) => {
    if (client.isVisible('//input[@name="dwfrm_billing_billingAddress_addressFields_phone"]', done)) {
      client.setValue('//input[@name="dwfrm_billing_billingAddress_addressFields_phone"]', phone || config.helpers.phone);
    }
  },
  addBillEmail: (done, email) => {
    if (client.isVisible('//input[@id="shipping-email"]', done)) {
      client.setValue('//input[@id="shipping-email"]', email || config.helpers.email);
    }
  },
  proceedToPayment: (done) => {
    if (client.isVisible('#js-submit-billing-btn-mobile', done)) {
      client.scroll('#js-submit-billing-btn-mobile')
        .then(() => {
          client.click('#js-submit-billing-btn-mobile');
        });
    }
  },

// REVIEW ORDER

  verifyShippingTitle: (done) => {
    if (client.isVisible('div.box-section.select-shipping-method > div.title-bar > h3', done)) {
      client.getText('div.box-section.select-shipping-method > div.title-bar > h3')
        .then((text) => {
          try {
            assert.equal(config.helpers.shipTitle, text, 'The expected value was not equal to the text');
            done();
          } catch (err) {
            done(err);
          }
        });
    }
  },
  verifyShipToStore: (done) => {
    if (client.isVisible('#summary-shipping-subheader', done)) {
      client.getText('#js-shipping-summary-body > ul')
        .then((text) => {
          try {
            assert.sameMembers(config.helpers.shipToStoreAddress, text.split('\n'), 'The expected value was not equal to the text');
          } catch (err) {
            done(err);
          }
        });
    }
  },
  verifyShipToAddress: (done) => {
    if (client.isVisible('#summary-shipping-subheader', done)) {
      client.getText('#js-shipping-summary-body > ul')
        .then((text) => {
          try {
            assert.sameMembers(config.helpers.shipInfoReal, text.split('\n'), 'The expected value was not equal to the text');
          } catch (err) {
            done(err);
          }
        });
    }
  },
  verifyPaymentInfo: (done) => {
    if (client.isVisible('#summary-payment-subheader', done)) {
      client.getText('#js-payment-summary-body > ul.payment-method')
        .then((text) => {
          try {
            assert.sameMembers(config.helpers.payInfo, text.split('\n'), 'The expected value was not equal to the text');
          } catch (err) {
            done(err);
          }
        });
    }
  },
  verifyPaymentName: (done) => {
    if (client.isVisible('#summary-payment-subheader', done)) {
      client.getText('#js-payment-summary-body > ul.payment-method')
        .then((text) => {
          try {
            assert.equal(config.helpers.payName, text, 'The expected value was not equal to the text');
            done();
          } catch (err) {
            done(err);
          }
        });
    }
  },
  verifyPaymentType: (done) => {
    if (client.isVisible('div.box-section.payment-method > div.title-bar > h3', done)) {
      client.getText('div#js-payment-summary-body.checkout-step.payment-summary > div.payment-method p.type')
        .then((text) => {
          try {
            assert.equal(config.helpers.payType, text, 'The expected value was not equal to the text');
            done();
          } catch (err) {
            done(err);
          }
        });
    }
  },
  verifyPaymentNumber: (done) => {
    if (client.isVisible('div.box-section.payment-method > div.title-bar > h3', done)) {
      client.getText('div#js-payment-summary-body.checkout-step.payment-summary > div.payment-method p.number')
        .then((text) => {
          try {
            assert.equal(config.helpers.payNumber, text, 'The expected value was not equal to the text');
            done();
          } catch (err) {
            done(err);
          }
        });
    }
  },
  verifyPaymentExpire: (done) => {
    if (client.isVisible('div.box-section.payment-method > div.title-bar > h3', done)) {
      client.getText('div#js-payment-summary-body.checkout-step.payment-summary > div.payment-method p.expire')
        .then((text) => {
          try {
            assert.equal(config.helpers.payExpires, text, 'The expected value was not equal to the text');
          } catch (err) {
            done(err);
          }
        });
    }
  },
  verifyBillInfoSTS: (done) => {
    if (client.isVisible('#summary-billing-subheader', done)) {
      client.getText('#js-billing-summary-body > ul')
        .then((text) => {
          try {
            assert.sameMembers(config.helpers.billInfoSTS, text.split('\n'), 'The expected value was not equal to the text');
          } catch (err) {
            done(err);
          }
        });
    }
  },
  verifyBillInfoSTA: (done) => {
    if (client.isVisible('#summary-billing-subheader', done)) {
      client.getText('#js-billing-summary-body > ul')
        .then((text) => {
          try {
            assert.sameMembers(config.helpers.billInfoSTA, text.split('\n'), 'The expected value was not equal to the text');
            done();
          } catch (err) {
            done(err);
          }
        });
    }
  },
  submitPayment: (done) => {
    if (client.isVisible('#js-submit-final-btn', done)) {
      client.scroll('#js-submit-final-btn')
        .then(() => {
          client.click('#js-submit-final-btn');
        });
    }
  },
  verifyConfirmOrder: (done) => {
    if (client.isVisible('/html/body/div[1]/div/div/div[2]/div/div/div/div/div[1]/div/span[2]', done)) {
      client.getText('/html/body/div[1]/div/div/div[2]/div/div/div/div/div[1]/div/span[2]')
        .then((status) => {
          try {
            assert.equal(status, config.helpers.orderText, 'The expected value was not equal to the text');
          } catch (err) {
            done(err);
          }
        });
    }
  },
  verifyOrderError: (done) => {
    if (client.isVisible('div.left-column > div.checkout-error', done)) {
      client.scroll('div.left-column > div.checkout-error')
        .then(() => {
          client.getText('div.left-column > div.checkout-error')
            .then((error) => {
              try {
                assert.equal(error, config.helpers.orderError, 'The expected value was not equal to the text');
                done();
              } catch (err) {
                done(err);
              }
            });
        });
    } else {
      console.log('There was no error');
    }
  },

// REPORTING
  getScreenshot: (done, name) => {
    if(client.isVisible())
    client.saveScreenshot(`src/test/payless/screens/${name}_${current}.png`, done);
  },

  end: (done) => {
    client.end(done);
  }
};
