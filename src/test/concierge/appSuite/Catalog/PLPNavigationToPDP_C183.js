/**
 * Project:     Concierge
 * TestName     Catalog/PLPNavigationToPDP_C183
 * TestSteps:   https://madmobile.testrail.net/index.php?/cases/view/183
 * Author:      John Harre
 * Date:        11/30/2016
 */

const common = require('../../../../core/projects/concierge/helpers/common');
const login = require('../../../../core/projects/concierge/helpers/loginPage');
const landing = require('../../../../core/projects/concierge/helpers/landingPage');
const catalog = require('../../../../core/projects/concierge/helpers/catalog');

describe('Smoke Test: C183 PLP Navigation to PDP.', () => {
  before((done) => {
     common.goTo(done);
   });

   describe('Verify Login Screen', () => {
     it('Should navigate to the login screen', (done) => {
       login.verifyLoginScreen(done, true);
     });
   });

  describe('Login', () => {
    it('Should login as "testauto"', (done) => {
      login.loginUser(done, true, 'testauto', 'qaUser@123');
    });
  });

   describe('Pausing', () => {
     it('Should pause the test for 10 seconds', (done) => {
       common.pause(done, 10000);
     });
   });

 describe('Click on the product catalog menu icon in the left navigation bar.', () => {
    it('Product catalog menu drawer slides out.', (done) => {
      landing.navigateIcons(done, "catalogMenuIcon", true);
    });
  });

   describe('Pausing', () => {
     it('Should pause the test for 5 seconds', (done) => {
       common.pause(done, 5000);
     });
   });

  describe('Select branches of the Product catalog menu until you come to the leaf of the tree and then select the leaf.', () => {
     it('A grid of products displays.', (done) => {
       catalog.navigateDrawerProducts(done, "productCategory", true);
     });
   });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Select branches of the Product catalog menu until you come to the leaf of the tree.', () => {
     it('Select the leaf.', (done) => {
       catalog.navigateDrawerProducts(done, "productSubCategory", true);
     });
   });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

   describe('Select branches of the Product catalog menu until you come to the leaf of the tree and then select the leaf.', () => {
     it('A grid of products displays. Each product has an image and that image can be seen.', (done) => {
       catalog.productListPageImages(done, "imgprdi40280", true);
     });
   });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

   describe('Click on one of the products listed in the grid.', () => {
     it('User is navigated to the PDP of the item selected.', (done) => {
       catalog.productListPage(done, "prdi40280", true);
     });
   });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

//   describe('Select branches of the Product catalog menu until you come to the leaf of the tree and then select the leaf.', () => {
//     it('Each product has an image and that image can be seen.', (done) => {
//       catalog.navigateProducts(done, "prdi40280", true);
//     });
//   });
//
//  describe('Pausing', () => {
//    it('Should pause the test for 5 seconds', (done) => {
//      common.pause(done, 5000);
//    });
//  });



   //A grid of products displays. Each product has an image and that image can be seen.

//     describe('Click the New Arrivals menu option', () => {
//       it('Should open New Arrivals section', (done) => {
//         catalog.LeftDrawer(done, "New Arrivals");
//       });
//     });
//
//     describe('Pausing', () => {
//       it('Should pause the test for 5 seconds', (done) => {
//         common.pause(done, 5000);
//       });
//     });
//
//     describe('Click the Catalog menu option', () => {
//       it('Should open Catalog section', (done) => {
//         landing.navCatalog(done, "Catalog");
//       });
//     });
//
//     describe('Pausing', () => {
//       it('Should pause the test for 5 seconds', (done) => {
//         common.pause(done, 5000);
//       });
//     });
//
//     describe('Click the Shoes menu option', () => {
//       it('Should open Shoes section', (done) => {
//         catalog.LeftDrawer(done, "Shoes");
//       });
//     });
//
//     describe('Pausing', () => {
//       it('Should pause the test for 5 seconds', (done) => {
//         common.pause(done, 5000);
//       });
//     });
//
//     describe('Click the Shoes -> Flats menu option', () => {
//       it('Should open Shoes -> Flats section', (done) => {
//         catalog.LeftDrawer(done, "Flats");
//       });
//     });
//
//     describe('Pausing', () => {
//       it('Should pause the test for 5 seconds', (done) => {
//         common.pause(done, 5000);
//       });
//     });
//
//     describe('Click on a Shoes -> Flats product.', () => {
//       it('Should open Flats product details page.', (done) => {
//         catalog.openProductDetailsPage(done);
//       });
//     });
//
//     describe('Pausing', () => {
//       it('Should pause the test for 5 seconds', (done) => {
//         common.pause(done, 5000);
//       });
//     });
//
//     describe('See a Shoes -> Flats product details.', () => {
//       it('Should see Shoes -> Flats product details page.', (done) => {
//         catalog.productDetailsPage(done, "Edison Flats-Roses");
//       });
//     });
//
//     describe('Pausing', () => {
//       it('Should pause the test for 5 seconds', (done) => {
//         common.pause(done, 5000);
//       });
//     });
//
//  describe('Logout', () => {
//    it('Should logout the current user', (done) => {
//      login.logoutUser(done, true, true);
//    });
//  });
//
//  describe('Test Completed: Cleaning up', () => {
//    it('Should pause the test for 10 seconds', (done) => {
//      common.pause(done, 10000);
//    });
//  });

})