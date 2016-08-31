exports.client = require('webdriverio').remote({
  port: 4723,
  desiredCapabilities: {
    browserName: '',
    'appium-version': '1.3',
    platformName: 'iOS',
    bundleId: 'BUNDLE_ID_GOES_HERE',
    platformVersion: '9.3',
    deviceName: "ENTER_DEVICE_NAME_HERE",
    udid: 'ENTER_UDID_HERE',
    autoWebview: true
  }
});
