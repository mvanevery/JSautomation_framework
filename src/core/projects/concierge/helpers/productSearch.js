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

  verifySearchOpen(done, expected) {
    if (client.isVisible(search.helpers.searchField, done)) {
          client.getText(search.helpers.searchField)
            .then((text) => {
              try {
                assert.equal(expected, text, 'The expected value was not equal to the text');
              } catch (err) {
                done(err);
              }
            })
          }
        },

  enterSearchCriteria(done, criteria) {
    if (client.isVisible(search.helpers.searchField, done)) {
      client.setValue(search.helpers.searchField, criteria)
        .then(() => {
          client.click(search.helpers.searchButton);
        })
    }
  },

  verifySearchPLP(done, expected) {
    if(client.isVisible(search.helpers.searchPlpHeader, done)) {
      client.getText()
    }
  }
}