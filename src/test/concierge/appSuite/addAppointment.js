/**
 * Created by mvanevery on 10/11/16.
 */
const common = require('../../../core/projects/concierge/helpers/common');

describe('Smoke Test: Add Appointment', () => {
  before((done) => {
    common.goTo(done);
  });

  describe('Verify Login Screen', () => {
    it('Should navigate to the login screen', (done) => {
      common.verifyLoginScreen(done);
    });
  });

  describe('Login', () => {
    it('Should login as "qauser"', (done) => {
      common.loginUser(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 10 seconds', (done) => {
      common.pause(done, 10000);
    });
  });

  //describe('Select a Store', () => {
  //  it('Should input Store ID', (done) => {
  //    common.specifyStore(done, '326');
  //  });
  //});
  //
  //describe('Pausing', () => {
  //  it('Should pause the test for 5 seconds', (done) => {
  //    common.pause(done, 5000);
  //  });
  //});


  describe('Click the Planner menu option', () => {
    it('Should open planner sections', (done) => {
      common.navPlanner(done, "Planner");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 10000);
    });
  });

  describe('Change the type and Open Task Form', () => {
    it('Should open the appointment form from the Planner', (done) => {
      common.taskToggle(done, "Create Task");
    });
  });
  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 7500);
    });
  });

  describe('Add Subject', () => {
    it('Should add a subject to the Subject field', (done) => {
      common.addSubject(done, 'Automation Test Appointment');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });

  //describe('Add Start Date', () => {
  //  it('Should add a start date to the Start Date field', (done) => {
  //    common.addStartDate(done, 'Oct 27,2016, 3:00 PM');
  //  });
  //});

  //describe('Pausing', () => {
  //  it('Should pause the test for 2 seconds', (done) => {
  //    common.pause(done, 2000);
  //  });
  //});

  //describe('Add End Date', () => {
  //  it('Should add an end date to the End Date field', (done) => {
  //    common.addEndDate(done, 'Oct 27,2016, 4:00 PM');
  //  });
  //});
  //
  //describe('Pausing', () => {
  //  it('Should pause the test for 2 seconds', (done) => {
  //    common.pause(done, 2000);
  //  });
  //});
  //
  describe('Add Status', () => {
    it('Should add a status to the Status field', (done) => {
      common.addStatus(done, 'INPROGRESS');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 4000);
    });
  });
  describe('Add Priority', () => {
    it('Should add priority to the Priority field', (done) => {
      common.addPriority(done, 'MEDIUM');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });
  describe('Save the Task', () => {
    it('Should click the DONE button ', (done) => {
      common.saveTask(done);
    });
  });
  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });
  describe('Verify Added Task', () => {
    it('Should verify that the Task is displayed on Planner Page', (done) => {
      common.verifyAddedTask(done, 'Automation Test Appointment');
    });
  });
  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });
  describe('Delete the Task', () => {
    it('Should click the DONE button and remove the task ', (done) => {
      common.deleteTask(done);
    });
  });
  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 5000);
    });
  });
  describe('Logout', () => {
    it('Should Logout from the current user', (done) => {
      common.logoutUser(done);
    });
  });
  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });



//    after(function (done) {
//   	common.end(done);
//   });
})
