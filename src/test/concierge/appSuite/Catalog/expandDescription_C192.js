/**
 * Project:     Concierge
 * TestName     Catalog/expandDescription_C192
 * TestSteps:   https://madmobile.testrail.net/index.php?/cases/view/192
 * Author:      John Harre
 * Date:        11/30/2016
 */

const common = require('../../../../core/projects/concierge/helpers/common');
const login = require('../../../../core/projects/concierge/helpers/loginPage');
const landing = require('../../../../core/projects/concierge/helpers/landingPage');
const catalog = require('../../../../core/projects/concierge/helpers/catalog');

describe('Smoke Test: C192 Default Description.', () => {
  before((done) => {
    common.goTo(done);
  });

  describe('Verify Login Screen.', () => {
    it('Should navigate to the login screen.', (done) => {
      login.verifyLoginScreen(done);
    });
  });

  describe('Login.', () => {
    it('Should login as "testauto".', (done) => {
      login.loginUser(done, true, 'testauto', 'qaUser@123');
    });
  });

  describe('Pausing.', () => {
    it('Should pause the test for 10 seconds.', (done) => {
      common.pause(done, 10000);
    });
  });

  describe('Click the product catalog icon in the left navigation bar.', () => {
    it('Product Catalog menu displays.', (done) => {
      landing.navigateIcons(done, "catalogMenuIcon", true);
    });
  });

  describe('Pausing.', () => {
    it('Should pause the test for 5 seconds.', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Click the product catalog icon in the left navigation bar.', () => {
  it('Product Catalog menu displays.', (done) => {
      landing.navigateTree(done, "catalogMenuTitle", true);
    });
  });

  describe('Pausing.', () => {
    it('Should pause the test for 5 seconds.', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Continue to go through branches of the product catalog menu tree until you click a leaf of the tree.', () => {
     it('The PLP of that leaf category displays.', (done) => {
       catalog.navigateDrawerProducts(done, "productCategory", true);
     });
   });

  describe('Pausing.', () => {
    it('Should pause the test for 5 seconds.', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Continue to go through branches of the product catalog menu tree until you click a leaf of the tree.', () => {
     it('The PLP of that leaf category displays.', (done) => {
       catalog.navigateDrawerProducts(done, "productSubCategory", true);
     });
   });

  describe('Pausing.', () => {
    it('Should pause the test for 5 seconds.', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Click on one of the products on the PLP.', () => {
     it('User is navigated to the PDP of that product.', (done) => {
       catalog.productListPage(done, "product", true);
     });
   });

  describe('Pausing.', () => {
    it('Should pause the test for 5 seconds.', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Click on one of the products on the PLP.', () => {
    it('User is navigated to the PDP of that product. The description of that product is by default ellipsified and shortened. A toggle is displayed that allows the user to expand.', (done) => {
      catalog.readMoreLink(done, "readMoreLink", true);
    });
  });

  describe('Pausing.', () => {
    it('Should pause the test for 5 seconds.', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Click the toggle to expand the description.', () => {
    it('Full product description displays.', (done) => {
      catalog.clickReadMoreLink(done, "readMoreLink", true);
    });
  });

  describe('Pausing.', () => {
    it('Should pause the test for 5 seconds.', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Click the toggle again.', () => {
    it('Description becomes ellipsified again.', (done) => {
      catalog.clickReadMoreLink(done, "readMoreLink", true);
    });
  });

  describe('Pausing.', () => {
    it('Should pause the test for 5 seconds.', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Logout.', () => {
    it('Should Logout from the current user.', (done) => {
      login.logoutUser(done);
    });
  });

  describe('Pausing.', () => {
    it('Should pause the test for 2 seconds.', (done) => {
      common.pause(done, 2000);
    });
  });

})
