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

  openProductDetailsPage(done,expected,results) {
     client.isVisible(catalog.helpers.products[results])
       .then(function (isVisible) {
         try {
           assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
         } catch (err) {
           done(err);
         }
         if (isVisible == true) {
           client.click(catalog.helpers.products[results])
         }
       })
     done();
  },

  productDetailsPage(done,expected,results) {
     client.isVisible(catalog.helpers.products[results])
       .then(function (isVisible) {
         try {
           assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
         } catch (err) {
           done(err);
         }
       })
     done();
  },

  catalogBackBtn(done) {
    if(client.isVisible(catalog.helpers.catalogBackBtn, done)) {
      client.click(catalog.helpers.catalogBackBtn)
    }
  },

  leftDrawerOverlay(done) {
    if (client.isVisible(catalog.helpers.productCategories.shoes, done)) {
     client.click(landingPage.helpers.leftDrawerOverlay);
    }
  },

  leftDrawerOverlayCheck(done, catalogExists) {
    client.isExisting(catalog.helpers.productCategories.shoes)
      .then((isExisting) => {
        try {
          assert.equal(catalogExists, isExisting, 'The Catalog Left Drawer is not closed.');
        } catch (err) {
          done(err);
        }
      });
     done();
  },

  readMoreLink(done) {
     if(client.isVisible(catalog.helpers.products.readMoreLink, done)) {
        client.click(catalog.helpers.products.readMoreLink)
     }
  },

  readLessLink(done, lessLink) {
   client.isExisting(catalog.helpers.products.readLessLink)
     .then((isExisting) => {
       try {
         assert.equal(lessLink, isExisting, 'The PDP read less link did not appear.');
       } catch (err) {
         done(err);
       }
     });
    done();
  },

  PDPVariantsShown(done, expected, results) {
    client.isVisible(catalog.helpers.variants[results])
      .then(function(isVisible){
          try {
            assert.equal(expected, isVisible, 'The expected value was not equal to the actual value');
          } catch (err) {
            done(err);
          }
        });
    done();
  },

  PDPDefaultVariantShown(done, expected) {
      client.getHTML(catalog.helpers.variants.defaultVariant).then(function(html) {
      var idx = html.toLowerCase().indexOf(catalog.helpers.variants.variantSelectedValue);
        try {
          assert.notEqual(expected, idx, 'The expected value was not equal to the actual value');
        } catch (err) {
          done(err);
        }
      });
    done();
  }
}
