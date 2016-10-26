/**
 * Created by mvanevery on 10/11/16.
 */
const common = require('../../core/projects/concierge/helpers/common');

describe('Smoke Test: Add Appointment', () => {
  before((done) => {
    common.openBrowser(done);
  });

  describe('Verify Login Screen', () => {
    it('Should navigate to the login screen', (done) => {
      common.verifyLoginScreen(done);
    });
  });

  describe('Login', () => {
    it('Should login as "qaUser"', (done) => {
      common.loginUser(done, 'qaUser', 'qaUser@123');
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
  //

  describe('Click the Add Appointment + Symbol', () => {
    it('Should open a Modal asking for appointment details', (done) => {
      common.navPlanner(done, 'Planner');
    });
  });

  //describe('Click the Add Appointment + Symbol', () => {
  //  it('Should open a Modal asking for appointment details', (done) => {
  //    common.addAppointment(done, 'Create Appointment');
  //  });
  //});

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 2000);
    });
  });
  //
  //describe('Add Subject', () => {
  //  it('Should add a subject to the Subject field', (done) => {
  //    common.addSubject(done, 'Automation Test Appointment');
  //  });
  //});
  //
  //describe('Pausing', () => {
  //  it('Should pause the test for 2 seconds', (done) => {
  //    common.pause(done, 2000);
  //  });
  //});
  //
  //describe('Add Start Date', () => {
  //  it('Should add a start date to the Start Date field', (done) => {
  //    common.addStartDate(done, '2016-10-11T12:00');
  //  });
  //});
  //
  //describe('Pausing', () => {
  //  it('Should pause the test for 2 seconds', (done) => {
  //    common.pause(done, 2000);
  //  });
  //});
  //
  //describe('Add Subject', () => {
  //  it('Should add an end date to the End Date field', (done) => {
  //    common.addEndDate(done, '2016-10-11T15:00');
  //  });
  //});
  //
  //describe('Pausing', () => {
  //  it('Should pause the test for 2 seconds', (done) => {
  //    common.pause(done, 2000);
  //  });
  //});
  //
  //describe('Add Status', () => {
  //  it('Should add a status to the Status field', (done) => {
  //    common.addStatus(done, 'IN_PROGRESS');
  //  });
  //});
  //
  //describe('Pausing', () => {
  //  it('Should pause the test for 2 seconds', (done) => {
  //    common.pause(done, 2000);
  //  });
  //});
  //describe('Add Priority', () => {
  //  it('Should add priority to the Priority field', (done) => {
  //    common.addPriority(done, 'MEDIUM');
  //  });
  //});
  //
  //describe('Pausing', () => {
  //  it('Should pause the test for 2 seconds', (done) => {
  //    common.pause(done, 2000);
  //  });
  //});



  //  after(function (done) {
  // 	common.end(done);
  // });
});
