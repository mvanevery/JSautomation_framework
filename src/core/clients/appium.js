exports.client = require('webdriverio').remote({
  port: 4723,
  desiredCapabilities: {
    browserName: '',
    'appium-version': '1.5.3',
    platformName: 'iOS',
    //bundleId: 'com.mmsyscouom.app',
    bundleId: 'com.madmobiledev.ConciergeDev',
    platformVersion: '9.3.1',
    deviceName: 'Mad Mobile Mini iPad',
    udid: '6bbbd889caeed808c71677e5bd5f1c7f764eaddd',
    autoWebview: true
  }
});
