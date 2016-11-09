/**
 * Project:     Concierge
 * Test Name:   deleteEmails_C1632
 * Test Steps:  https://madmobile.testrail.net/index.php?/cases/view/1632
 * Author:      John Harre
 * Date:        11/9/2016
 *
 * From command line type to load in localhost:
 *      gulp initiate-<Test Name> --archon:concierge --test:<Test Name> --client:chrome
 *
 * From command line type to load in app:
 *      gulp initiate-<Test Name> --archon:concierge --test:<Test Name>
 */

const common = require('../../../../core/projects/concierge/helpers/common');

describe('Smoke Test: Delete Emails C1632', () => {
  before((done) => {
    common.goTo(done);
  });

  //delete emails

  //logout
  describe('Logout', () => {
    it('Should Logout from the current user', (done) => {
      common.logoutUser(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });
})
