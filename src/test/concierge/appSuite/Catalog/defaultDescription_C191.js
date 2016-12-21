/**
 * Project:     Concierge
 * TestName     Catalog/defaultDescription_C191
 * TestSteps:   https://madmobile.testrail.net/index.php?/cases/view/191
 * Author:      John Harre
 * Date:        11/30/2016
 */

const common = require('../../../../core/projects/concierge/helpers/common');
const login = require('../../../../core/projects/concierge/helpers/loginPage');
const landing = require('../../../../core/projects/concierge/helpers/landingPage');
const catalog = require('../../../../core/projects/concierge/helpers/catalog');

describe('Smoke Test: C191 Default Description.', () => {
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

  describe('Click the product catalog icon in the left navigation bar.', () => {
    it('Product Catalog menu displays.', (done) => {
      landing.navigateIcons(done, "catalogMenuIcon", true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Click the product catalog icon in the left navigation bar.', () => {
  it('Product Catalog menu displays.', (done) => {
      landing.navigateTree(done, "catalogMenuTitle", true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Continue to go through branches of the product catalog menu tree until you click a leaf of the tree.', () => {
     it('The PLP of that leaf category displays.', (done) => {
       catalog.navigateDrawerProducts(done, "productCategory", true);
     });
   });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Continue to go through branches of the product catalog menu tree until you click a leaf of the tree.', () => {
     it('The PLP of that leaf category displays', (done) => {
       catalog.navigateDrawerProducts(done, "productSubCategory", true);
     });
   });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Click on one of the products on the PLP.', () => {
     it('User is navigated to the PDP of that product.', (done) => {
       catalog.productListPage(done, "product", true);
     });
   });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Click on one of the products on the PLP.', () => {
    it('The description of that product is by default ellipsified and shortened. A toggle is displayed that allows the user to expand.', (done) => {
      catalog.readMoreLink(done, "readMoreLink", true);
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
