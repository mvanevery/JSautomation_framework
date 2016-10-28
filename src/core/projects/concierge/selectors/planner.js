/**
 * Created by mvanevery on 10/10/16.
 */


module.exports = {
  routes: {
    baseUrl: 'localhost:3000/'
  },
  helpers: {
    taskAddition:'a > button[type="button"]',
    apptAddition:'//button[@type="button"])[5]',
    taskViewMore:'//button[@type="button"][2]',
    apptViewMore:'//button[@type="button"][4]',
    taskType: 'select[name="type"]',
    modalSubject: 'input[name="subject"]',
    modalStartDateTime:'input[name="startDateTime"]',
    modalEndDateTime:'input[name="endDateTime"]',
    modalStatus:'select[name="status"]',
    modalPriority:'select[name="priority"]',
    taskSave:'//button[contains(text(),"Done")]',
    taskCancel: '//button[contains(text(),"Cancel")]',
    taskDiscard:'xpath=(//button[@type="button"])[7]',
    taskTitle: '.pure-container > div:nth-child(8) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)',
    apptTitle: '.pure-container > div:nth-child(8) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)'
  }
}