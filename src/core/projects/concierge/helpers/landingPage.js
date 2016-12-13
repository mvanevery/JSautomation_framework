const clientType = require('../../../projects/config').client;
const client = require(`../../../../core/clients/${clientType}`).client;
const project = require('../../../projects/config').project;
const config = require(`../../../projects/${project}/config`);
const landingPage = require(`../../../projects/${project}/selectors/landingPage`);
const loginPage = require(`../../../projects/${project}/selectors/loginPage`);
const login = require(`../../../projects/${project}/helpers/loginPage`);
const provisioning = require(`../../../projects/${project}/selectors/provisioning`);
const store = require(`../../../projects/${project}/selectors/store`);
const planner = require(`../../../projects/${project}/selectors/planner`);
const blackbook = require(`../../../projects/${project}/selectors/blackbook`);
const catalog = require(`../../../projects/${project}/selectors/catalog`);
const assert = require('chai').assert;


module.exports = {

  verifyConciergeScreen(done, expected) {
    client.isVisible(landingPage.helpers.headerImage)
      .then(function(isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
        }  catch (err) {
          done(err);
        }
       })
    done();
  },

  navCatalog(done, expected) {
    client.click(landingPage.helpers.productIcon)
      .then (() => {
        client.getText(catalog.helpers.catalogMenuTitle)
          .then((text) => {
            try {
              assert.equal(expected, text, 'The expected value was not equal to the actual value');
            } catch (err) {
              done(err);
            }
          });
      });
   done();
  },

  navDashboard(done) {
    if (client.isVisible(landingPage.helpers.iconList)) {
      client.click(landingPage.helpers.iconList);
    } else {
      console.log('	ERROR: The Dashboard icon is not in the menu.');
    }
  },

  navPlanner(done, expected) {
    if(client.isVisible(landingPage.helpers.plannerIcon, done)) {
      client.click(landingPage.helpers.plannerIcon)
        .then(() => {
          client.getText(planner.helpers.plannerTitle)
            .then((text) => {
              //console.log(text);
              try {
                assert.equal(expected, text, 'Title Matches');
              } catch (err) {
                done(err);
              }
            })
        })
    }
  },

  navigateIcons(done, selector, expected) {
    client.isVisible(landingPage.helpers[selector])
      .then(function(isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
        }  catch (err) {
          done(err);
        }
        if(isVisible == true) {
          client.click(landingPage.helpers[selector])
        }
      })
    done();
  },

  navAddition(done)  {
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
  }

}

