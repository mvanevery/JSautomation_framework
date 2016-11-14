const clientType = require('../../../projects/config').client;
const client = require(`../../../../core/clients/${clientType}`).client;
const project = require('../../../projects/config').project;
const loginPage = require(`../../../projects/${project}/selectors/loginPage`);
const store = require(`../../../projects/${project}/selectors/store`);
const assert = require('chai').assert;



module.exports = {

  specifyStore(done, storeID) {
    if (client.isVisible(store.helpers.storeIDField, done)) {
      client.setValue(store.helpers.storeIDField, storeID || store.helpers.storeID)
        .then(() => {
          client.click(store.helpers.saveButton)
            .then(() => {
              client.click(loginPage.helpers.signIn);
            })
        })
    }
  },
  specifyStoreCancel(done) {
    if (client.isVisible(store.helpers.storeIDField, done)) {
      client.click(store.helpers.cancelButton)
    }
  },

}
