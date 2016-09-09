const clientType = require('../../../projects/config').client;
const client = require(`../../../../core/clients/${clientType}`).client;
const project = require('../../../projects/config').project;
const config = require(`../../../projects/${project}/config`);
const landingPage = require(`../../../projects/${project}/selectors/landingPage`);
const loginPage = require(`../../../projects/${project}/selectors/loginPage`);
const provisioning = require(`../../../projects/${project}/selectors/provisioning`);

module.exports = {

  mobileView(done) {
    client.setViewportSize({
      height: 768,
      width: 1024
    }, true).then(done);
  },
  goTo: (done) => {
    client.init().url(config.routes.baseUrl, done);
  },

  openBrowser(done) {
    client.init(done);
  },

  closeBrowser(done) {
    if (client.exists) {
      client.closeBrowser(done);
    }
  },

  pause: (pauseTime, done) => {
    client.pause(done, pauseTime);
  },

  getsomeText(done) {
    if (client.isVisible('//a[contains(@href, "/")]', done))
    client.getText(config.helpers.blackbookHeader)
    .then((text) => {
          console.log(text);
        });
  },

  enterProvisionBurberry(done) {
    if (client.isVisible(config.helpers.keyField, done)) {
      client.keys(config.helpers.keyField, config.helpers.burberry_provkey)
        .then(() => {
          client.click(config.helpers.submitKey);
        });
    } else {
      console.log('Already provisioned');
    }
  },

  enterProvisionTalbots(done) {
    if (client.isVisible(provisioning.helpers.keyField, done)) {
      client.setValue(provisioning.helpers.keyField, provisioning.helpers.talbots_provkey)
          .then(() => {
            client.click(provisioning.helpers.submitButton);
          });
    } else {
        console.log('Already provisioned');
      }
  },

  deprovision(done) {
     if (client.isVisible(loginPage.helpers.deprovision, done)) {
     	client.click(loginPage.helpers.deprovision);
    // } else {
    // 	console.log('	ERROR: Deprovision link is unavailable.');
     }
  },

  //verifyProvisionScreen(done) {
  //  // expect(config.helpers.txt_title_blackbook).to.exist;
  //  // chai.expect('return config.helpers.img_nav_logo').exec.to.exist;
  //  // if (client.isVisible(config.helpers.fld_provision)) {
  //  // } else {
  //  // 	console.log('	ERROR: Concierge failed to reach the Provision screen.');
  //  // }
  //  done();
  //},

  verifyLoginScreen(done) {
    if (client.isVisible(loginPage.helpers.login_logo, done)) {
      console.log('Welcome to the Login Page');
    } else {
      console.log('ERROR: The provision failed to reach the Login screen.');
    }
  },

  loginSsales(done) {
    if (client.isVisible(loginPage.helpers.login_logo, done)) {
      client.setValue(loginPage.helpers.usernameField, loginPage.helpers.username)
        .then(() => {
          client.setValue(loginPage.helpers.passwordField, loginPage.helpers.password)
            .then(() => {
              client.click(loginPage.helpers.signIn);
            });
        });
    } else {
      console.log('	ERROR: Login page is not available.');
    }
  },

  verifyConciergeScreen(done) {
    client.waitForVisible(config.helpers.img_nav_logo, 5000, done);
    if (client.isVisible(config.helpers.img_nav_logo)) {
      console.log('	PASS: The Concierge screen is visible.');
    } else {
      console.log('	ERROR: The user failed to reach the Concierge screen.');
    }
    done();
  },

  navDashboard(done) {
    client.waitForVisible(config.helpers.img_nav_dashboard, 5000);
    if (client.isVisible(config.helpers.img_nav_dashboard)) {
      client.click(config.helpers.img_nav_dashboard);
    } else {
      console.log('	ERROR: The Dashboard icon is not in the menu.');
    }
  },

  navPlanner(done) {
    client.waitForVisible(config.helpers.img_nav_planner, 5000);
    if (client.isVisible(config.helpers.img_nav_planner)) {
      client.click(config.helpers.img_nav_planner);
    } else {
      console.log('	ERROR: The Planner icon is not in the menu.');
    }
  },

  navBlackbook(done) {
   if (client.isVisible(config.helpers.blackbook_icon, done)) {
      client.click(config.helpers.blackbook_icon);
    if(client.isVisible(landingPage.helpers.homeIcon, done)) {
      client.getText()
    }
    }
  },

  searchCustomer(done) {
    client.waitForVisible(config.helpers.fld_lastName, 5000);
    if (client.isVisible(config.helpers.fld_lastName, done)) {
      client.click(config.helpers.fld_lastName)
        .then(() => {
          client.setValue(config.helpers.fld_lastName, 'McClellan');
        });
    } else {
      console.log('	ERROR: Last Name field is not available.');
    }
  },

  selectCustomer(done) {
    client.waitForVisible(config.helpers.txt_Customer_Ryan, 5000);
    if (client.isVisible(config.helpers.txt_Customer_Ryan)) {
      client.click(config.helpers.txt_Customer_Ryan);
    } else {
      console.log('	ERROR: Missing the customer record for Ryan McClellan.');
    }
    client.waitForVisible(config.helpers.txt_Customer_Header, 5000);
    if (client.isVisible(config.helpers.txt_Customer_Header)) {
      console.log('	PASS: The user has reached the Customer Profile screen.');
    } else {
      console.log('	ERROR: The Customer Profile screen is unreachable.');
    }
    done();
  },


  addAppointmentForm_fromPlanner(done) {
    client.waitForVisible(config.helpers.img_nav_planner, 5000);
    if (client.isVisible(config.helpers.btn_create)) {
      client.click(config.helpers.btn_create);
    } else {
      console.log('	ERROR: Missing the create button.');
    }
    client.waitForVisible(config.helpers.cmb_type, 5000);
    if (client.isVisible(config.helpers.cmb_type)) {
      console.log('	PASS: The user has reached the Appointment/Task form.');
    } else {
      console.log('	ERROR: The Appointment/Task form is unreachable.');
    }
    done();
  },

  addAppointment_05012016(done) {
    client.click(config.helpers.cmb_type)
      .then(() => {
        client.setValue(config.helpers.cmb_type, 'Appointment');
      });
    client.pause(2000);
    client.click(config.helpers.txt_subject)
      .then(() => {
        client.setValue(config.helpers.txt_subject, 'Test Appointment for 05/01/2016.');
      });
    client.pause(2000);
    client.click(config.helpers.date_start)
      .then(() => {
        client.setValue(config.helpers.date_start, '05012016');
      });
    client.pause(2000);
    client.click(config.helpers.date_end)
      .then(() => {
        client.setValue(config.helpers.date_start, '05012016');
      });
    client.pause(2000);
    // client.click(config.helpers.cmb_status)
    // 	.then(function() {
    // 		client.selectByValue(config.helpers.cmb_status, 'Open')
    // 	});
    // client.pause(2000);
    client.click(config.helpers.cmb_priority)
      .then(() => {
        client.selectByValue(config.helpers.cmb_priority, 'High');
      });
    client.pause(2000);
    client.click(config.helpers.btn_save);

    done();
  },

  end(done) {
    client.end();
    done();
  }
};
