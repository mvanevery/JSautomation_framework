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

  verifyLoginScreen(done) {
    if (client.isVisible(loginPage.helpers.loginLogo, done)) {
      client.getAttribute(loginPage.helpers.usernameField, 'placeholder')
        .then((text) => {
          try {
            assert.equal(loginPage.helpers.userPlaceholder, text, 'Not on Login screen');
          } catch (err) {
            done(err);
          }
        })
    }
  },

  loginUser(done, username, password) {
    if (client.isVisible(loginPage.helpers.signIn, done)) {
      client.setValue(loginPage.helpers.usernameField, username || loginPage.helpers.username)
        .then(() => {
          client.setValue(loginPage.helpers.passwordField, password || loginPage.helpers.password)
            .then(() => {
              client.click(loginPage.helpers.signIn);
            });
        });
    } else {
      console.log('	ERROR: Login page is not available.');
    }
  },

  verifyStoreId(done) {
    if (client.isVisible(loginPage.helpers.storeIdLabel)) {
      console.log('	PASS: The Store ID is visible.');
    } else {
      console.log('	ERROR: The user failed to logout.');
    }
    done();
  },


  logoutUser(done) {
    if (client.isVisible(loginPage.helpers.logout, done)) {
      client.click(loginPage.helpers.logout)
        .then(() => {
          client.click(loginPage.helpers.logoutConfirm);
        })
    }

  }
}
