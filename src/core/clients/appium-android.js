/**
 * Created by mvanevery on 7/15/2016.
 */


exports.client = require('webdriverio').remote({

  port: 4723,
  desiredCapabilities: {
    automationName: 'Appium',
    'appium-version': '1.6.3',
    platform: 'Android',
    platformName: 'Android',
    platformVersion: '',
    app: '/../../../android-debug.apk',
    appActivity: '',
    browserName: '',
    appPackage: '',
    deviceName: '',
    udid: '',
    setWebContentsDebuggingEnbabled: true,
    autoWebview: false
  }
});
