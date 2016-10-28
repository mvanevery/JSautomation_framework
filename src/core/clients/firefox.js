/**
 * Created by afeldmeyer on 10/28/16.
 */
exports.client = require('webdriverio').remote({
  desiredCapabilities: {
    browserName: 'firefox'
    // chromeOptions: {
    //   mobileEmulation: {
    //     deviceName: 'Apple iPhone 6'
    //   }
    // }
  }
});
