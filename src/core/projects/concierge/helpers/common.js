const clientType = require('../../../projects/config').client;
const client = require(`../../../../core/clients/${clientType}`).client;
const project = require('../../../projects/config').project;
const config = require(`../../../projects/${project}/config`);
const landingPage = require(`../../../projects/${project}/selectors/landingPage`);
const loginPage = require(`../../../projects/${project}/selectors/loginPage`);
const provisioning = require(`../../../projects/${project}/selectors/provisioning`);
const store = require(`../../../projects/${project}/selectors/store`);
const planner = require(`../../../projects/${project}/selectors/planner`);

module.exports = {

  // -------------------------   GLOBALS
  mobileView(done) {
    client.setViewportSize({
      height: 768,
      width: 1024
    }, true).then(done);
  },

  goTo: (done) => {
    //gulp --client:chrome
    if (`${clientType}` == 'chrome')
    {
      client.init().url(config.routes.baseUrl, done);
    }
    else if (`${clientType}` == 'appium')
    {
      client.init(done);
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

  // ------------------------------------ PROVISIONING

  enterProvisionBurberry(done) {
    if (client.isVisible(config.helpers.keyField, done)) {
      client.setValue(config.helpers.keyField, config.helpers.burberry_provkey)
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

  // ---------------------------------------- LOGIN

  verifyLoginScreen(done) {
    if (client.isVisible(loginPage.helpers.login_logo, done)) {
      console.log('Welcome to the Login Page');
    } else {
      console.log('ERROR: The provision failed to reach the Login screen.');
    }
  },

  loginUser(done,username, password) {
    if (client.isVisible(loginPage.helpers.signIn, done)) {
      client.setValue(loginPage.helpers.usernameField, username || loginPage.helpers.username)
        .then(() => {
          client.setValue(loginPage.helpers.passwordField, password || loginPage.helpers.password)
            .then(() => {
              client.click(loginPage.helpers.signIn);
            });
        });
    } else {
      console.log('	ERROR: Login page is not available.');
    }
  },

  loginUserStore(done) {
    if (client.isVisible(loginPage.helpers.signIn, done)) {

              client.click(loginPage.helpers.signIn);
    } else {
      console.log('	ERROR: Login page is not available.');
    }
  },


//----------------------------------- Store ID Page ----------------------------------------------------

  specifyStore(done, storeID) {
    if (client.isVisible(store.helpers.storeIDField, done)) {
      client.setValue(store.helpers.storeIDField, storeID || store.helpers.storeID)
        .then(() => {
          client.click(store.helpers.saveButton)
        })
    }
  },
  specifyStoreCancel(done) {
    if (client.isVisible(store.helpers.storeIDField, done)) {
        client.click(store.helpers.cancelButton)
    }
  },


// ----------------------------------------  LANDING PAGE

  verifyConciergeScreen(done) {
    if (client.isVisible(landingPage.helpers.homeIcon)) {
      console.log('	PASS: The Concierge screen is visible.');
    } else {
      console.log('	ERROR: The user failed to reach the Concierge screen.');
    }
    done();
  },

  navMenu(done) {
    if (client.isVisible(landingPage.helpers.menuIcon)) {
      client.click(landingPage.helpers.menuIcon)
        .then(() => {
          client.getText('h2')
        })
    } else {
      console.log('	ERROR: The Dashboard icon is not in the menu.');
    }
  },

  navDashboard(done) {
    if (client.isVisible(landingPage.helpers.iconList)) {
      client.click(landingPage.helpers.iconList);
    } else {
      console.log('	ERROR: The Dashboard icon is not in the menu.');
    }
  },

  navPlanner(done) {
    if (client.isVisible(config.helpers.plannerIcon)) {
      client.click(config.helpers.plannerIcon);
    } else {
      console.log('	ERROR: The Planner icon is not in the menu.');
    }
  },

  addTask(done,expected) {
    if(client.isVisible(planner.helpers.taskAddition)) {
      client.click(planner.helpers.taskAddition)
    .then(() => {
          client.getText(planner.helpers.taskTitle)
            .then((text) => {
              try {
                assert.equal(expected, text, 'The Task modal is displayed');
              } catch (err) {
                done(err);
              }
            })
        })
    }
  },
  addAppointment(done,expected) {
    if(client.isVisible(planner.helpers.apptAddition)) {
      client.click(planner.helpers.apptAddition)
        .then(() => {
          client.getText(planner.helpers.apptTitle)
            .then((text) => {
              try {
                assert.equal(expected, text, 'The Task modal is displayed');
              } catch (err) {
                done(err);
              }
            })
        })
    }
  },

  navBlackbook(done, expected) {
   if (client.isVisible(landingPage.helpers.blackbookIcon, done)) {
      client.click(landingPage.helpers.blackbookIcon)
   .then(() => {
       client.getText(landingPage.helpers.blackbookHeader)
         .then((text) => {
           try {
             assert.equal(expected, text, 'The expected value was not equal to the text');
           } catch (err) {
             done(err);
           }
         })
     })
   }
  },

  navSearch(done, expected) {
    if (client.isVisible(landingPage.helpers.searchIcon, done)) {
      client.click(landingPage.helpers.searchIcon)
      .then(() => {
          client.getText(landingPage.helpers.productSearchField)
          .then((text) => {
              try {
                assert.equal(expected, text, 'The expected value was not equal to the text');
              } catch (err) {
                done(err);
              }
            })
        })
    }
  },

  navAddition(done) {
    if (client.isVisible(landingPage.helpers.addIcon, done)) {
      client.click(landingPage.helpers.addIcon)
      .then(() => {
          client.getText(landingPage.helpers.createLabel)
          .then((text) => {
              try {
                assert.equal(expected, text, 'The expected value was not equal to the text');
              } catch (err) {
                done(err);
              }
            })
        })
    }
  },

  //-----------------------------------------------Task/Appointment Modal ------------------

  addSubject(done,subject) {
    if (client.isVisible(planner.helpers.modalSubject, done)) {
      client.setValue(planner.helpers.modalSubject, subject);
    }
  },

  addType(done, type) {
    if (client.isVisible(planner.helpers.taskType, done)) {
      client.setValue(planner.helpers.taskType, type);
    }
  },

  addStartDate(done, start) {
    if (client.isVisible(planner.helpers.modalStartDateTime, done)) {
      client.setValue(planner.helpers.modalStartDateTime, start);
    }
  },

  addEndDate(done, end) {
    if (client.isVisible(planner.helpers.modalEndDateTime, done)) {
      client.setValue(planner.helpers.modalEndDateTime, end);
    }
  },

  addStatus(done, status) {
    if (client.isVisible(planner.helpers.modalStatus, done)) {
      client.setValue(planner.helpers.modalStatus, status);
    }
  },

  addPriority(done, priority) {
    if (client.isVisible(planner.helpers.modalPriority, done)) {
      client.setValue(planner.helpers.modalPriority, priority)
    }
  },

  saveTask(done) {
    if (client.isVisible(planner.helpers.taskSave, done)) {
      client.click(planner.helpers.taskSave);
    }
  },

  cancelTask(done) {
    if (client.isVisible(planner.helpers.taskCancel, done)) {
      client.click(planner.helpers.taskCancel)
    }
  },


  //-----------------------------------------------------------

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
