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
    pageHeader: '//div[@data-id="pageHeader"]',
    addButton: '//div[@class="mm-o-icon icon-plus"]',
    yesButton:'//div[contains(text(),"Yes")]',
    cancel: '//button[@data-id="cancel"]',
    Discard:'//div[contains(text(),"Discard")]',
    continueEdit:'//div[contains(text(),"Continue Editing")]',
    Save:'//button[@data-id="done]',
    modalHeader:'//div[@data-id="modalHeader"]',
    modalType: '//select[@name="type"]',
    modalSubject: '//input[@name="subject"]',
    modalStartDateTime:'//input[@name="startDateTime"]',
    modalEndDateTime:'//input[@name="endDateTime"]',
    modalStatus:'//select[@name="status"]',
    modalPriority:'//select[@name="priority"]',
    forwardMonth:'//div[@class="mm-o-icon icon-planner-arrow-right"]',
    backMonth:'//div[@class="mm-o-icon icon-planner-arrow-left"]',
    calendarMonth:'div > div > div > span',
    taskApptsName: '//div[@data-id="taskApptsName]',

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
