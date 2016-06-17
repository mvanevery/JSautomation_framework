const client = require('../../core/client').client;
const project = require('../projects/config').project;
const config = require(`../projects/${project}/config`);

module.exports = {
  mobileView: (done) => {
    client.setViewportSize({
      height: 559,
      width: 375
    }, true).then(done);
  },

  goTo: (done) => {
    client.init().url(config.routes.legBaseUrl).then(() => {
      client.setViewportSize({
        height: 559,
        width: 375
      }, true).then(done);
    });
  },
  pause: (done) => {
    client.pause(15000, done);
  },

  refresh: (done) => {
    client.refresh(done);
  },

  openMenu: (done) => {
    if (client.isVisible('a#btnShop.btn.header-menu', done)) {
      client.click('a#btnShop.btn.header-menu > i.icon-menu-list');
    } else {
      client.click('a#btnShop.btn.header-menu > i.icon-menu-list');
    }
  }
};
