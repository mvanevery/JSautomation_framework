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
const assert = require('chai').assert;
const expect = require('chai').expect;
const $ = require('chai-Jquery');




module.exports = {

  verifyLoginScreen(done, expected) {
    client.isVisible(loginPage.helpers.signIn)
      .then(function (isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
        } catch (err) {
          done(err);
        }
      })
    done();
  },


  //  if (client.isVisible(loginPage.helpers.loginLogo, done)) {
  //    client.getAttribute(loginPage.helpers.usernameField, 'placeholder')
  //      .then((text) => {
  //        try {
  //          assert.equal(loginPage.helpers.userPlaceholder, text, 'Not on Login screen');
  //        } catch (err) {
  //          done(err);
  //        }
  //      })
  //  }
  //},

  loginUser(done, expected, username, password) {
    client.isVisible(loginPage.helpers.signIn)
      .then(function (isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the text');
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.setValue(loginPage.helpers.usernameField, username || loginPage.helpers.username)
            .then(() => {
              client.setValue(loginPage.helpers.passwordField, password || loginPage.helpers.password)
                .then(() => {
                  client.click(loginPage.helpers.signIn);
                });
            });
        }
      })
    done();
  },

  verifyStoreId(done, expected, value) {
    client.isVisible(loginPage.helpers.storeIdLabel)
      .then(function (isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the text');
        } catch (err) {
          done(err);
        }
      })
    if (isVisible == true) {
      client.getText(loginPage.helpers.storeIdLabel)
        .then((text) => {
          try {
            assert.equal(value, text, 'The expected number was not equal to the actual title');
          } catch (err) {
            done(err);
          }
        })
    }
    done();
  },


  logoutUser(done, expected) {
    client.isVisible(loginPage.helpers.logout)
      .then(function (isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the text');
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.click(loginPage.helpers.logout)
            .then(() => {
              client.click(loginPage.helpers.logoutConfirm);
            })
        }
      })
    done();
  },

}

