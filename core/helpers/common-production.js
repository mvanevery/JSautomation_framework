/**
 * Created by mvanevery on 5/5/2016.
 */
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

    addShipFirstName: function (done) {
        client.waitForVisible('//input[@id="firstName"]', 10000, done)
            .then(function () {
                client.setValue('//input[@id="firstName"]', config.helpers.FirstNameFake);
            });
    },
    addShipLastName: function (done) {
        client.waitForVisible('//input[@id="lastName"]', 10000, done)
            .then(function () {
                client.setValue('//input[@id="lastName"]', config.helpers.LastNameFake);
            });
    },
    addShipAddress: function (done) {
        client.waitForVisible('//input[@id="street_number"]', 10000, done)
            .then(function () {
                client.setValue('//input[@id="street_number"]', config.helpers.AddressFake);
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
                client.setValue('//input[@name="dwfrm_singleshipping_shippingAddress_addressFields_phone"]', config.helpers.PhoneFake);
            })
    },
    addShipEmail: function(done) {
        client.waitForVisible('//input[@id="shipping-email"]', 10000, done)
            .then(function() {
                client.setValue('//input[@id="shipping-email"]', config.helpers.EmailFake);
            })
    },
    addCCName: function(done) {
        client.waitForVisible('input[name="dwfrm_billing_paymentMethods_creditCard_owner"]', 10000, done)
            .then(function () {
                client.setValue('//input[@name="dwfrm_billing_paymentMethods_creditCard_owner"]', config.helpers.CCNameFake);
            })
    },
    addCCNumber: function(done) {
        client.waitForVisible('input[name="dwfrm_billing_paymentMethods_creditCard_number"]', 10000, done)
            .then(function () {
                client.setValue('//input[@name="dwfrm_billing_paymentMethods_creditCard_number"]', config.helpers.CCNumberFake);
            })
    },
    addCCExpMonth: function(done) {
        client.waitForVisible('//select[@name="dwfrm_billing_paymentMethods_creditCard_month"]', 10000, done)
            .then(function () {
                client.selectByValue('//select[@name="dwfrm_billing_paymentMethods_creditCard_month"]', config.helpers.CCExpMonthFake);
            })
    },
    addCCExpYear: function(done) {
        client.waitForVisible('//select[@name="dwfrm_billing_paymentMethods_creditCard_year"]', 10000, done)
            .then(function () {
                client.selectByValue('//select[@name="dwfrm_billing_paymentMethods_creditCard_year"]', config.helpers.CCExpYearFake);
            })
    },
    addCCSecurity: function(done) {
        client.waitForVisible('input[name="dwfrm_billing_paymentMethods_creditCard_cvn"]', 10000, done)
            .then(function () {
                client.setValue('//input[@name="dwfrm_billing_paymentMethods_creditCard_cvn"]', config.helpers.CCSecurityFake);
            })
    },
    verifyShippingInfo: function(done) {
        client.waitForVisible('div.box-section.payment-method > div.title-bar > h3', 10000, done)
            .then(function () {
                client.getText('div#js-shipping-summary-body.checkout-step.shipping-summary > p.summary-line.address-line')
                    .then(function (text) {
                        if (comparisonTestPass(text, config.helpers.shipInfoFake)) {
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
                        if (text == config.helpers.payNameFake) {
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
                        if (text == config.helpers.payTypeFake) {
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
                        if (text == config.helpers.payNumberFake) {
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
                        if (text == config.helpers.payExpiresFake) {
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
                        if (comparisonTestPass(text, config.helpers.billingInfoFake)) {
                            console.log('Billing info - PASS');
                        } else {
                            console.log('Billing info - FAIL');
                        }
                    })
            });
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

//	if (status == 'SUCCESS!') {
//	client.getText('//div.modal.order-confirmation > div.body > div.order > span.order-number')
//		.then(function(ordernumber) {
//			console.log(ordernumber);
//		} else {
//		console.log('No Order');
//	}
//}
//})
    getScreenshot: function(done) {
        client.saveScreenshot('C:/Users/mvanevery/Pictures/Work images/payless/Test Results/checkOutPass.png', done);
    },




    //end: function (done) {
    //	client.end();	//	done();
    //}
};
