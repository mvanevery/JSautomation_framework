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
const $ = require('chai-Jquery');



module.exports = {

  verifyConciergeScreen(done) {
    if (client.isVisible(landingPage.helpers.productIcon)) {
      console.log('	PASS: The Concierge screen is visible.');
    } else {
      console.log('	ERROR: The user failed to reach the Concierge screen.');
    }
    done();
  },

  navProducts(done) {
    if (client.isVisible(landingPage.helpers.productIcon)) {
      client.click(landingPage.helpers.productIcon)
    } else {
      console.log('	ERROR: The Catalog icon is not in the menu.');
    }
    done();
  },

  navProduct(done, catalogLabel) {
    if (client.isVisible(landingPage.helpers.menuNewArrivals.newArrivals)) {
    console.log(catalogLabel);
      if (catalogLabel == 'New Arrivals')
      {
        client.click(landingPage.helpers.menuNewArrivals.newArrivals);
      }
      else if (catalogLabel == 'Shoes')
      {
        client.click(landingPage.helpers.menuNewArrivals.Shoes);
      }
            else if (catalogLabel == 'Flats')
            {
              client.click(landingPage.helpers.menuNewArrivals.flats);
            }
      else {
            console.log('	ERROR: The New Arrivals or Shoes icon is not in the menu.');
          }
    } else {
      console.log('	ERROR: The New Arrivals or Shoes icon is not in the menu.');
    }
    done();
  },

  navDashboard(done) {
    if (client.isVisible(landingPage.helpers.iconList)) {
      client.click(landingPage.helpers.iconList);
    } else {
      console.log('	ERROR: The Dashboard icon is not in the menu.');
    }
  },

  navPlanner(done, expected) {
    if(client.isVisible(landingPage.helpers.plannerIcon, done)) {
      client.click(landingPage.helpers.plannerIcon)
        .then(() => {
          client.getText(planner.helpers.plannerTitle)
            .then((text) => {
              //console.log(text);
              try {
                assert.equal(expected, text, 'Title Matches');
              } catch (err) {
                done(err);
              }
            })
        })
    }
  },



  navBlackbook(done, expected) {
    if (client.isVisible(landingPage.helpers.blackbookIcon, done)) {
      client.click(landingPage.helpers.blackbookIcon)
        .then(() => {
          client.getText(landingPage.helpers.blackbookHeader)
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

  navSearch(done, expected) {
    if (client.isVisible(landingPage.helpers.searchIcon, done)) {
      client.click(landingPage.helpers.searchIcon)
        .then(() => {
          client.getText(landingPage.helpers.productSearchField)
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

  navAddition(done) {
    if (client.isVisible(landingPage.helpers.addIcon, done)) {
      client.click(landingPage.helpers.addIcon)
        .then(() => {
          client.getText(landingPage.helpers.createLabel)
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

}
