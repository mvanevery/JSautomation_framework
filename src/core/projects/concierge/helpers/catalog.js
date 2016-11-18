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
const catalog = require(`../../../projects/${project}/selectors/catalog`);
const assert = require('chai').assert;
const expect = require('chai').expect;
const $ = require('chai-Jquery');


module.exports = {
  LeftDrawer(done, catalogLabel) {
    if (client.isVisible(catalog.helpers.products.newArrivals)) {
      if (catalogLabel == 'New Arrivals')
      {
        client.click(catalog.helpers.products.newArrivals)
          .then (() => {
            client.getText(catalog.helpers.products.newArrivals)
              .then((text) => {
                try {
                  assert.equal(catalogLabel, text, 'The New Arrivals page is not displayed');
                } catch (err) {
                  done(err);
                }
              });
          });
      }
      else if (catalogLabel == 'Shoes')
      {
        client.click(catalog.helpers.products.shoes)
      }
      else if (catalogLabel == 'Flats')
      {
        client.click(catalog.helpers.products.flats)
          .then (() => {
            client.getText(catalog.helpers.products.flats)
              .then((text) => {
                try {
                  assert.equal(catalogLabel, text, 'The Flats page is not displayed');
                } catch (err) {
                  done(err);
                }
              });
          });
      }
      else
      {
        console.log('	ERROR: The New Arrivals or Shoes icon is not in the menu.');
      }
    } else {
      console.log('	ERROR: The New Arrivals or Shoes icon is not in the menu.');
    }
    done();
  }
}
