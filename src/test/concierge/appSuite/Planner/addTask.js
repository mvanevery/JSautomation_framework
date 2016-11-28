/**
 * Project:     Concierge
 * Test Name:   addAppointment
 * Test Steps:  https://madmobile.testrail.com/index.php?/cases/view/1015
 * Author:      Mike Van Every
 * Date:        10/11/2016
 */
const common = require('../../../../core/projects/concierge/helpers/common');
const login = require('../../../../core/projects/concierge/helpers/loginPage');
const landing = require('../../../../core/projects/concierge/helpers/landingPage');
const planner = require('../../../../core/projects/concierge/helpers/planner');

describe('Smoke Test: Add Task', () => {
  before((done) => {
    common.goTo(done);
  });

  describe('Verify Login Screen', () => {
    it('Should navigate to the login screen', (done) => {
      login.verifyLoginScreen(done);
    });
  });

  describe('Login', () => {
    it('Should login as "qauser"', (done) => {
      login.loginUser(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 10 seconds', (done) => {
      common.pause(done, 10000);
    });
  });

  describe('Click the Planner menu option', () => {
    it('Should open planner sections', (done) => {
      landing.navPlanner(done, "Planner");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 10000);
    });
  });

  describe('Change the type and Open Task Form', () => {
    it('Should open the appointment form from the Planner', (done) => {
      planner.taskToggle(done, "Create Task");
    });
  });
  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 7500);
    });
  });

  describe('Add Subject', () => {
    it('Should add a subject to the Subject field', (done) => {
      planner.addSubject(done, 'Automation Test Task');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  describe('Add Status', () => {
    it('Should add a status to the Status field', (done) => {
      planner.addStatus(done, 'INPROGRESS');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 4000);
    });
  });
  describe('Add Priority', () => {
    it('Should add priority to the Priority field', (done) => {
      planner.addPriority(done, 'MEDIUM');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });
  describe('Save the Task', () => {
    it('Should click the DONE button ', (done) => {
      planner.save(done);
    });
  });
  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });
  describe('Verify Added Task', () => {
    it('Should verify that the Task is displayed on Planner Page', (done) => {
      planner.verifyAddedTask(done, 'Automation Test Task');
    });
  });
  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });
  describe('Delete the Task', () => {
    it('Should click the DONE button and remove the task ', (done) => {
      planner.deleteTask(done);
    });
  });
  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 5000);
    });
  });
  describe('Logout', () => {
    it('Should Logout from the current user', (done) => {
      login.logoutUser(done);
    });
  });
  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });
})
