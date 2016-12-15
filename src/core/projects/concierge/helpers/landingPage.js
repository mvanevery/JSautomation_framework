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

  navDashboard(done) {
    if (client.isVisible(landingPage.helpers.iconList)) {
      client.click(landingPage.helpers.iconList);
    } else {
      console.log('	ERROR: The Dashboard icon is not in the menu.');
    }
  },

  // landing.navigateIcons(done, "catalogMenuIcon", true);
  navigateIcons(done, selector, expected) {
    client.isVisible(landingPage.helpers.catalog[selector])
      .then(function(isVisible) {
        try {
          assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
        }  catch (err) {
          done(err)
        }
        if(isVisible == true) {
          client.click(landingPage.helpers.catalog[selector]);
        }
    })
    done()
  },

  // landing.navigateActiveIcons(done, "catalogMenuIcon", "catalogMenuIconActive", "-1");
  navigateActiveIcons(done, selector, selectorActive, expected) {
    client.getHTML(landingPage.helpers.catalog[selector])
    .then(function(html){
    var idx = html.toLowerCase().indexOf(landingPage.helpers.catalog[selectorActive]);
      try {
        assert.notEqual(expected, idx, 'The expected value was not equal to the actual value');
      } catch (err) {
        done(err)
      }
    });
    done()
  },

  // landing.navigateTree(done, "catalogMenuTitle", true);
  navigateTree(done, selector, expected) {
     client.isVisible(landingPage.helpers.catalog[selector])
       .then(function(isVisible) {
         try {
           assert.equal(expected, isVisible, 'The expected value was not equal to the actual value')
         }  catch (err) {
           done(err)
         }
     })
     done()
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

