/**
 * Project:     Concierge
 * TestName     Catalog/openingAndClosingFunctionality_C1249
 * TestSteps:   https://madmobile.testrail.com/index.php?/cases/view/1249
 * Author:      John Harre
 * Date:        11/23/2016
 */

const common = require('../../../../core/projects/concierge/helpers/common');
const login = require('../../../../core/projects/concierge/helpers/loginPage');
const blackbook = require('../../../../core/projects/concierge/helpers/blackbook');
const landing = require('../../../../core/projects/concierge/helpers/landingPage');
const catalog = require('../../../../core/projects/concierge/helpers/catalog');

describe('Smoke Test: C1249 Opening and Closing Functionality', () => {
  before((done) => {
    common.goTo(done);
  });

  describe('Verify Login Screen', () => {
    it('Should navigate to the login screen', (done) => {
      login.verifyLoginScreen(done);
    });
  });

  describe('Login', () => {
    it('Should login as "qauser"', (done) => {
      login.loginUser(done, 'qaUser', 'qaUser@123');
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

    describe('Click the New Arrivals menu option', () => {
      it('Should open New Arrivals section', (done) => {
        catalog.LeftDrawer(done, "New Arrivals");
      });
    });

    describe('Pausing', () => {
      it('Should pause the test for 5 seconds', (done) => {
        common.pause(done, 5000);
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

    describe('Click the Flats menu option', () => {
      it('Should open Flats section', (done) => {
        catalog.LeftDrawer(done, "Flats");
      });
    });

    describe('Pausing', () => {
      it('Should pause the test for 5 seconds', (done) => {
        common.pause(done, 5000);
      });
    });

    describe('Click on a Flats product.', () => {
      it('Should open Flats product details page.', (done) => {
        catalog.openProductDetailsPage(done);
      });
    });

    describe('Pausing', () => {
      it('Should pause the test for 5 seconds', (done) => {
        common.pause(done, 5000);
      });
    });

    describe('See a Flats product details.', () => {
      it('Should see Flats product details page.', (done) => {
        catalog.productDetailsPage(done, "Edison Flats-Roses");
      });
    });

    describe('Pausing', () => {
      it('Should pause the test for 5 seconds', (done) => {
        common.pause(done, 5000);
      });
    });

    describe('Logout', () => {
      it('Should Logout from the current user', (done) => {
        landing.logoutUser(done);
      });
    });

    describe('Pausing', () => {
      it('Should pause the test for 2 seconds', (done) => {
        common.pause(done, 2000);
      });
    });

})
