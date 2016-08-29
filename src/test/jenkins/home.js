/**
 * ios_webkit_debug_proxy -c fe2a06279d3ffa06d207d6b9c702eb84f235c5fc:27753 -d (start proxy)
 *
 * appium (start server)
 *
 * run test with appium flag for client
 */

const common = require('../../core/projects/jenkins/helpers/home');

describe('Smoke Test: Login as "ssales"', () => {
  before((done) => {
    common.openBrowser(done);
  });

  after((done) => {
    common.end(done);
  });
});
