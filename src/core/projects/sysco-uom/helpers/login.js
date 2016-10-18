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
  login: (done) => {
    if (client.isVisible(config.login.userField, done)) {
        //.then(() => {
         // client.getValue('id=username');
          client.setValue(config.login.userField, config.login.username)
            .then(() => {
              client.setValue(config.login.passField, config.login.password)
                .then(() => {
                  client.click('//button[@id="login-button"]');
              });
            });
         //});
    }
  },
};
