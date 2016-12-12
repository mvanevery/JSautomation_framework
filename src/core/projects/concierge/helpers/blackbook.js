const clientType = require('../../../projects/config').client;
const client = require(`../../../../core/clients/${clientType}`).client;
const project = require('../../../projects/config').project;
const config = require(`../../../projects/${project}/config`);
const store = require(`../../../projects/${project}/selectors/store`);
const blackbook = require(`../../../projects/${project}/selectors/blackbook`);
const assert = require('chai').assert;

module.exports = {

  toggleMyClients(done, expected) {
    client.isVisible(blackbook.helpers.myClientsToggle)
      .then(function (isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.selectByValue(blackbook.helpers.myClientsToggle, type);
        }
      })
    done();
  },


  modalAddressType(done, expected, type) {
    client.isVisible(blackbook.helpers.modalHeader)
      .then(function (isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.selectByValue(blackbook.helpers.addressTypeModal, type);
        }
      })
    done();
  },


  searchCustomer(done, expected) {
    client.isVisible(blackbook.helpers.searchButton)
      .then(function (isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
              client.click(blackbook.helpers.searchButton);
         }
      })
    done();
  },

  resetFields(done, expected) {
    client.isVisible(blackbook.helpers.resetButton)
      .then(function (isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.click(blackbook.helpers.resetButton);
        }
      })
    done();
  },

  addCustomer(done, expected) {
    client.isVisible(blackbook.helpers.addCustomerButton)
      .then(function (isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.click(blackbook.helpers.addCustomerButton);
        }
      })
    done();
  },

  openPhone(done, expected) {
    client.isVisible(blackbook.helpers.modalHeader)
      .then(function (isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.click(blackbook.helpers.addPhoneModal);
        }
      })
    done();
  },

  modalPhoneToggle(done, expected) {
    client.isVisible(blackbook.helpers.modalHeader)
      .then(function (isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.click(blackbook.helpers.phoneToggleModal);
        }
      })
    done();
  },

  modalPhoneType(done, expected, type) {
    client.isVisible(blackbook.helpers.modalHeader)
      .then(function (isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.selectByValue(blackbook.helpers.phoneTypeModal, type);
        }
      })
    done();
  },

  openEmail(done, expected) {
    client.isVisible(blackbook.helpers.modalHeader)
      .then(function (isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.click(blackbook.helpers.addEmailModal);
        }
      })
    done();
  },


  modalEmailToggle(done) {
    client.isVisible(blackbook.helpers.modalHeader)
      .then(function (isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.click(blackbook.helpers.emailToggleModal);
        }
      })
    done();
  },

  modalEmailType(done, expected, type) {
    client.isVisible(blackbook.helpers.modalHeader)
      .then(function (isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.selectByValue(blackbook.helpers.emailTypeModal, type);
        }
      })
    done();
  },

  openAddress(done) {
    client.isVisible(blackbook.helpers.modalHeader)
      .then(function (isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.click(blackbook.helpers.addAddressModal);
        }
      })
    done();
  },

  saveButton(done, expected) {
    client.isVisible(blackbook.helpers.save)
      .then(function (isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.click(blackbook.helpers.save);
        }
      })
    done();
  },

  cancelButton(done, expected) {
    client.isVisible(blackbook.helpers.cancel)
      .then(function (isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.click(blackbook.helpers.cancel);
        }
      })
    done();
  },

  continueButton(done, expected) {
    client.isVisible(blackbook.helpers.continue)
      .then(function (isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.click(blackbook.helpers.continue);
        }
      })
    done();
  },

  discardButton(done, expected) {
    client.isVisible(blackbook.helpers.discard)
      .then(function (isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.click(blackbook.helpers.discard);
        }
      })
    done();
  },

  elementVisible(done, select, expected) {
    client.isVisible(blackbook.helpers[select])
      .then(function(isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the text');
        } catch (err) {
          done(err);
        }
      })
    done();
  },

  enterValue(done, expected,selector, value) {
    client.isVisible(blackbook.helpers[selector])
      .then(function(isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the text');
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.setValue(blackbook.helpers[selector], value)
        }
      })
    done();
},

  verifyPageHeader(done, expected, title) {
    client.isVisible(blackbook.helpers.pageHeader)
      .then(function(isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.getText(blackbook.helpers.pageHeader, title)
            .then((text) => {
              try {
                assert.equal(title, text, 'The expected number was not equal to the actual title');
              } catch (err) {
                done(err);
              }
            })
        }
      })
    done();
  },

  verifyModalHeader(done, expected, title) {
    client.isVisible(blackbook.helpers.modalHeader)
      .then(function(isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.getText(blackbook.helpers.modalHeader, title)
            .then((text) => {
              try {
                assert.equal(title, text, 'The expected number was not equal to the actual title');
              } catch (err) {
                done(err);
              }
            })
        }
      })
    done();
  },


  getFieldValue(done, select, expected) {
    client.getValue(blackbook.helpers[select])
      .then(function (getValue) {
        try {
          assert.equal(expected, getValue, 'The expected value was not equal to the text');
        } catch (err) {
          done(err);
        }
      })
    done();
  },

  verifySearchResults(done, expected, results) {
      client.isVisible(blackbook.helpers.searchResults)
        .then(function(isVisible) {
          try {
            assert.equal(expected, isVisible, 'The expected value was not equal to the text');
          } catch (err) {
            done(err);
          }
          if(isVisible == true) {
            client.getText(blackbook.helpers.searchResults)
              .then((text) => {
              try {
                assert.equal(results, text, 'The expected number was not equal to the actual number');
              } catch (err) {
                done(err);
              }
            })
          }
        });
    done();
  },

  selectCustomerCard(done, expected) {
      client.isVisible(blackbook.helpers.customerCard)
        .then(function(isVisible) {
          try {
            assert.equal(expected, isVisible, 'The expected value was not equal to the text');
          } catch (err) {
            done(err);
          }
          if (isVisible == true) {
            client.click(blackbook.helpers.customerCard)
          }
        })
    done();
  },

  openEditCustomer(done, expected) {
    client.isVisible(blackbook.helpers.customerName)
      .then(function(isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the text');
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.click(blackbook.helpers.editIcon)
        }
      })
    done();
  },

 verifyCustomerName(done, expected, value) {
   client.isVisible(blackbook.helpers.customerName)
     .then(function(isVisible) {
       try {
         assert.equal(expected, isVisible, 'The expected value was not equal to the text');
       } catch (err) {
         done(err);
       }
       if (isVisible == true) {
         client.getText(blackbook.helpers.customerName)
           .then((text) => {
             try {
               assert.equal(value, text, 'The expected value was not equal to the text');
             } catch (err) {
               done(err);
             }
           })
       }
     })
   done();
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
