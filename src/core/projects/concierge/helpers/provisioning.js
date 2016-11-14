const clientType = require('../../../projects/config').client;
const client = require(`../../../../core/clients/${clientType}`).client;
const project = require('../../../projects/config').project;
const config = require(`../../../projects/${project}/config`);
const loginPage = require(`../../../projects/${project}/selectors/loginPage`);
const provisioning = require(`../../../projects/${project}/selectors/provisioning`);
const assert = require('chai').assert;
const expect = require('chai').expect;
const $ = require('chai-Jquery');




module.exports = {

  enterProvisionBurberry(done) {
    if (client.isVisible(provisioning.helpers.keyField, done)) {
      client.setValue(provisioning.helpers.keyField, config.helpers.burberry_provkey)
        .then(() => {
          client.click(provisioning.helpers.submitKey);
        });
    } else {
      console.log('Already provisioned');
    }
  },

  enterProvisionTalbots(done) {
    if (client.isVisible(provisioning.helpers.keyField, done)) {
      client.setValue(provisioning.helpers.keyField, provisioning.helpers.talbots_provkey)
        .then(() => {
          client.click(provisioning.helpers.submitButton);
        });
    } else {
      console.log('Already provisioned');
    }
  },

  deprovision(done) {
    if (client.isVisible(loginPage.helpers.deprovision, done)) {
      client.click(loginPage.helpers.deprovision);
      // } else {
      // 	console.log('	ERROR: Deprovision link is unavailable.');
    }
  },

  verifyProvisionScreen(done) {
    if(client.isVisible(provisioning.helpers.concierge_logo, done)) {
      client.getAttribute(provisioning.helpers.keyField, 'placeholder')
        .then((text) => {
          try {
            assert.equal(provisioning.helpers.placeholderText, text, 'Not on provisioning screen');
          } catch (err) {
            done(err);
          }
        })
    }
    else {
      console.log('Already provisioned');
    }
  },

}
