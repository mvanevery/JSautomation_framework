module.exports = {
  routes: {
    baseUrl: 'localhost:3000/'
  },
  helpers: {

    // Provision Screen
    fld_image: '//img[@alt="Concierge"]',
    fld_provision: '//input[@name="authKey"]',
    txt_provisionKey_burberry: '4e044de8-0b50-46c1-d76d-46f3a4df4b86',
    txt_provisionKey_talbots: 'http://manage.qa.madcloud.io/api/v1/discovery/c99c29d1-5437-f9e9-f233-80df0d135a65',
    btn_send: '//button[@type="button"]',

    // Login Screen
    fld_user: '//input[@name="basic-form-input-email"]',
    fld_password: '//input[@name="basic-form-input-password"]',
    img_logo: '//img[@class="mm-c-login__logo"]',
    url_login: 'localhost:3000/login',
    lnk_deprovision: '//a[@href="provision"',
    txt_ssales_user: 'ssales',
    txt_ssales_pass: 'password',
    btn_signIn: '//button[@type="button"]',

    // Module "Dashboard"
    img_nav_logo: '//span[@class="mm-c-nav__logo-img"]',
    img_nav_dashboard: '//a[@href="/"]',
    img_nav_planner: '//a[@href="/planner"]',
    blackbook_icon: '//a[contains(@href, "/blackbook")]',
    img_nav_add: '//a[@href="#"]',

    widget_appointments: '//div[@class="mm-c-appointments-widget"]',

    // Module "Blackbook"
    txt_title_blackbook: '//h1[contains(text(),"Black Book")]',
    img_myCustomers: '//a[contains(text(),"My Customers")]',
    img_Store: '//a[contains(text(),"Store")]',
    img_Segments: '//a[contains(text(),"Segments")]',
    fld_lastName: '//div[2]/div/input',
    txt_Customer_Ryan: '//div[@title="Ryan"]',

    // Module "Planner"
    txt_title_planner: '//h1[contains(text(),"Planner")]',
    btn_create: '//button[contains(text(),"Create ")]',
    btn_today: '//button[contains(text(),"Today")]',

    // Customer Profile
    txt_Customer_Header: '//h2[contains(text(),"Ryan McClellan")]',

    // Create Appointment/Task Form
    btn_save: '//button[contains(text(),"Save")]',
    cmb_type: '//select[@name="subject"]',
    txt_subject: '//input[@type="text"]',
    cmb_status: '//select[@name="status"]',
    cmb_priority: '//select[@name="priority"]',
    date_start: '//input.form-control.start-date',
    date_end: '//input.form-control.end-date',
  }
};
