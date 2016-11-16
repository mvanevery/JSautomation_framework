/**
 * Created by mvanevery on 10/10/16.
 */

//import CUSTOMERNAME from '../../../../test/concierge/appSuite/Planner/addAppointment.js';

module.exports = {
  routes: {
    baseUrl: 'localhost:3000/'
  },
  helpers: {
    //===================================== GLOBAL ================================
    plannerTitle: `//div[contains(text(),"Planner")]`,
    addButton: '//div[@class="mm-o-icon icon-plus"]',
    yesButton:'//div[contains(text(),"Yes")]',
    Cancel: '//button[@data-id="cancel"]',
    //Cancel: '//div[contains(text(),"Cancel")]',
    Discard:'//div[contains(text(),"Discard")]',
    continueEdit:'//div[contains(text(),"Continue Editing")]',
    //Save:'//button[@data-id="done]',
    saveButton:'//div[contains(text(),"Done")]',
    modalType: '//select[@name="type"]',
    modalSubject: '//input[@name="subject"]',
    modalStartDateTime:'//input[@name="startDateTime"]',
    modalEndDateTime:'//input[@name="endDateTime"]',
    modalStatus:'//select[@name="status"]',
    modalPriority:'//select[@name="priority"]',
    forwardMonth:'//div[@class="mm-o-icon icon-planner-arrow-right"]',
    backMonth:'//div[@class="mm-o-icon icon-planner-arrow-left"]',
    calendarMonth:'div > div > div > span',

    //============================================= TASK ==================================
    taskAddition:'a > button[type="button"]',
    taskViewMore:'//button[@type="button"][2]',
    taskTitle: '//div[contains(text(),"Create Task")]',
    taskToggleSwitch:'//div[contains(text(),"Task")]',
    addedTaskTitle: '//div[contains(text(),"Automation Test Task")]',
    removeTask:'//div[contains(text(),"Done")]',

    //=========================================== APPOINTMENT ==============================
    apptAddition:'//button[@type="button"])[5]',
    apptViewMore:'//button[@type="button"][4]',
    apptTitle: '//div[contains(text(),"Create Appointment")]',
    apptToggleSwitch:'//div[contains(text(),"Appt")]',
    addedApptTitle: '//div[contains(text(),"Automation Test Appointment")]',

  }
}
