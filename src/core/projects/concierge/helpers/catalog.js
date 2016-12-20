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

  // catalog.navigateDrawerProducts(done, "productCategory", true);
  navigateDrawerProducts(done,selector,expected) {
     client.isVisible(catalog.helpers.productCategories[selector])
       .then(function (isVisible) {
         try {
           assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
         } catch (err) {
           done(err);
         }
         if (isVisible == true) {
           client.click(catalog.helpers.productCategories[selector])
         }
       })
     done();
  },

  // catalog.navigateProducts(done, "prdi40280", true);
//  navigateProducts(done,selector,expected) {
//     client.isVisible(catalog.helpers.products[selector])
//       .then(function (isVisible) {
//         try {
//           assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
//         } catch (err) {
//           done(err);
//         }
//         if (isVisible == true) {
//           client.click(catalog.helpers.products[selector])
//         }
//       })
//     done();
//  },

  // catalog.productListPage(done, "prdi40280", true);
  productListPage(done,selector,expected) {
     client.isVisible(catalog.helpers.products[selector])
       .then(function (isVisible) {
         try {
           assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
         } catch (err) {
           done(err);
         }
         if(isVisible == true) {
           client.click(catalog.helpers.products[selector]);
         }
       })
     done();
  },

  // catalog.productListPageImages(done, "prdi40280", true);
  productListPageImages(done,selector,expected) {
     client.isVisible(catalog.helpers.products[selector])
       .then(function (isVisible) {
         try {
           assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
         } catch (err) {
           done(err);
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

  //catalog.overlay(done, "catalogMenuTitle", true);
  overlay(done, selector, expected) {
      client.isVisible(landingPage.helpers[selector])
        .then(function(isVisible) {
          try {
            assert.equal(expected, isVisible, 'The expected value was not equal to the actual value.')
          }  catch (err) {
            done(err)
          }
          if(isVisible == true) {
            client.click(landingPage.helpers.closeOverlay);
          }
      })
      done()
  },

//  leftDrawerOverlayCheck(done, catalogExists) {
//    client.isExisting(catalog.helpers.productCategories.shoes)
//      .then((isExisting) => {
//        try {
//          assert.equal(catalogExists, isExisting, 'The Catalog Left Drawer is not closed.');
//        } catch (err) {
//          done(err);
//        }
//      });
//     done();
//  },

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
