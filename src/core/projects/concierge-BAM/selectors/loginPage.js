/**
 * Created by afeldmeyer on 10/28/16.
 */
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
    if (client.isVisible(loginPage.helpers.img_loginLogo, done)) {
      console.log('Login Page is available.');
    } else {
      console.log('ERROR: The Login Page in unavailable.');
    }
  },

  loginUser(done,username,password) {
    if (client.isVisible(loginPage.helpers.btn_signIn, done)) {
      client.setValue(loginPage.helpers.fld_username, username || loginPage.helpers.data_username)
        .then(() => {
          client.setValue(loginPage.helpers.fld_password, password || loginPage.helpers.data_password)
            .then(() => {
              client.click(loginPage.helpers.btn_signIn);
            });
        });
    } else {
      console.log('	ERROR: The Login page is not available.');
    }
  },

}
