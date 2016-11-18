/**
 * Created by mvanevery on 11/7/16.
 */
/**
 *  C1595 Talbots E2E - Search Customer(All Clients).
 */
const common = require('../../../../core/projects/concierge/helpers/common');
const login = require('../../../../core/projects/concierge/helpers/loginPage');
const blackbook = require('../../../../core/projects/concierge/helpers/blackbook');
const landing = require('../../../../core/projects/concierge/helpers/landingPage');
const catalog = require('../../../../core/projects/concierge/helpers/catalog');

//export let CUSTOMERNAME;
//const setName = (name) => CUSTOMERNAME = name;

describe('Smoke Test: Search Products', () => {
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
    it('Should open Catalog sections', (done) => {
      landing.navCatalog(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

    describe('Click the New Arrivals menu option', () => {
      it('Should open New Arrivals sections', (done) => {
        catalog.LeftDrawer(done, "New Arrivals");
      });
    });

    describe('Pausing', () => {
      it('Should pause the test for 5 seconds', (done) => {
        common.pause(done, 5000);
      });
    });

    describe('Click the Catalog menu option', () => {
      it('Should open Catalog sections', (done) => {
        landing.navCatalog(done);
      });
    });

    describe('Pausing', () => {
      it('Should pause the test for 5 seconds', (done) => {
        common.pause(done, 5000);
      });
    });

    describe('Click the Shoes menu option', () => {
      it('Should open Shoes sections', (done) => {
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

//    describe('Click the Shoes menu option', () => {
//      it('Should open Flats section', (done) => {
//        catalog.LeftDrawer(done, "Flats");
//      });
//    });
})
