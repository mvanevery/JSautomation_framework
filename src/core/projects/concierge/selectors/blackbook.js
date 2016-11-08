/**
 * Created by mvanevery on 8/31/16.
 */
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
      blackbookHeader: '//div[contains(text(),"My Clients]',
        img_myCustomers: '//a[contains(text(),"My Customers")]',
        img_Store: '//a[contains(text(),"Store")]',
        img_Segments: '//a[contains(text(),"Segments")]',
        fld_lastName: '//div[2]/div/input',
        txt_Customer_Ryan: '//div[@title="Ryan"]'

    }
}
