/**
 * Created by mvanevery on 10/26/16.
 */
exports.client = require('webdriverio').remote({
  desiredCapabilities: {
    browserName:'firefox'
    //chromeOptions: {
    //  mobileEmulation: {
    //    deviceName:
    //  }
    //}
  }
});
