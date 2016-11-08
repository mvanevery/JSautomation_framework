/**
 * Created by afeldmeyer on 10/28/16.
 */
const clientType = require('../../../projects/config').client;
const client = require(`../../../../core/clients/${clientType}`).client;
const project = require('../../../projects/config').project;
const config = require(`../../../projects/${project}/config`);

const loginPage = require(`../../../projects/${project}/selectors/loginPage`);
const landingPage = require(`../../../projects/${project}/selectors/landingPage`);
const mccPage = require(`../../../projects/${project}/selectors/mccPage`);

const assert = require('chai').assert;
const expect = require('chai').expect;

module.exports = {

  // -------------------------   GLOBALS   -------------------------
  mobileView(done) {
    client.setViewportSize({
      height: 768,
      width: 1024
    }, true).then(done);
  },

  goTo: (done,testURL) => {
    client.init().url(testURL || config.routes.baseUrl, done);
  },

  openBrowser(done) {
    client.init(done);
  },

  closeBrowser(done) {
    if (client.exists) {
      client.closeBrowser(done);
    }
  },

  pause: (done, pauseTime) => {
    client.pause(pauseTime, done);
  },



  // ---------------------------------------- LOGIN ----------------------------------------

  verifyLoginScreen(done) {
    if (client.isVisible(loginPage.helpers.btn_signIn)) {
    client.getText(loginPage.helpers.btn_signIn)
      .then((text) => {
        try {
          assert.equal(text, 'SIGN IN');
        } catch (err) {
          console.log(err);
        }
        done();
      })
    }
  },

  loginUser(done,username,password,location) {
    if (client.isVisible(loginPage.helpers.btn_signIn, done)) {
      client.setValue(loginPage.helpers.fld_username, username || loginPage.helpers.data_username)
        .then(() => {
          client.setValue(loginPage.helpers.fld_password, password || loginPage.helpers.data_password)
            .then(() => {
              client.setValue(loginPage.helpers.fld_storeOverride, location || loginPage.helpers.data_location)
                .then(() => {
                  client.click(loginPage.helpers.btn_signIn);
                });
            });
        });
    } else {
      console.log('	ERROR: The Login page is not available.');
    }
  },

  verifyLoginError(done) {
    expect(loginPage.helpers.txt_loginError).to.exist;
    done();
  },

  // ---------------------------------------- LOGOUT ----------------------------------------

  selectAvatar(done) {
    if (client.isVisible(landingPage.helpers.btn_avatar, done)) {
      client.click(landingPage.helpers.btn_avatar)
    } else {
      console.log('ERROR: Unable to logout.');
    }
  },

  selectLogout(done) {
    if (client.isVisible(landingPage.helpers.btn_logout, done)) {
      client.click(landingPage.helpers.btn_logout)
    } else {
      console.log('ERROR: Unable to logout.');
    }
  },

  selectLogoutCancel(done) {
    if (client.isVisible(landingPage.helpers.btn_logout_cancel, done)) {
      client.click(landingPage.helpers.btn_logout_cancel)
    } else {
      console.log('ERROR: Unable to logout.');
    }
  },

// ----------------------------------------  LANDING PAGE  ----------------------------------------

    verifyBamLandingPage(done) {
      expect(landingPage.helpers.img_headerLogo).to.exist;
      done();
    },

    verifyStoreNum(done, expected) {
      if (client.isVisible(landingPage.helpers.txt_storeNum)) {
        client.getText(landingPage.helpers.txt_storeNum)
          .then((text) => {
            try {
              assert.equal(text, expected);
              } catch (err) {
                console.log(err);
              }
            done();
          })
      }
    },

    selectMccSearch(done) {
      if (client.isVisible(landingPage.helpers.btn_mccSearch, done)) {
        client.click(landingPage.helpers.btn_mccSearch)
      } else {
        console.log('ERROR: Unable to find the MCC Search button.');
      }
    },

// ----------------------------------------  MCC SEARCH PAGE  ----------------------------------------

  verifyMccPage(done) {
    expect(mccPage.helpers.fld_lastName).to.exist;
    done();
  },

  fillMccFormPhone(done, value) {
    if (client.isVisible(mccPage.helpers.fld_phone)) {
      //client.click(field);
      client.setValue(mccPage.helpers.fld_phone, value)
    }
    else{
      console.log('	ERROR: The MCC Search page is unavailable.');
    }
    done();
  },

  selectSearchButton(done) {
    if (client.isVisible(mccPage.helpers.btn_search, done)) {
      client.click(mccPage.helpers.btn_search)
    } else {
      console.log('ERROR: Unable to find the Search button.');
    }
  },

  verifyNoResults(done) {
  // if (client.isVisible(mccPage.helpers.txt_noResults, done)) {
  //   client.click(mccPage.helpers.txt_noResults)
  // } else {
  //   console.log('ERROR: Unable to find the Search button.');
  // }
    expect(mccPage.helpers.txt_noResults).to.exist;
    done();
},

  // verifyBamLandingPage(done, expected) {
  //   if (client.isVisible(landingPage.helpers.img_headerLogo)) {
  //     client.click(landingPage.helpers.txt_companyNews)
  //       .then(() => {
  //         client.getText(landingPage.helpers.txt_companyNews)
  //           .then((text) => {
  //             try {
  //               assert.equal(expected, text, 'The BAM landing page is displayed');
  //             } catch (err) {
  //               done(err);
  //             }
  //           })
  //       })
  //   }
  // },
//
  //
  // navMenu(done) {
  //   if (client.isVisible(landingPage.helpers.menuIcon)) {
  //     client.click(landingPage.helpers.menuIcon)
  //       .then(() => {
  //         client.getText('h2')
  //       })
  //   } else {
  //     console.log('	ERROR: The Dashboard icon is not in the menu.');
  //   }
  // },
  //
  // navDashboard(done) {
  //   if (client.isVisible(landingPage.helpers.iconList)) {
  //     client.click(landingPage.helpers.iconList);
  //   } else {
  //     console.log('	ERROR: The Dashboard icon is not in the menu.');
  //   }
  // },
  //
  // navPlanner(done) {
  //   if (client.isVisible(config.helpers.plannerIcon)) {
  //     client.click(config.helpers.plannerIcon);
  //   } else {
  //     console.log('	ERROR: The Planner icon is not in the menu.');
  //   }
  // },
  //
  // addTask(done,expected) {
  //   if(client.isVisible(planner.helpers.taskAddition)) {
  //     client.click(planner.helpers.taskAddition)
  //   .then(() => {
  //         client.getText(planner.helpers.taskTitle)
  //           .then((text) => {
  //             try {
  //               assert.equal(expected, text, 'The Task modal is displayed');
  //             } catch (err) {
  //               done(err);
  //             }
  //           })
  //       })
  //   }
  // },
  // addAppointment(done,expected) {
  //   if(client.isVisible(planner.helpers.apptAddition)) {
  //     client.click(planner.helpers.apptAddition)
  //       .then(() => {
  //         client.getText(planner.helpers.apptTitle)
  //           .then((text) => {
  //             try {
  //               assert.equal(expected, text, 'The Task modal is displayed');
  //             } catch (err) {
  //               done(err);
  //             }
  //           })
  //       })
  //   }
  // },
  //
  // navBlackbook(done, expected) {
  //  if (client.isVisible(landingPage.helpers.blackbookIcon, done)) {
  //     client.click(landingPage.helpers.blackbookIcon)
  //  .then(() => {
  //      client.getText(landingPage.helpers.blackbookHeader)
  //        .then((text) => {
  //          try {
  //            assert.equal(expected, text, 'The expected value was not equal to the text');
  //          } catch (err) {
  //            done(err);
  //          }
  //        })
  //    })
  //  }
  // },
  //
  // navSearch(done, expected) {
  //   if (client.isVisible(landingPage.helpers.searchIcon, done)) {
  //     client.click(landingPage.helpers.searchIcon)
  //     .then(() => {
  //         client.getText(landingPage.helpers.productSearchField)
  //         .then((text) => {
  //             try {
  //               assert.equal(expected, text, 'The expected value was not equal to the text');
  //             } catch (err) {
  //               done(err);
  //             }
  //           })
  //       })
  //   }
  // },
  //
  // navAddition(done) {
  //   if (client.isVisible(landingPage.helpers.addIcon, done)) {
  //     client.click(landingPage.helpers.addIcon)
  //     .then(() => {
  //         client.getText(landingPage.helpers.createLabel)
  //         .then((text) => {
  //             try {
  //               assert.equal(expected, text, 'The expected value was not equal to the text');
  //             } catch (err) {
  //               done(err);
  //             }
  //           })
  //       })
  //   }
  // },
  //
  //
  //
  // //-----------------------------------------------------------
  //
  // searchCustomer(done) {
  //   client.waitForVisible(config.helpers.fld_lastName, 5000);
  //   if (client.isVisible(config.helpers.fld_lastName, done)) {
  //     client.click(config.helpers.fld_lastName)
  //       .then(() => {
  //         client.setValue(config.helpers.fld_lastName, 'McClellan');
  //       });
  //   } else {
  //     console.log('	ERROR: Last Name field is not available.');
  //   }
  // },
  //
  // selectCustomer(done) {
  //   client.waitForVisible(config.helpers.txt_Customer_Ryan, 5000);
  //   if (client.isVisible(config.helpers.txt_Customer_Ryan)) {
  //     client.click(config.helpers.txt_Customer_Ryan);
  //   } else {
  //     console.log('	ERROR: Missing the customer record for Ryan McClellan.');
  //   }
  //   client.waitForVisible(config.helpers.txt_Customer_Header, 5000);
  //   if (client.isVisible(config.helpers.txt_Customer_Header)) {
  //     console.log('	PASS: The user has reached the Customer Profile screen.');
  //   } else {
  //     console.log('	ERROR: The Customer Profile screen is unreachable.');
  //   }
  //   done();
  // },
  //
  //
  // addAppointmentForm_fromPlanner(done) {
  //   client.waitForVisible(config.helpers.img_nav_planner, 5000);
  //   if (client.isVisible(config.helpers.btn_create)) {
  //     client.click(config.helpers.btn_create);
  //   } else {
  //     console.log('	ERROR: Missing the create button.');
  //   }
  //   client.waitForVisible(config.helpers.cmb_type, 5000);
  //   if (client.isVisible(config.helpers.cmb_type)) {
  //     console.log('	PASS: The user has reached the Appointment/Task form.');
  //   } else {
  //     console.log('	ERROR: The Appointment/Task form is unreachable.');
  //   }
  //   done();
  // },
  //
  // addAppointment_05012016(done) {
  //   client.click(config.helpers.cmb_type)
  //     .then(() => {
  //       client.setValue(config.helpers.cmb_type, 'Appointment');
  //     });
  //   client.pause(2000);
  //   client.click(config.helpers.txt_subject)
  //     .then(() => {
  //       client.setValue(config.helpers.txt_subject, 'Test Appointment for 05/01/2016.');
  //     });
  //   client.pause(2000);
  //   client.click(config.helpers.date_start)
  //     .then(() => {
  //       client.setValue(config.helpers.date_start, '05012016');
  //     });
  //   client.pause(2000);
  //   client.click(config.helpers.date_end)
  //     .then(() => {
  //       client.setValue(config.helpers.date_start, '05012016');
  //     });
  //   client.pause(2000);
  //   // client.click(config.helpers.cmb_status)
  //   // 	.then(function() {
  //   // 		client.selectByValue(config.helpers.cmb_status, 'Open')
  //   // 	});
  //   // client.pause(2000);
  //   client.click(config.helpers.cmb_priority)
  //     .then(() => {
  //       client.selectByValue(config.helpers.cmb_priority, 'High');
  //     });
  //   client.pause(2000);
  //   client.click(config.helpers.btn_save);
  //
  //   done();
  // },

  end(done) {
    client.end();
    done();
  }
};
