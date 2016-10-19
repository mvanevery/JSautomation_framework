exports.client = require('webdriverio').remote({
  port: 4723,
  desiredCapabilities: {
    browserName: '',
    'appium-version': '1.5.3',
    platformName: 'iOS',
    bundleId: 'com.mmsyscouom.app',
    //bundleId: 'com.madmobiledev.ConciergeDev',
    platformVersion: '9.3.2',
    deviceName: 'MM Concierge-Silver',
    udid: 'dff8ad9bb716a56766d98b2232c3f541ba9bb796',
    autoWebview: true
  }
});
