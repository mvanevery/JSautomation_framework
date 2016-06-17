const config = require('./browser/config');
const phantomjs = require('phantomjs-prebuilt');
const binPath = phantomjs.path;

exports.client = require('webdriverio').remote({
  desiredCapabilities: {
    browserName: 'phantomjs',
    page: {
      settings: {
        userAgent: config.userAgent.mobile

      }
    },
    'phantomjs.binary.path': binPath
  }
});
