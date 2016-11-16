const clientType = require('../../../projects/config').client;
const client = require(`../../../../core/clients/${clientType}`).client;
const project = require('../../../projects/config').project;
const config = require(`../../../projects/${project}/config`);
const store = require(`../../../projects/${project}/selectors/store`);
const blackbook = require(`../../../projects/${project}/selectors/blackbook`);
const assert = require('chai').assert;

module.exports = {

  enterFirstname(done, firstName) {
    if(client.isVisible(blackbook.helpers.firstName, done)) {
      client.setValue(blackbook.helpers.firstName, firstName)
    }
  },
  enterLastname(done, lastName) {
    if(client.isVisible(blackbook.helpers.lastName, done)) {
      client.setValue(blackbook.helpers.lastName, lastName)
    }
  },

  enterPhone(done, phone) {
    if(client.isVisible(blackbook.helpers.phone, done)) {
      client.setValue(blackbook.helpers.phone, phone)
    }
  },

  enterEmail(done, email) {
    if(client.isVisible(blackbook.helpers.email, done)) {
      client.setValue(blackbook.helpers.email, email)
    }
  },

  enterCity(done, city) {
    if(client.isVisible(blackbook.helpers.city, done)) {
      client.setValue(blackbook.helpers.city, city)
    }
  },

  enterZipcode(done, zipcode) {
    if(client.isVisible(blackbook.helpers.zipcode, done)) {
      client.setValue(blackbook.helpers.zipcode, zipcode)
    }
  },

  searchCustomer(done) {
    if(client.isVisible(blackbook.helpers.searchButton, done)) {
       client.click(blackbook.helpers.searchButton)
    }
  },

  addCustomer(done) {
    if(client.isVisible(blackbook.helpers.addCustomerButton, done)) {
      client.click(blackbook.helpers.addCustomerButton)
    }
  },

  openPhone(done) {
    if(client.isVisible(blackbook.helpers.modalHeader, done)) {
      client.click(blackbook.helpers.addPhoneModal)
    }
  },

  openEmail(done) {
    if(client.isVisible(blackbook.helpers.modalHeader, done)) {
      client.click(blackbook.helpers.addEmailModal)
    }
  },

  openAddress(done) {
    if(client.isVisible(blackbook.helpers.modalHeader, done)) {
      client.click(blackbook.helpers.addAddressModal)
    }
  },

  verifySearchResult(done, expected) {
    if(client.isVisible(blackbook.helpers.searchResults, done)) {
      client.getText(blackbook.helpers.searchResults)
        .then((text) => {
          try {
            assert.equal(expected, text, 'The expected value was not equal to the text');
          } catch (err) {
            done(err);
          }
        })
    }
  },

  save(done) {
    if (client.isVisible(blackbook.helpers.saveButton, done)) {
      client.click(blackbook.helpers.saveButton);
    }
  },

  //selectCustomer(done) {
  //  client.waitForVisible(config.helpers.txt_Customer_Ryan, 5000);
  //  if (client.isVisible(config.helpers.txt_Customer_Ryan)) {
  //    client.click(config.helpers.txt_Customer_Ryan);
  //  } else {
  //    console.log('	ERROR: Missing the customer record for Ryan McClellan.');
  //  }
  //  client.waitForVisible(config.helpers.txt_Customer_Header, 5000);
  //  if (client.isVisible(config.helpers.txt_Customer_Header)) {
  //    console.log('	PASS: The user has reached the Customer Profile screen.');
  //  } else {
  //    console.log('	ERROR: The Customer Profile screen is unreachable.');
  //  }
  //  done();
  //},

}
