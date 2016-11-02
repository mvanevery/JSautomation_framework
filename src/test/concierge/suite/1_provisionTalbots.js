/**
 *
 * appium (start server)
 * run test with appium flag for client
 * Launching Appium with command: '/Applications/Appium.app/Contents/Resources/node/bin/node' appium/build/lib/main.js --address "127.0.0.1" --debug-log-spacing --platform-version "9.3" --platform-name "iOS" --app "/Users/username/Documents/uom.ipa" --udid "6bbbd889caeed808c71677e5bd5f1c7f764eaddd" --default-device
 *
 * ios_webkit_debug_proxy -c dff8ad9bb716a56766d98b2232c3f541ba9bb796:27753 -d (start proxy)
 *
 * gulp --initiate:allTests --archon:concierge --test:allTests --client:chrome
 *
 **/

const common = require('../../../core/projects/concierge/helpers/common');

describe('Smoke Test: Provision Talbots', () => {
  before((done) => {
    common.goTo(done);
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Enter Provision Key', () => {
    it('Should populate the Talbots provision key', (done) => {
      common.enterProvisionTalbots(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

});
