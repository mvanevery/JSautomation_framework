const client = require('../../client').client;
const project = require('../../projects/config').project;
const config = require(`../../projects/${project}/config`);

module.exports = {

  mobileView: function (done) {
    client.setViewportSize({
      height: 768,
      width: 1024
    }, true).then(done);
  },

  openBrowser: function (done) {
    client.init().url(config.routes.baseUrl).then(function () {
      client.setViewportSize({
        height: 768,
        width: 1024
      }, true).then(done);
    });
  },

  closeBrowser: function (done) {
    if (client.exists) {
      client.closeBrowser(done);
    }
  },

  pause: function (done) {
    client.pause(5000, done);
  },

  enterProvisionBurberry: function (done) {
    if (client.isVisible(config.helpers.fld_provision, done)) {
      client.setValue(config.helpers.fld_provision, config.helpers.txt_provisionKey_burberry)
        .then(function() {
          client.click(config.helpers.btn_send);
        })
    } else {
      console.log('Provision Key field is not available.');
    }
  },

  enterProvisionTalbots: function (done) {
    if (client.isVisible(config.helpers.fld_provision, done)) {
      client.setValue(config.helpers.fld_provision, config.helpers.txt_provisionKey_talbots)
        .then(function() {
          client.click(config.helpers.btn_send);
        })
    } else {
      console.log('ERROR: Provision Key field is not available.');
    }
  },

  deprovision: function (done) {
    client.url("localhost:3000/provision");
    // client.waitForVisible(config.helpers.lnk_deprovision, 5000);
    // if (client.isVisible(config.helpers.lnk_deprovision)) {
    // 	client.click(config.helpers.lnk_deprovision);
    // } else {
    // 	console.log('	ERROR: Deprovision link is unavailable.');
    // }
    done();
  },

  verifyProvisionScreen: function (done) {
    // expect(config.helpers.txt_title_blackbook).to.exist;
    // chai.expect('return config.helpers.img_nav_logo').exec.to.exist;
    // if (client.isVisible(config.helpers.fld_provision)) {
    // } else {
    // 	console.log('	ERROR: Concierge failed to reach the Provision screen.');
    // }
    done();
  },

  verifyLoginScreen: function (done) {
    if (client.isVisible(config.helpers.img_logo, done)) {
    } else {
      console.log('ERROR: The provision failed to reach the Login screen.');
    }
  },

  loginSsales: function (done) {
    if (client.isVisible('basic-form-input-email', done)) {
      client.setValue(config.helpers.fld_user, config.helpers.txt_ssales_user)
        .then(function() {
          client.setValue(config.helpers.fld_password, config.helpers.txt_ssales_pass)
            .then(function () {
              client.click(config.helpers.btn_signIn);
            })
        })
    } else {
      console.log('	ERROR: Login page is not available.');
    }
  },

  verifyConciergeScreen: function (done) {
    client.waitForVisible(config.helpers.img_nav_logo, 5000, done);
    if (client.isVisible(config.helpers.img_nav_logo)) {
      console.log('	PASS: The Concierge screen is visible.')
    } else {
      console.log('	ERROR: The user failed to reach the Concierge screen.');
    }
    done();
  },

  navDashboard: function (done) {
    client.waitForVisible(config.helpers.img_nav_dashboard, 5000);
    if (client.isVisible(config.helpers.img_nav_dashboard)) {
      client.click(config.helpers.img_nav_dashboard);
    } else {
      console.log('	ERROR: The Dashboard icon is not in the menu.');
    }
    client.waitForVisible(config.helpers.widget_appointments, 5000);
    if (client.isVisible(config.helpers.widget_appointments)) {
      console.log('	PASS: The user has reached the Dashboard screen.');
    } else {
      console.log('	ERROR: The Dashboard screen is unreachable.');
    }
    done();
  },

  navPlanner: function (done) {
    client.waitForVisible(config.helpers.img_nav_planner, 5000);
    if (client.isVisible(config.helpers.img_nav_planner)) {
      client.click(config.helpers.img_nav_planner);
    } else {
      console.log('	ERROR: The Planner icon is not in the menu.');
    }
    client.waitForVisible(config.helpers.txt_title_planner, 5000);
    if (client.isVisible(config.helpers.txt_title_planner)) {
      console.log('	PASS: The user has reached the Planner screen.');
    } else {
      console.log('	ERROR: The Planner screen is unreachable.');
    }
    done();
  },

  navBlackbook: function (done) {
    client.waitForVisible(config.helpers.img_nav_blackbook, 5000);
    if (client.isVisible(config.helpers.img_nav_blackbook)) {
      client.click(config.helpers.img_nav_blackbook);
    } else {
      console.log('	ERROR: The Blackbook icon is not in the menu.');
    }
    client.waitForVisible(config.helpers.img_myCustomers, 5000);
    if (client.isVisible(config.helpers.img_myCustomers)) {
      console.log('	PASS: The user has reached the Blackbook screen.');
    } else {
      console.log('	ERROR: The Blackbook screen is unreachable.');
    }
    done();
  },

  searchCustomer: function (done) {
    client.waitForVisible(config.helpers.fld_lastName, 5000);
    if (client.isVisible(config.helpers.fld_lastName, done)) {
      client.click(config.helpers.fld_lastName)
        .then(function() {
          client.setValue(config.helpers.fld_lastName, 'McClellan')
        });
    } else {
      console.log('	ERROR: Last Name field is not available.');
    }
  },

  selectCustomer: function (done) {
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


  addAppointmentForm_fromPlanner: function (done) {
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

  addAppointment_05012016: function (done) {
    client.click(config.helpers.cmb_type)
      .then(function() {
        client.setValue(config.helpers.cmb_type, 'Appointment')
      });
    client.pause(2000);
    client.click(config.helpers.txt_subject)
      .then(function() {
        client.setValue(config.helpers.txt_subject, 'Test Appointment for 05/01/2016.')
      });
    client.pause(2000);
    client.click(config.helpers.date_start)
      .then(function() {
        client.setValue(config.helpers.date_start, '05012016')
      });
    client.pause(2000);
    client.click(config.helpers.date_end)
      .then(function() {
        client.setValue(config.helpers.date_start, '05012016')
      });
    client.pause(2000);
    // client.click(config.helpers.cmb_status)
    // 	.then(function() {
    // 		client.selectByValue(config.helpers.cmb_status, 'Open')
    // 	});
    // client.pause(2000);
    client.click(config.helpers.cmb_priority)
      .then(function() {
        client.selectByValue(config.helpers.cmb_priority, 'High')
      });
    client.pause(2000);
    client.click(config.helpers.btn_save);

    done();
  },

  end: function (done) {
    client.end();
    done();
  }
};
