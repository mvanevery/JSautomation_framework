/**
 * Created by afeldmeyer on 10/28/16.
 */
module.exports = {
    routes: {
      baseUrl: 'https://serviceqa.booksamillion.com/'
    },
    helpers: {
      img_loginLogo:           '//div[@class="login-form__logo"]',
      fld_username:         '//input[@name="employee_id"]',
      fld_password:         '//input[@name="employee_pin"]',
      fld_storeOverride:    '//input[@name="store_override"]',
      btn_signIn:           '//button[@type="submit"]'

      data_username:        '180001',
      data_password:        '1234'
    }
}
