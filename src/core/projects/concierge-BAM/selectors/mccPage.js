/**
 * Created by afeldmeyer on 11/8/16.
 */

module.exports = {
    helpers: {
      fld_lastName:         '//input[@id="js-mcc-search-last"]',
      fld_zipCode:          '//input[@id="js-mcc-search-zip"]',
      fld_phone:            '//input[@id="js-mcc-search-phone"]',
      fld_email:            '//input[@id="js-mcc-search-email"]',
      btn_search:           '//input[@class="btn-submit-form"]',
      btn_reset:            '//div[@class="btn-reset-form"]',
      txt_customerName:     '//div[@class="name"]',
      txt_cardInfo:         '//div[@class="card-info"]',

      //txt_noResults:        '//p[@class="no-results"]',
      txt_noResults:        '//h1[contains(text(),"No Results")]',
    },
}
