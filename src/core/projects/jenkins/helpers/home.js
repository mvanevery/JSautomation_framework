const clientType = require('../../../projects/config').client;
const client = require(`../../../../core/clients/${clientType}`).client;
const project = require('../../../projects/config').project;
const config = require(`../../../projects/${project}/config`);

module.exports = {
  
  openBrowser(done) {
    client.init(done);
  },

  closeBrowser(done) {
    if (client.exists) {
      client.closeBrowser(done);
    }
  },

  pause(done) {
    client.pause(5000, done);
  },

  end(done) {
    client.end();
    done();
  }
};
