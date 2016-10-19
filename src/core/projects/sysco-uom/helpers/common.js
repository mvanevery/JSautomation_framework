/**
 * Created by mvanevery on 10/13/16.
 */
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
  refreshPage: (done) => {
    client.refresh(done);
  },
  goToChrome: (done) => {
    client.init().url(config.routes.baseUrl, done);
  },
  goToAppium: (done) => {
    client.init(done);
  },
  close(done) {
    if(client.isVisible(config.generic.close, done)) {
      client.click(config.generic.close);
    }
  },
  back(done) {
    if(client.isVisible(config.generic.backArrow, done)) {
      client.touch(config.generic.backArrow)
      .then(() => {
          client.release(config.generic.backArrow)
          .then(() => {
              console.log('This has been clicked')
            });
      });
    }
  },

// REPORTING
  getScreenshot: (done) => {
    client.saveScreenshot(`checkout${current}.png`, done);
  },

  end: (done) => {
    client.end(done);
  }
};
