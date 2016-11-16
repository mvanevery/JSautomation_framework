const clientType = require('../../../projects/config').client;
const client = require(`../../../../core/clients/${clientType}`).client;
const project = require('../../../projects/config').project;
const config = require(`../../../projects/${project}/config`);
const landingPage = require(`../../../projects/${project}/selectors/landingPage`);
const loginPage = require(`../../../projects/${project}/selectors/loginPage`);
const provisioning = require(`../../../projects/${project}/selectors/provisioning`);
const store = require(`../../../projects/${project}/selectors/store`);
const planner = require(`../../../projects/${project}/selectors/planner`);
const blackbook = require(`../../../projects/${project}/selectors/blackbook`);
const assert = require('chai').assert;
const expect = require('chai').expect;
const $ = require('chai-Jquery');

//import CUSTOMERNAME from '../../../../test/concierge/appSuite/Email/sendEmail_C1638';

module.exports = {

  // ================================================== GLOBALS ========================================================

  mobileView(done) {
    client.setViewportSize({
      height: 768,
      width: 1024
    }, true).then(done);
  },

  goTo(done){
    if (client.requestHandler.sessionID == null)
    {
      if (`${clientType}` == 'chrome')
      {
        client.init().url(config.routes.baseUrl, done);
      }
      else if (`${clientType}` == 'appium')
      {
        client.init(done);
      }
    }
    else
    {
      done();
    }
  },

  closeBrowser(done) {
    if (client.exists) {
      client.closeBrowser(done);
    }
  },

 pause: (done, pauseTime) => {
    client.pause(pauseTime, done);
  },

  getsomeText(done) {
    if (client.isVisible('//a[contains(@href, "/")]', done))
    client.getText(config.helpers.blackbookHeader)
    .then((text) => {
          console.log(text);
        });
  },

  //addAppointment_05012016(done) {
  //  client.click(config.helpers.cmb_type)
  //    .then(() => {
  //      client.setValue(config.helpers.cmb_type, 'Appointment');
  //    });
  //  client.pause(2000);
  //  client.click(config.helpers.txt_subject)
  //    .then(() => {
  //      client.setValue(config.helpers.txt_subject, 'Test Appointment for 05/01/2016.');
  //    });
  //  client.pause(2000);
  //  client.click(config.helpers.date_start)
  //    .then(() => {
  //      client.setValue(config.helpers.date_start, '05012016');
  //    });
  //  client.pause(2000);
  //  client.click(config.helpers.date_end)
  //    .then(() => {
  //      client.setValue(config.helpers.date_start, '05012016');
  //    });
  //  client.pause(2000);
  //  // client.click(config.helpers.cmb_status)
  //  // 	.then(function() {
  //  // 		client.selectByValue(config.helpers.cmb_status, 'Open')
  //  // 	});
  //  // client.pause(2000);
  //  client.click(config.helpers.cmb_priority)
  //    .then(() => {
  //      client.selectByValue(config.helpers.cmb_priority, 'High');
  //    });
  //  client.pause(2000);
  //  client.click(config.helpers.btn_save);
  //
  //  done();
  //},

  end(done) {
    client.end();
    done();
  }
};
