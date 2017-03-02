/**
 * Created by mvanevery on 10/26/16.
 */
exports.client = require('webdriverio').remote({
  // logLevel: 'result',
  desiredCapabilities: {
    deviceName: 'Mad Mobile iPad Mini',
    browserName: 'chrome',
    chromeOptions: {
      mobileEmulation: {
        deviceName: 'Apple iPhone 6'
      }
    }
  }
});
