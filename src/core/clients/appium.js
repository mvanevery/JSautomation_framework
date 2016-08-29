exports.client = require('webdriverio').remote({
  port: 4723,
  desiredCapabilities: {
    browserName: '',
    'appium-version': '1.3',
    platformName: 'iOS',
    bundleId: 'com.derickwarshaw.jenkins',
    platformVersion: '9.3',
    deviceName: "Derick's iPhone 6 Plus",
    udid: 'fe2a06279d3ffa06d207d6b9c702eb84f235c5fc',
    autoWebview: true
  }
});
