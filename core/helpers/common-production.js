const client = require('../../core/client').client;
const project = require('../projects/config').project;
const config = require(`../projects/${project}/config`);

const comparisonTestPass = (array1, array2) => {
  // Test lengths first
  if (array1.length !== array2.length) {
    return false;
  }

  // Test that entries match
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

module.exports = {
  addShipFirstName: (done) => {
    client.waitForVisible('//input[@id="firstName"]', 10000, done)
      .then(() => {
        client.setValue('//input[@id="firstName"]', config.helpers.FirstNameFake);
      });
  },
  addShipLastName: (done) => {
    client.waitForVisible('//input[@id="lastName"]', 10000, done)
      .then(() => {
        client.setValue('//input[@id="lastName"]', config.helpers.LastNameFake);
      });
  },
  addShipAddress: (done) => {
    client.waitForVisible('//input[@id="street_number"]', 10000, done)
      .then(() => {
        client.setValue('//input[@id="street_number"]', config.helpers.AddressFake);
      });
  },
  addShipAddress2: (done) => {
    client.waitForVisible('//input[@id="address2"]', 10000, done)
      .then(() => {
        client.setValue('//input[@id="address2"]', config.helpers.Address2);
      });
  },
  addShipCity: (done) => {
    client.waitForVisible('//input[@id="locality"]', 10000, done)
      .then(() => {
        client.setValue('//input[@id="locality"]', config.helpers.City);
      });
  },
  addShipState: (done) => {
    client.waitForVisible('//select[@id="administrative_area_level_1"]', 10000, done)
      .then(() => {
        client.selectByValue('//select[@id="administrative_area_level_1"]', config.helpers.State);
      });
  },
  addShipZipcode: (done) => {
    client.waitForVisible('//input[@id="postal_code"]', 10000, done)
      .then(() => {
        client.setValue('//input[@id="postal_code"]', config.helpers.Zipcode);
      });
  },
  addShipPhone: (done) => {
    client.waitForVisible('//input[@name="dwfrm_singleshipping_shippingAddress_addressFields_phone"]', 10000, done)
      .then(() => {
        client.setValue('//input[@name="dwfrm_singleshipping_shippingAddress_addressFields_phone"]', config.helpers.PhoneFake);
      });
  },
  addShipEmail: (done) => {
    client.waitForVisible('//input[@id="shipping-email"]', 10000, done)
      .then(() => {
        client.setValue('//input[@id="shipping-email"]', config.helpers.EmailFake);
      });
  },
  addCCName: (done) => {
    client.waitForVisible('input[name="dwfrm_billing_paymentMethods_creditCard_owner"]', 10000, done)
      .then(() => {
        client.setValue('//input[@name="dwfrm_billing_paymentMethods_creditCard_owner"]', config.helpers.CCNameFake);
      });
  },
  addCCNumber: (done) => {
    client.waitForVisible('input[name="dwfrm_billing_paymentMethods_creditCard_number"]', 10000, done)
      .then(() => {
        client.setValue('//input[@name="dwfrm_billing_paymentMethods_creditCard_number"]', config.helpers.CCNumberFake);
      });
  },
  addCCExpMonth: (done) => {
    client.waitForVisible('//select[@name="dwfrm_billing_paymentMethods_creditCard_month"]', 10000, done)
      .then(() => {
        client.selectByValue('//select[@name="dwfrm_billing_paymentMethods_creditCard_month"]', config.helpers.CCExpMonthFake);
      });
  },
  addCCExpYear: (done) => {
    client.waitForVisible('//select[@name="dwfrm_billing_paymentMethods_creditCard_year"]', 10000, done)
      .then(() => {
        client.selectByValue('//select[@name="dwfrm_billing_paymentMethods_creditCard_year"]', config.helpers.CCExpYearFake);
      });
  },
  addCCSecurity: (done) => {
    client.waitForVisible('input[name="dwfrm_billing_paymentMethods_creditCard_cvn"]', 10000, done)
      .then(() => {
        client.setValue('//input[@name="dwfrm_billing_paymentMethods_creditCard_cvn"]', config.helpers.CCSecurityFake);
      });
  },
  verifyShippingInfo: (done) => {
    client.waitForVisible('div.box-section.payment-method > div.title-bar > h3', 10000, done)
      .then(() => {
        client.getText('div#js-shipping-summary-body.checkout-step.shipping-summary > p.summary-line.address-line')
          .then((text) => {
            if (comparisonTestPass(text, config.helpers.shipInfoFake)) {
              //		console.log(text);
              //		console.log(shipinfo);
              console.log('Shipping info - PASS');
            } else {
              console.log('Shipping info - FAIL');
            }
          });
      });
  },

  verifyPaymentName: (done) => {
    client.waitForVisible('div.box-section.payment-method > div.title-bar > h3', 10000, done)
      .then(() => {
        client.getText('div#js-payment-summary-body.checkout-step.payment-summary > div.payment-method p.name')
          .then((text) => {
            if (text === config.helpers.payNameFake) {
              console.log('Payment Name - PASS');
            } else {
              console.log('Payment Name - FAIL');
            }
          });
      });
  },
  verifyPaymentType: (done) => {
    client.waitForVisible('div.box-section.payment-method > div.title-bar > h3', 10000, done)
      .then(() => {
        client.getText('div#js-payment-summary-body.checkout-step.payment-summary > div.payment-method p.type')
          .then((text) => {
            if (text === config.helpers.payTypeFake) {
              console.log('Payment Type - PASS');
            } else {
              console.log('Payment Type - FAIL');
            }
          });
      });
  },
  verifyPaymentNumber: (done) => {
    client.waitForVisible('div.box-section.payment-method > div.title-bar > h3', 10000, done)
      .then(() => {
        client.getText('div#js-payment-summary-body.checkout-step.payment-summary > div.payment-method p.number')
          .then((text) => {
            if (text === config.helpers.payNumberFake) {
              console.log('Payment Number - PASS');
            } else {
              console.log('Payment Number - FAIL');
            }
          });
      });
  },
  verifyPaymentExpire: (done) => {
    client.waitForVisible('div.box-section.payment-method > div.title-bar > h3', 10000, done)
      .then(() => {
        client.getText('div#js-payment-summary-body.checkout-step.payment-summary > div.payment-method p.expire')
          .then((text) => {
            if (text === config.helpers.payExpiresFake) {
              console.log('Payment Expire - PASS');
            } else {
              console.log('Payment Expire - FAIL');
            }
          });
      });
  },
  verifyBillingInfo: (done) => {
    client.waitForVisible('div.box-section.payment-method > div.title-bar > h3', 10000, done)
      .then(() => {
        client.getText('div#js-billing-summary-body.checkout-step.billing-summary p.summary-line.address-line')
          .then((text) => {
            if (comparisonTestPass(text, config.helpers.billingInfoFake)) {
              console.log('Billing info - PASS');
            } else {
              console.log('Billing info - FAIL');
            }
          });
      });
  },
  verifyConfirmOrder: (done) => {
    client.waitForVisible('//div.order > div.check-mark > i.icon', 10000, done)
      .then(() => {
        console.log('Checkmark is visible');
        client.getText('//div.modal.order-confirmation > div.body > div.order > span.success')
          .then((status) => {
            if (status === 'SUCCESS!') {
              console.log(`${status} = Order Status`);
            } else {
              console.log('Did not complete');
            }
          });
      });
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
  getScreenshot: (done) => {
    client.saveScreenshot('C:/Users/mvanevery/Pictures/Work images/Payless/Test Results/checkOutPass.png', done);
  },


  //end: function (done) {
  //	client.end();	//	done();
  //}
};
