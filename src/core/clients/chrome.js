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
