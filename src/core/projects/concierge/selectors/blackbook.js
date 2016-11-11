/**
 * Created by mvanevery on 8/31/16.
 */

import CUSTOMERNAME from '../../../../test/concierge/appSuite/Email/sendEmail_C1638';

module.exports = {
    routes: {
        baseUrl: 'localhost:3000/'
    },
    helpers: {
      firstName:'//input[@name="firstName"]',
      lastName:'//input[@name="lastName"]',
      phone:'//input[@name="phone"]',
      email:'//input[@name="email"]',
      city:'//input[@name="city"]',
      zipcode:'//input[@name=postalCode"]',
      searchButton:'//span[contains(text(),"Search Customers"]',
      blackbookHeader: '//div[contains(text(),"My Clients]',
      myClientsToggle:'',
      searchToggle:'//div[contains(text(),"Search"]',
      listToggle:'//div[contains(text(),"List"]',
      addCustomer:'//div[@class="mm-o-icon icon-plus"]',
      searchResults:`//div[contains(text(),${CUSTOMERNAME}]`,

      //================================================== CUSTOMER PROFILE ============================================

      profileTitle: '//div[contains(text(),"Customer Profile"]',
      customerName: '//div[contains(text(),"Jerry Smith"]',
      emailIcon: '//div[@class="mm-o-icon icon-email"]',
      blankEmailIcon: '//div[@class=:mm-o-icon icon-blank-template"]',
      birthdayEmailIcon: '',




        img_myCustomers: '//a[contains(text(),"My Customers")]',
        img_Store: '//a[contains(text(),"Store")]',
        img_Segments: '//a[contains(text(),"Segments")]',
        fld_lastName: '//div[2]/div/input',
        txt_Customer_Ryan: '//div[@title="Ryan"]'

    }
}
