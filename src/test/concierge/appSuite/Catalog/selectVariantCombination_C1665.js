/**
 * Project:     Concierge
 * TestName     Catalog/selectVariantCombination_C1665
 * TestSteps:   https://madmobile.testrail.net/index.php?/cases/view/1665
 * Author:      John Harre
 * Date:        12/1/2016
 */

const common = require('../../../../core/projects/concierge/helpers/common');
const login = require('../../../../core/projects/concierge/helpers/loginPage');
const landing = require('../../../../core/projects/concierge/helpers/landingPage');
const catalog = require('../../../../core/projects/concierge/helpers/catalog');

describe('Smoke Test: C1665 Select Variant Combination', () => {
  before((done) => {
     common.goTo(done);
   });

   describe('Verify Login Screen', () => {
     it('Should navigate to the login screen', (done) => {
       login.verifyLoginScreen(done);
     });
   });

   describe('Login', () => {
     it('Should login as "testauto"', (done) => {
       login.loginUser(done, 'testauto', 'qaUser@123');
     });
   });

   describe('Pausing', () => {
     it('Should pause the test for 10 seconds', (done) => {
       common.pause(done, 10000);
     });
   });

   describe('Click the Catalog menu option', () => {
     it('Should open Catalog section', (done) => {
       landing.navCatalog(done, "Catalog");
     });
   });

   describe('Pausing', () => {
     it('Should pause the test for 5 seconds', (done) => {
       common.pause(done, 5000);
     });
   });

   describe('Click the Shoes menu option', () => {
     it('Should open Shoes section', (done) => {
       catalog.LeftDrawer(done, "Shoes");
     });
   });

   describe('Pausing', () => {
     it('Should pause the test for 5 seconds', (done) => {
       common.pause(done, 5000);
     });
   });

   describe('Click the Shoes -> Flats menu option', () => {
     it('Should open Shoes -> Flats section', (done) => {
       catalog.LeftDrawer(done, "Flats");
     });
   });

   describe('Pausing', () => {
     it('Should pause the test for 5 seconds', (done) => {
       common.pause(done, 5000);
     });
   });

   describe('Click on a Shoes -> Flats product.', () => {
     it('Should open Flats product details page.', (done) => {
       catalog.openProductDetailsPage(done);
     });
   });

   describe('Pausing', () => {
     it('Should pause the test for 5 seconds', (done) => {
       common.pause(done, 5000);
     });
   });

   describe('See a Shoes -> Flats product variants.', () => {
     it('Should see Shoes -> Flats product variants.', (done) => {
       catalog.productDetailsPageVariantsShown(done, true);
     });
   });

   describe('Pausing', () => {
     it('Should pause the test for 5 seconds', (done) => {
       common.pause(done, 5000);
     });
   });

    describe('See a Shoes -> Flats product default variant.', () => {
      it('Should see Shoes -> Flats product default variant.', (done) => {
        catalog.productDetailsPageDefaultVariantShown(done, "-1");
      });
    });

    describe('Pausing', () => {
      it('Should pause the test for 5 seconds', (done) => {
        common.pause(done, 5000);
      });
    });

  describe('Logout', () => {
    it('Should logout the current user', (done) => {
      login.logoutUser(done, true);
    });
  });

   describe('Pausing', () => {
     it('Should pause the test for 2 seconds', (done) => {
       common.pause(done, 2000);
     });
   });

})
