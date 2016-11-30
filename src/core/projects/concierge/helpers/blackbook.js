const clientType = require('../../../projects/config').client;
const client = require(`../../../../core/clients/${clientType}`).client;
const project = require('../../../projects/config').project;
const config = require(`../../../projects/${project}/config`);
const store = require(`../../../projects/${project}/selectors/store`);
const blackbook = require(`../../../projects/${project}/selectors/blackbook`);
const assert = require('chai').assert;

module.exports = {

  toggleMyClients(done) {
    if (client.isVisible(blackbook.helpers.myClientsToggle, done)) {
      client.touch(blackbook.helpers.myClientsToggle)
    }
  },

  enterFirstname(done, firstName) {
    if (client.isVisible(blackbook.helpers.firstName, done)) {
      client.setValue(blackbook.helpers.firstName, firstName)
    }
  },

  enterFirstnameModal(done, firstName) {
    if (client.isVisible(blackbook.helpers.firstNameModal, done)) {
      client.setValue(blackbook.helpers.firstNameModal, firstName)
    }
  },

  enterLastname(done, lastName) {
    if (client.isVisible(blackbook.helpers.lastName, done)) {
      client.setValue(blackbook.helpers.lastName, lastName)
    }
  },

  enterLastnameModal(done, lastName) {
    if (client.isVisible(blackbook.helpers.lastNameModal, done)) {
      client.setValue(blackbook.helpers.lastNameModal, lastName)
    }
  },

  enterPhone(done, phone) {
    if (client.isVisible(blackbook.helpers.phone, done)) {
      client.setValue(blackbook.helpers.phone, phone)
    }
  },

  enterPhoneModal(done, phone) {
    if (client.isVisible(blackbook.helpers.phoneModal, done)) {
      client.setValue(blackbook.helpers.phoneModal, phone)
    }
  },

  enterEmail(done, email) {
    if (client.isVisible(blackbook.helpers.email, done)) {
      client.setValue(blackbook.helpers.email, email)
    }
  },

  enterEmailModal(done, email) {
    if (client.isVisible(blackbook.helpers.emailModal, done)) {
      client.setValue(blackbook.helpers.emailModal, email)
    }
  },

  enterCity(done, city) {
    if (client.isVisible(blackbook.helpers.city, done)) {
      client.setValue(blackbook.helpers.city, city)
    }
  },

  enterCityModal(done, city) {
    if (client.isVisible(blackbook.helpers.cityModal, done)) {
      client.setValue(blackbook.helpers.cityModal, city)
    }
  },

  enterZipcode(done, zipcode) {
    if (client.isVisible(blackbook.helpers.zipcode, done)) {
      client.setValue(blackbook.helpers.zipcode, zipcode)
    }
  },

  enterZipcodeModal(done, zipcode) {
    if (client.isVisible(blackbook.helpers.zipcodeModal, done)) {
      client.setValue(blackbook.helpers.zipcodeModal, zipcode)
    }
  },

  enterState(done, state) {
    if (client.isVisible(blackbook.helpers.state, done)) {
      client.setValue(blackbook.helpers.state, state)
    }
  },

  enterStateModal(done, state) {
    if (client.isVisible(blackbook.helpers.stateModal, done)) {
      client.setValue(blackbook.helpers.stateModal, state)
    }
  },

  enterStreet1(done, street1) {
    if (client.isVisible(blackbook.helpers.street1Modal, done)) {
      client.setValue(blackbook.helpers.street1Modal, street1)
    }
  },

  enterStreet2(done, street2) {
    if (client.isVisible(blackbook.helpers.street2Modal, done)) {
      client.setValue(blackbook.helpers.street2Modal, street2)
    }
  },

  enterCountryModal(done, country) {
    if (client.isVisible(blackbook.helpers.countryModal, done)) {
      client.setValue(blackbook.helpers.countryModal, country)
    }
  },

  modalAddressType(done, type) {
    if (client.isVisible(blackbook.helpers.addresssTypeModal, done)) {
      client.selectByValue(blackbook.helpers.addresssTypeModal, type)
    }
  },

  searchCustomer(done) {
    if (client.isVisible(blackbook.helpers.searchButton, done)) {
      client.click(blackbook.helpers.searchButton)
    }
  },

  resetFields(done) {
    if(client.isVisible(blackbook.helpers.resetButton, done)) {
      client.click(blackbook.helpers.resetButton)
    }
  },

  addCustomer(done) {
    if (client.isVisible(blackbook.helpers.addCustomerButton, done)) {
      client.click(blackbook.helpers.addCustomerButton)
    }
  },

  openPhone(done) {
    if (client.isVisible(blackbook.helpers.modalHeader, done)) {
      client.click(blackbook.helpers.addPhoneModal)
    }
  },

  modalPhoneToggle(done) {
    if (client.isVisible(blackbook.helpers.phoneToggleModal, done)) {
      client.click(blackbook.helpers.phoneToggleModal)
    }
  },

  modalPhoneType(done, type) {
    if (client.isVisible(blackbook.helpers.phoneTypeModal, done)) {
      client.selectByValue(blackbook.helpers.phoneTypeModal, type)
    }
  },

  openEmail(done) {
    if (client.isVisible(blackbook.helpers.modalHeader, done)) {
      client.click(blackbook.helpers.addEmailModal)
    }
  },

  modalEmailToggle(done) {
    if (client.isVisible(blackbook.helpers.emailToggleModal, done)) {
      client.click(blackbook.helpers.emailToggleModal)
    }
  },

  modalEmailType(done, type) {
    if (client.isVisible(blackbook.helpers.emailTypeModal, done)) {
      client.selectByValue(blackbook.helpers.emailTypeModal, type)
    }
  },

  openAddress(done) {
    if (client.isVisible(blackbook.helpers.modalHeader, done)) {
      client.click(blackbook.helpers.addAddressModal)
    }
  },

  saveButton(done) {
    if (client.isVisible(blackbook.helpers.saveButton, done)) {
      client.click(blackbook.helpers.saveButton);
    }
  },

  verifySearchResults(done, expected) {
    if (client.isVisible(blackbook.helpers.searchResults, done)) {
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

  selectCustomerCard(done, expected) {
    if (client.isVisible(blackbook.helpers.searchButton, done)) {
      client.click(blackbook.helpers.customerCard)
        .then((text) => {
          client.getText(blackbook.helpers.blackbookHeader)
          try {
            assert.equal(expected, text, 'The expected value was not equal to the text');
          } catch (err) {
            done(err);
          }
        })
    }
  },

  openEditCustomer(done, expected) {
    if (client.isVisible(blackbook.helpers.blackbookHeader, done)) {
      client.click(blackbook.helpers.editIcon)
        .then(() => {
          client.getText(blackbook.helpers.modalHeader)
            .then((text) => {
              try {
                assert.equal(expected, text, 'The expected value was not equal to the text');
              } catch (err) {
                done(err);
              }
            })
        })
    }
  },

  verifyBlackbookHeader(done, expected) {
    client.getValue(blackbook.helpers.blackbookHeader, done)
      .then((text) => {
        console.log(text);
        //try {
        //  assert.equal(expected, text, 'The expected value was not equal to the text');
        //} catch (err) {
        //  done(err);
        //}
      });
  },

  verifyCustomerName(done, expected) {
    if (client.isVisible(blackbook.helpers.blackbookHeader, done)) {
      client.getText(blackbook.helpers.customerName)
        .then((text) => {
          try {
            assert.equal(expected, text, 'The expected value was not equal to the text');
          } catch (err) {
            done(err);
          }
        })
    }
  },

  verifyFirstNameDisplayed(done, expected) {
    if(client.isVisible(blackbook.helpers.firstName, done))
      client.getAttribute(blackbook.helpers.firstName, 'name')
        .then((text) => {
          try {
            assert.equal(expected, text, 'The expected value was not equal to the text');
          } catch (err) {
            done(err);
          }
        })
  },

  verifyLastNameDisplayed(done, expected) {
    if(client.isVisible(blackbook.helpers.lastName, done))
      client.getAttribute(blackbook.helpers.lastName, 'name')
        .then((text) => {
          try {
            assert.equal(expected, text, 'The expected value was not equal to the text');
          } catch (err) {
            done(err);
          }
        })
  },

  verifyPhoneDisplayed(done, expected) {
    if(client.isVisible(blackbook.helpers.phone, done))
      client.getAttribute(blackbook.helpers.phone, 'name')
        .then((text) => {
          try {
            assert.equal(expected, text, 'The expected value was not equal to the text');
          } catch (err) {
            done(err);
          }
        })
  },

  verifyEmailDisplayed(done, expected) {
    if(client.isVisible(blackbook.helpers.email, done))
      client.getAttribute(blackbook.helpers.email, 'name')
        .then((text) => {
          try {
            assert.equal(expected, text, 'The expected value was not equal to the text');
          } catch (err) {
            done(err);
          }
        })
  },

  verifyZipcodeDisplayed(done, expected) {
    if(client.isVisible(blackbook.helpers.zipcode, done))
      client.getAttribute(blackbook.helpers.zipcode, 'name')
        .then((text) => {
          try {
            assert.equal(expected, text, 'The expected value was not equal to the text');
          } catch (err) {
            done(err);
          }
        })
  },

  verifyCityDisplayed(done, expected) {
    if(client.isVisible(blackbook.helpers.city, done))
      client.getAttribute(blackbook.helpers.city, 'name')
        .then((text) => {
          try {
            assert.equal(expected, text, 'The expected value was not equal to the text');
          } catch (err) {
            done(err);
          }
        })
  },


}
