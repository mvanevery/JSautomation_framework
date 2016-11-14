const landingPage = require(`../../../../projects/${project}/selectors/landingPage`);
const loginPage = require(`../../../projects/${project}/selectors/loginPage`);
const provisioning = require(`../../../../projects/${project}/selectors/provisioning`);
const store = require(`../../../projects/${project}/selectors/store`);
const planner = require(`../../../projects/${project}/selectors/planner`);
const blackbook = require(`../../../projects/${project}/selectors/blackbook`);
const assert = require('chai').assert;
const $ = require('chai-Jquery');

module.exports = {

  searchCustomer(done, lastname, firstname) {
    if(client.isVisible(blackbook.helpers.lastName, done)) {
      client.setValue(blackbook.helpers.lastName, lastname)
        .then(() => {
          client.setValue(blackbook.helpers.firstName, firstname)
            .then(() => {
              client.click(blackbook.helpers.searchButton)
            })

        })
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

  selectCustomer(done) {
    client.waitForVisible(config.helpers.txt_Customer_Ryan, 5000);
    if (client.isVisible(config.helpers.txt_Customer_Ryan)) {
      client.click(config.helpers.txt_Customer_Ryan);
    } else {
      console.log('	ERROR: Missing the customer record for Ryan McClellan.');
    }
    client.waitForVisible(config.helpers.txt_Customer_Header, 5000);
    if (client.isVisible(config.helpers.txt_Customer_Header)) {
      console.log('	PASS: The user has reached the Customer Profile screen.');
    } else {
      console.log('	ERROR: The Customer Profile screen is unreachable.');
    }
    done();
  },

}
