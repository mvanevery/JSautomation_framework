const phantomjs = require('phantomjs-prebuilt');
const binPath = phantomjs.path;

exports.client = require('webdriverio').remote({
  desiredCapabilities: {
    browserName: 'phantomjs',
    'phantomjs.binary.path': binPath,
    chromeOptions: {
      mobileEmulation: {
        deviceName: 'Apple iPhone 6'
      }
    }
  }
});
