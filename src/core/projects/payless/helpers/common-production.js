const clientType = require('../../../projects/config').client;
const client = require(`../../../../core/clients/${clientType}`).client;
const project = require('../../../projects/config').project;
const config = require(`../../../projects/${project}/config`);
const assert = require('chai').assert;

module.exports = {
  addShipFirstName: (done, first) => {
    if (client.isVisible('//input[@id="firstName"]', done)) {
      client.setValue('//input[@id="firstName"]', (first || config.helpers.firstNameFake));
    }
  },
  addShipLastName: (done, last) => {
    if (client.isVisible('//input[@id="lastName"]', done)) {
      client.setValue('//input[@id="lastName"]', last || config.helpers.lastNameFake);
    }
  },
  addShipAddress: (done, addln1) => {
    if (client.isVisible('//input[@id="street_number"]', done)) {
      client.setValue('//input[@id="street_number"]', addln1 || config.helpers.addressFake);
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
      client.setValue('//input[@id="postal_code"]', zipcode || config.helpers.zipcodeFake);
    }
  },
  addShipPhone: (done, phone) => {
    if (client.isVisible('//input[@name="dwfrm_singleshipping_shippingAddress_addressFields_phone"]', done)) {
      client.setValue('//input[@name="dwfrm_singleshipping_shippingAddress_addressFields_phone"]', phone || config.helpers.phoneFake);
    }
  },
  addShipEmail: (done, email) => {
    if (client.isVisible('//input[@id="shipping-email"]', done)) {
      client.setValue('//input[@id="shipping-email"]', email || config.helpers.emailFake);
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
      client.setValue('//input[@name="dwfrm_billing_paymentMethods_creditCard_owner"]', ccname || config.helpers.ccNameFake);
    }
  },
  addCCNumber: (done, ccnumber) => {
    if (client.isVisible('input[name="dwfrm_billing_paymentMethods_creditCard_number"]', done)) {
      client.setValue('//input[@name="dwfrm_billing_paymentMethods_creditCard_number"]', ccnumber || config.helpers.ccNumberFake);
    }
  },
  addCCExpMonth: (done, ccmonth) => {
    if (client.isVisible('//select[@name="dwfrm_billing_paymentMethods_creditCard_month"]', done)) {
      client.selectByValue('//select[@name="dwfrm_billing_paymentMethods_creditCard_month"]', ccmonth || config.helpers.ccExpMonthFake);
    }
  },
  addCCExpYear: (done, ccyear) => {
    if (client.isVisible('//select[@name="dwfrm_billing_paymentMethods_creditCard_year"]', done)) {
      client.selectByValue('//select[@name="dwfrm_billing_paymentMethods_creditCard_year"]', ccyear || config.helpers.ccExpYearFake);
    }
  },
  addCCSecurity: (done, ccsecurity) => {
    if (client.isVisible('input[name="dwfrm_billing_paymentMethods_creditCard_cvn"]', done)) {
      client.setValue('//input[@name="dwfrm_billing_paymentMethods_creditCard_cvn"]', ccsecurity || config.helpers.ccSecurityFake);
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
      client.setValue('//input[@id="firstName"]', (first || config.helpers.firstNameFake));
    }
  },
  addBillLastName: (done, last) => {
    if (client.isVisible('//input[@id="lastName"]', done)) {
      client.setValue('//input[@id="lastName"]', last || config.helpers.lastNameFake);
    }
  },
  addBillAddress: (done, addln1) => {
    if (client.isVisible('//input[@id="street_number"]', done)) {
      client.setValue('//input[@id="street_number"]', addln1 || config.helpers.addressFake);
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
      client.selectByValue('//select[@id="administrative_area_level_1"]', state || config.helpers.stateLabel);
    }
  },
  addBillZipcode: (done, zipcode) => {
    if (client.isVisible('//input[@id="postal_code"]', done)) {
      client.setValue('//input[@id="postal_code"]', zipcode || config.helpers.zipcodeFake);
    }
  },
  addBillPhone: (done, phone) => {
    if (client.isVisible('//input[@name="dwfrm_billing_billingAddress_addressFields_phone"]', done)) {
      client.setValue('//input[@name="dwfrm_billing_billingAddress_addressFields_phone"]', phone || config.helpers.phoneFake);
    }
  },
  addBillEmail: (done, email) => {
    if (client.isVisible('//input[@id="shipping-email"]', done)) {
      client.setValue('//input[@id="shipping-email"]', email || config.helpers.emailFake);
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
            assert.sameMembers(config.helpers.shipInfoFake, text.split('\n'), 'The expected value was not equal to the text');
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
            assert.sameMembers(config.helpers.payInfoFake, text.split('\n'), 'The expected value was not equal to the text');
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
            done();
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
            assert.sameMembers(config.helpers.billInfoSTSFake, text.split('\n'), 'The expected value was not equal to the text');
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
            assert.sameMembers(config.helpers.billInfoSTAFake, text.split('\n'), 'The expected value was not equal to the text');
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
    if (client.isVisible('//div.modal.order-confirmation > div.body > div.order > div.check-mark > i.icon', done)) {
      client.getText('//div.modal.order-confirmation > div.body > div.order > span.text')
        .then((status) => {
          if (status === 'SUCCESS!') {
            console.log(`${status} = Order Status`);
          } else {
            console.log('Did not complete');
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
                assert.equal(config.helpers.orderError, error, 'The expected value was not equal to the text');
                done();
              } catch (err) {
                done(err);
              }
            });
        });
    }
  },

// REPORTING
  getScreenshot: (done, current) => {
    client.saveScreenshot(`checkout${current}.png`, done);
  },

  end: (done) => {
    client.end(done);
  }
};
