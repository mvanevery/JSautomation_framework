const clientType = require('../../../projects/config').client;
const client = require(`../../../../core/clients/${clientType}`).client;
const project = require('../../../projects/config').project;
const config = require(`../../../projects/${project}/config`);
const expect = require('chai').expect;
const assert = require('chai').assert;
const date = new Date();
const current = `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
const By = client.By

module.exports = {
  mobileView: (done) => {
    client.setViewportSize({
      height: 559,
      width: 375
    }, true).then(done);
  },

// MULTI-PAGE FUNCTIONS
  pause: (done, pauseTime) => {
    client.pause(pauseTime, done);
  },
  login: (done) => {

    if (client.isVisible('id="username"', done)) {
        //.then(() => {
         // client.getValue('id=username');
          client.keys('id="username"', config.login.username)
            .then(() => {
              client.keys('id="password"', config.login.password)
                .then(() => {
                  client.click('//button[@id="login-button"]');
              });
            });
         //});
    }
  },
  refreshPage: (done) => {
    client.refresh(done);
  },
  goToChrome: (done) => {
    client.init().url(config.routes.baseUrl, done);
  },
  goToAppium: (done) => {
    client.init(done);
  },

// REPORTING
  getScreenshot: (done) => {
    client.saveScreenshot(`checkout${current}.png`, done);
  },

  end: (done) => {
    client.end(done);
  }
};
