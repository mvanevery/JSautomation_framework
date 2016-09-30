/**
 * Created by mvanevery on 7/15/2016.
 */


exports.client = require('webdriverio').remote({

  port: 4723,
  desiredCapabilities: {
    //url: 'https://madmobile-staging.payless.com',
   // app: '/Users/mvanevery/Documents/appDir/UOMMM_QA-debug.apk',
   // browserName: '',
   // 'appium-version': '1.5.3',
   // platformName: 'Android',
   // appPackage: 'com.syscouom.uommmqa',
   // platformVersion: '5.1.1',
   // deviceName: 'XT1526',
   //udid: 'TA0980SWUW',
   // autoWebview: false
    automationName: 'Appium',
    'appium-version': '1.5.3',
    platform: 'Android',
    platformName: 'Android',
    platformVersion: '6.0',
    app: '/Users/mvanevery/Documents/android-debug.apk',
    appActivity: 'com.madmobiledev.Concierge.MainActivity',
    browserName: '',
    appPackage: 'com.madmobiledev.Concierge',
    deviceName: 'QA 5.1.1 Device',
    udid: '0909931a',
    setWebContentsDebuggingEnbabled: true,
    autoWebview: false
  }
});
