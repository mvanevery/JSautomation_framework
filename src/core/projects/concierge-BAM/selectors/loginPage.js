/**
 * Created by afeldmeyer on 10/28/16.
 */

const clientType = require('../../../projects/config').client;
const client = require(`../../../../core/clients/${clientType}`).client;
const project = require('../../../projects/config').project;
const config = require(`../../../projects/${project}/config`);

module.exports = {
    routes: {
      baseUrl: 'https://serviceqa.booksamillion.com/'
    },
    helpers: {
      img_loginLogo:        '//div[@class="login-form__logo"]',
      fld_username:         '//input[@name="employee_id"]',
      fld_password:         '//input[@name="employee_pin"]',
      fld_storeOverride:    '//input[@name="store_override"]',
      btn_signIn:           '//button[@type="submit"]',

      data_username:        '180001',
      data_password:        '1234'
    },

  verifyLoginScreen(done) {
    if (client.isVisible(helpers.img_loginLogo, done)) {
      console.log('Login Page is available.');
    } else {
      console.log('ERROR: The Login Page in unavailable.');
    }
  },

  loginUser(done,username,password) {
    if (client.isVisible(helpers.btn_signIn, done)) {
      client.setValue(helpers.fld_username, username || helpers.data_username)
        .then(() => {
          client.setValue(helpers.fld_password, password || helpers.data_password)
            .then(() => {
              client.click(helpers.btn_signIn);
            });
        });
    } else {
      console.log('	ERROR: The Login page is not available.');
    }
  },

}
