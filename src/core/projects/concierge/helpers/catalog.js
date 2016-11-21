/**
 * Project:     Concierge
 * TestName     Catalog/selectALeafOfTheMenuTree_C1248
 * TestSteps:   https://madmobile.testrail.com/index.php?/cases/view/1248
 * Author:      John Harre
 * Date:        11/21/2016
 */

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
    if (client.isVisible(catalog.helpers.productCategories.newArrivals, done)) {
      if (catalogLabel == 'New Arrivals')
      {
        client.click(catalog.helpers.productCategories.newArrivals)
          .then (() => {
            client.getText(catalog.helpers.productCategories.newArrivals)
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
        client.click(catalog.helpers.productCategories.shoes)
      }
      else if (catalogLabel == 'Flats')
      {
        client.click(catalog.helpers.productCategories.flats)
          .then (() => {
            client.getText(catalog.helpers.productCategories.flats)
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
  },
  openProductDetailsPage(done) {
    if(client.isVisible(catalog.helpers.products.edisonFlatsRoses, done)) {
      client.click(catalog.helpers.products.edisonFlatsRoses)
    }
  },
  productDetailsPage(done,productLabel) {
    client.getText(catalog.helpers.products.edisonFlatsRoses)
      .then((text) => {
        try {
          assert.equal(productLabel, text, 'The Products Detail page is not displayed');
          done();
        } catch (err) {
          done(err);
        }
      });
  }
}
