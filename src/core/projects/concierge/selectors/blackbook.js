/**
 * Created by mvanevery on 8/31/16.
 */

//import CUSTOMERNAME from '../../../../test/concierge/appSuite/Email/sendEmail_C1638';

module.exports = {
    routes: {
        baseUrl: 'localhost:3000/'
    },
    helpers: {

//============================================ Search Section ==========================================================

      firstName:'//input[@name="firstName"]',
      lastName:'//input[@name="lastName"]',
      phone:'//input[@name="phone"]',
      email:'//input[@name="email"]',
      city:'//input[@name="city"]',
      zipcode:'//input[@name="zip"]',
      searchButton:'//button[@data-id="searchButton"]',
      resetButton:'//button[@data-id="resetButton"]',
      pageHeader: '//div[@data-id="pageHeader"]',
      myClientsToggle:'//switch[@data-id="clientsToggle"]',
      searchToggle:'//div[contains(text(),"Search")]',
      listToggle:'//div[contains(text(),"List")]',
      addCustomerButton:'//button[@data-id="customer-add"]',

//================================================== Add Customer Modal ================================================

      searchResults:`//div[@data-id="cardName-0"]`,
      modalHeader:'//div[@data-id="modalHeader"]',
      firstNameModal:'//input[@data-id="firstNameAddModal"]',
      lastNameModal:'//input[@data-id="lastNameAddModal"]',
      addPhoneModal:'//button[@data-id="addPhone"]',
      phoneModal:'//input[@data-id="modalPhone"]',
      phoneToggleModal:'//input[@data-id=primaryTogglePhone"]',
      phoneTypeModal:'//select[@data-id="phoneType"]',
      addEmailModal:'//button[@data-id="addEmail"]',
      emailModal:'//input[@data-id="modalEmail"]',
      emailToggleModal:'//input[@data-id=primaryToggleEmail"]',
      emailTypeModal:'//select[@data-id="emailType"]',
      addAddressModal:'//button[@data-id="addAddress"]',
      street1Modal:'//input[@data-id="modalStreet1"]',
      street2Modal:'//input[@data-id="modalStreet2"]',
      cityModal:'//input[@data-id="modalCity"]',
      stateModal:'//input[@data-id="modalState"]',
      zipcodeModal:'//input[@data-id="modalZipcode"]',
      countryModal:'//input[@data-id="modalCountry"]',
      addressTypeModal:'//select[@data-id="addressType"]',
      customerCard: '//div[@data-id="customerCard-0")]',
      save:'//button[@data-id="Done"]',
      cancel: '//button[@data-id="Cancel"]',
      continue:'//button[@data-id="Continue"]',
      discard:'//button[@data-id="Discard"]',

      //================================================== CUSTOMER PROFILE ============================================

      customerName: '//div[@data-id="contactFullName"]',
      //customerName:'//div[@data-id="contactFullName"]',
      editIcon:'//div[@class="mm-o-icon icon-edit-customer"]',
      //editIcon:'//button[@data-id="editCustomer"]',
      emailIcon: '//div[@data-id="email"]',
      blankEmailIcon: '//div[@class=:mm-o-icon icon-blank-template"]',
      birthdayEmailIcon: '',


    }
}
