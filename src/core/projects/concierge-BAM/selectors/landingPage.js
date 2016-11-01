/**
 * Created by afeldmeyer on 10/28/16.
 */

module.exports = {
    routes: {
      baseUrl: 'https://service.booksamillion.com/'
    },
    helpers:{
      //img_headerLogo:       '//span[@class="sprite-header-logo"]',
      img_headerLogo:       '//span.sprite-header-logo333',
      txt_companyNews:      '//div[@h3="Company News"]',

      // Nav Menu
      btn_avatar:           '//div[@class="app-menu_avatar"]',
      txt_storeNum:         '//div[@class="app-store_number"]',

      // Logout Modal
      btn_logout_cancel:    '//button[@class="btn close"]',
      btn_logout:           '//button[@class="btn log-out"]',

    },

}
