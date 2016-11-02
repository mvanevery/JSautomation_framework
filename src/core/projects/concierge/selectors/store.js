/**
 * Created by mvanevery on 10/10/16.
 */

module.exports = {
  routes: {
    baseUrl: 'localhost:3000/'
  },

  helpers: {
    storeID: '326',
    saveButton: '//div[contains(text(),"Save")]',
    //saveButton: '//button[@data-id="saveBtn"]',
    //cancelButton:'//button[@data-id="cancelBtn"]',
    cancelButton:'//div[contains(text(),"Cancel")]',
    storeIDField:'//input[@name="storeId"]'
  }
}
