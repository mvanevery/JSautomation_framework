/**
 * Project:     Concierge
 * Test Name:   addAppointment
 * Test Steps:  https://madmobile.testrail.com/index.php?/cases/view/1015
 * Author:      Mike Van Every
 * Date:        11/1/2016
 */

const common = require('../../../../core/projects/concierge/helpers/common');
const login = require('../../../../core/projects/concierge/helpers/loginPage');
const landing = require('../../../../core/projects/concierge/helpers/landingPage');
const planner = require('../../../../core/projects/concierge/helpers/planner');

//let CUSTOMERNAME;
//const setName = (name) => CUSTOMERNAME = name;
//exports.CUSTOMERNAME = setName(name);

describe('Smoke Test: Add Appointment', () => {
  before((done) => {
    common.goTo(done);
  });

  describe('Verify Login Screen', () => {
    it('Should navigate to the login screen', (done) => {
      login.verifyLoginScreen(done, true);
    });
  });
  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Login', () => {
    it('Should login as "testauto"', (done) => {
      login.loginUser(done,true, 'testauto', 'qaUser@123');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 10 seconds', (done) => {
      common.pause(done, 10000);
    });
  });

  describe('Click the Planner menu option', () => {
    it('Should open planner sections', (done) => {
      landing.navigateIcons(done, 'plannerIcon', true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 10 seconds', (done) => {
      common.pause(done, 10000);
    });
  });

  describe('Change the type and Open Appointment Form', () => {
    it('Should open the appointment form from the Planner', (done) => {
      planner.apptToggle(done, true, "Create Stuff Appointment");
    });
  });
  describe('Pausing', () => {
    it('Should pause the test for 8 seconds', (done) => {
      common.pause(done, 8000);
    });
  });

  describe('Add Subject', () => {
    it('Should add a subject to the Subject field', (done) => {
      planner.enterValue(done, true, "modalSubject", 'Automation Test Appointment');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 3 seconds', (done) => {
      common.pause(done, 3000);
    });
  });

  describe('Add Status', () => {
    it('Should add a status to the Status field', (done) => {
      planner.selectValue(done, true, "modalStatus", 'INPROGRESS');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });
  describe('Add Priority', () => {
    it('Should add priority to the Priority field', (done) => {
      planner.selectValue(done, true, "modalPriority", 'MEDIUM');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });
  describe('Save the Task', () => {
    it('Should click the DONE button ', (done) => {
      planner.save(done, true);
    });
  });
  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });
  describe('Verify Added Appointment', () => {
    it('Should verify that the Appointment is displayed on Planner Page', (done) => {
      planner.verifyAddedTaskAppt(done, true, 'Automation Test Appointment');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });
  describe('Logout', () => {
    it('Should logout the current user', (done) => {
      login.logoutUser(done, true, true);
    });
  });
  describe('Test Completed: Cleaning up', () => {
    it('Should pause the test for 10 seconds', (done) => {
      common.pause(done, 10000);
    });
  });
})
