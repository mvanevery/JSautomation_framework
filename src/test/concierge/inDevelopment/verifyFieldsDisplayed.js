/**
 * Created by mvanevery on 11/29/16.
 * Project:     Concierge
 * Test Name:   verifyFieldsDisplayed
 * Test Steps:  https://madmobile.testrail.com/index.php?/cases/view/19
 * C19 - Specified Fields Displayed
 * Author:      Mike Van Every
 * Date:        11/29/2016
 */

const common = require('../../../../core/projects/concierge/helpers/common');
const login = require('../../../../core/projects/concierge/helpers/loginPage');
const blackbook = require('../../../../core/projects/concierge/helpers/blackbook');
const landing = require('../../../../core/projects/concierge/helpers/landingPage');


//export let CUSTOMERNAME;
//const setName = (name) => CUSTOMERNAME = name;

describe('Smoke Test: Search Customer', () => {
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

  describe('Click the Blackbook menu option', () => {
    it('Should open Blackbook sections', (done) => {
      landing.navBlackbook(done, "My Clients");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

})
