/**
 * Created by mvanevery on 10/26/16.
 */
//exports.client = require('webdriverio').remote({
//  desiredCapabilities: {
//    browserName: 'chrome',
//    chromeOptions: {
//      mobileEmulation: {
//        deviceName: 'Apple iPad'
//      }
//    }
//  }
//});
exports.client = require('webdriverio').remote({
  desiredCapabilities: {
    browserName: 'chrome',
    chromeOptions: {
      mobileEmulation: {
        deviceName: 'Apple iPhone 6'
      }
    }
  }
});
