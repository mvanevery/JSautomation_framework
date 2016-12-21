/**
 * Created by mvanevery on 10/10/16.
 */

module.exports = {
  routes: {
    baseUrl: 'localhost:3000/'
  },
  helpers: {
    //===================================== GLOBAL ================================
    pageHeader: '//div[@data-id="pageHeader"]',
    addButton: '//div[@class="mm-o-icon icon-plus"]',
    //addButton: '//button[@data-id="apptTasks-add"]',
    yesButton:'//div[contains(text(),"Yes")]',
    cancel: '//button[@data-id="cancel"]',
    discard:'//button[@data-id="Discard"]',
    continueEdit:'//button[@data-id="Continue"]',
    save:'//button[@data-id="done"]',
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
    editApptTask:'//button[@data-id="apptTask-edit"]',

    //============================================= TASK ==================================
    taskAddition:'a > button[type="button"]',
    taskViewMore:'//button[@type="button"][2]',
    taskTitle: '//div[contains(text(),"Create Task")]',
    taskToggleSwitch:'//div[contains(text(),"Task")]',
    addedTaskTitle: '//div[contains(text(),"Automation Test Task")]',
    removeTask:'//button[@data-id="apptTask-delete"]',
    yesButton:'//button[@data-id="Confirm"]',

    //=========================================== APPOINTMENT ==============================
    apptAddition:'//button[@type="button"])[5]',
    apptViewMore:'//button[@type="button"][4]',
    apptTitle: '//div[contains(text(),"Create Appointment")]',
    apptToggleSwitch:'//div[contains(text(),"Appt")]',
    addedApptTitle: '//div[contains(text(),"Automation Test Appointment")]',

  }
}
