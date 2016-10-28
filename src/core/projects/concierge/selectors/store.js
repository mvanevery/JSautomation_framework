/**
 * Created by mvanevery on 10/10/16.
 */

module.exports = {
  routes: {
    baseUrl: 'localhost:3000/'
  },

  helpers: {
    storeID: '326',
    saveButton: '//button[@data-id="save-store-settings"]',
    //saveButton: '//button[@contains(text()="Save"])',
    //saveButton: '//button[@type="button"][5]',
    cancelButton:'//div[@id="app"]/div/div/div[5]/div[2]/div/div/div/button',
    storeIDField:'//input[@name="storeId"]'
  }
}
