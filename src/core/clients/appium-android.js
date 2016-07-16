/**
 * Created by mvanevery on 7/15/2016.
 */
//const appDir = require('c:/appDir/').appDir

exports.client = require('webdriverio').remote({

  port: 4723,
  desiredCapabilities: {
    app:'C:/appDir/UOMMM_QA-debug.apk',
    browserName: 'Chrome',
    //setWebContentsDebuggingEnabled: true,
    'appium-version': '1.3.7',
    platformName: 'Android',
    bundleId: 'com.syscouom.uommmqa.UOMMM_QA',
    platformVersion: '22',
    deviceName: 'QA 5.1.1 Device',
    udid: 'TA0980SWUW',
    autoWebview: true
  }
});
