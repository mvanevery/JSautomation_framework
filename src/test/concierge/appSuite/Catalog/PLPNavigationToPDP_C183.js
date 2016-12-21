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
       catalog.productListPageImages(done, "imgProduct", true);
     });
   });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });


   describe('Click on one of the products listed in the grid.', () => {
     it('User is navigated to the PDP of the item selected.', (done) => {
       catalog.productListPage(done, "product", true);
     });
   });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Logout', () => {
    it('Should logout the current user', (done) => {
      login.logoutUser(done, true, true);
    });
  });

  describe('Test Completed: Cleaning up', () => {
    it('Should pause the test for 10 seconds', (done) => {
      common.pause(done, 10000);
    });
  });

})
