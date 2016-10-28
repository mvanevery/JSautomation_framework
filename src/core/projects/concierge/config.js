module.exports = {
  routes: {
    baseUrl: 'http://localhost:3001/'
  },
  helpers: {

    // Module "Dashboard"


    widget_appointments: '//div[@class="mm-c-appointments-widget"]',

    // Module "Blackbook"

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
