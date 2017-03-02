exports.client = require('webdriverio').remote({
  port: 4723,
  desiredCapabilities: {
    browserName: '',
    'appium-version': '1.6.3',
    platformName: 'iOS',
    bundleId: 'com.mmsyscouom.app',
//    deviceName: 'Mad Mobile Mini iPad',
//    udid: '6bbbd889caeed808c71677e5bd5f1c7f764eaddd',
    deviceName: 'MM Concierge-Orange',
    udid: '4d6a4dafb690e7175d41fb0329a6d9f7fef8215f',
    automationName: 'XCUITest',
    autoWebview: true,
    // realDeviceLogger: '/Users/jharre/.nvm/versions/node/v6.6.0/lib/node_modules/deviceconsole/deviceconsole'
    platformVersion: '9.3.2'
  }
});

