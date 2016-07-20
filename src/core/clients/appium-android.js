/**
 * Created by mvanevery on 7/15/2016.
 */


exports.client = require('webdriverio').remote({

  port: 4723,
  desiredCapabilities: {
    url: 'https://madmobile-staging.payless.com',
    app: 'C:/appDir/chrome.apk',
    browserName: 'Chrome',
    'appium-version': '1.5.3',
    platformName: 'Android',
    appPackage: 'com.android.chrome',
    platformVersion: '5.1.1',
    deviceName: 'XT1526',
   udid: 'TA0980SWUW',
    autoWebview: false
  }
});
