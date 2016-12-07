const clientType = require('../../../projects/config').client;
const client = require(`../../../../core/clients/${clientType}`).client;
const project = require('../../../projects/config').project;
const config = require(`../../../projects/${project}/config`);
const landingPage = require(`../../../projects/${project}/selectors/landingPage`);
const loginPage = require(`../../../projects/${project}/selectors/loginPage`);
const provisioning = require(`../../../projects/${project}/selectors/provisioning`);
const store = require(`../../../projects/${project}/selectors/store`);
const planner = require(`../../../projects/${project}/selectors/planner`);
const blackbook = require(`../../../projects/${project}/selectors/blackbook`);
const search = require(`../../../projects/${project}/selectors/productSearch`);
const assert = require('chai').assert;
const expect = require('chai').expect;
const $ = require('chai-Jquery');


module.exports = {

  verifySearchOpen(done, expected, label) {
    client.isVisible(search.helpers.searchField)
     .then(function(isVisible) {
      try {
        assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
      } catch (err) {
        done(err);
      }
      if (isVisible == true) {
        client.getAttribute(search.helpers.searchField, 'name')
          .then((text) => {
            try {
              assert.equal(label, text, 'The expected number was not equal to the actual number');
            } catch (err) {
              done(err);
            }
          })
      }
    })
    done();
  },

  verifyButtonDisabled(done, expected, criteria, enabled) {
    client.isVisible(search.helpers.searchButton)
      .then(function(isVisible) {
          try {
            assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
          } catch (err) {
            done(err);
          }
          if (isVisible == true) {
            client.setValue(search.helpers.searchField, criteria)
              .then(() => {
                client.isEnabled(search.helpers.searchButton)
                 .then(function(isEnabled) {
                  try {
                  assert.equal(enabled, isEnabled, 'The expected value was not equal to the actual value')
                } catch (err) {
                  done(err);
                }
             })
          })
      }
    })
  done();
  },

  enterSearchCriteria(done, expected, criteria) {
    client.isVisible(search.helpers.searchField)
      .then(function (isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.setValue(search.helpers.searchField, criteria)
            .then(() => {
              client.click(search.helpers.searchButton);
            })
        }
      })
    done();
  },

  verifySearchNoResults(done, expected, results) {
    client.isVisible(search.helpers.noResults)
      .then(function(isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the text');
        } catch (err) {
          done(err);
        }
        if(isVisible == true) {
          client.getText(blackbook.helpers.noResults)
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

  verifySearchPLP(done, expected, title) {
    client.isVisible(search.helpers.searchPlpHeader)
      .then(function(isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.getText(search.helpers.searchPlpHeader, title)
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

  verifyProductTitle(done, expected, title) {
      client.isVisible(search.helpers.productTitle)
        .then(function(isVisible) {
          try {
            assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
          } catch (err) {
            done(err);
          }
          if (isVisible == true) {
            client.getText(search.helpers.productTitle, title)
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

  verifyProductNumber(done, expected, number) {
    client.isVisible(search.helpers.productNumber)
      .then(function(isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.getText(search.helpers.productNumber)
            .then((text) => {
              try {
                assert.equal(number, text, 'The expected number was not equal to the actual number');
              } catch (err) {
                done(err);
              }
            })
        }
      })
    done();
  },

}
