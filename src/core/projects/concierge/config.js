module.exports = {
  routes: {
    baseUrl: 'localhost:3000/'
  },
  helpers: {

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
