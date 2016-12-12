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

  logpinPageElementVisible(done, select, expected) {
    client.isVisible(loginPage.helpers[select])
      .then(function(isVisible) {
           try {
             assert.equal(expected, isVisible, 'The object is not visible.');
             } catch (err) {
             done(err);
           }
      })
    done();
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

    dashboardElementVisible(done, expected) {
      client.isVisible(landingPage.helpers.txt_companyNewsPanel)
        .then(function(isVisible) {
          try {
            assert.equal(expected, isVisible, 'The element was not visible on the page.')
          } catch (err) {
            done(err);
          }
        })
      done();
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

  mccElementVisible(done, select, expected) {
    client.isVisible(mccPage.helpers[select])
      .then(function(isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the text');
        } catch (err) {
          done(err);
        }
      })
    done();
  },


  enterMccFormValue(done, selector, value) {
    if (client.isVisible(mccPage.helpers[selector])) {
      client.setValue(mccPage.helpers[selector], value)
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


  // mccElementVisible(done,selector) {
  //   client.isVisible(mccPage.helpers[selector])
  //     .then(function (isVisible) {
  //       assert.isTrue(isVisible, 'The element is not visible on the page.');
  //       // if (isVisible == true) {
  //       //   client.click(landingPage.helpers[selector])
  //       // } else {
  //       //   client.click(login.helpers.logoutUser(done));
  //       // }
  //     })
  //   done();
  // },


  mccElementVisible(done, selector, expected) {
    client.isVisible(mccPage.helpers[selector])
      .then(function(isVisible) {
        try {
          assert.equal(true, isVisible, 'The element was visible on the page.')
        } catch (err) {
          done(err);
        }
        if (isVisible == true) {
          client.getText(mccPage.helpers[selector], verbiage)
            .then((verbiage) => {
              try {
                assert.equal(expected, verbiage, 'The expected text does not match the element text.');
              } catch (err) {
                done(err);
              }
            })
        }
      })
    done();
  },

  end(done) {
    client.end();
    done();
  }
};
