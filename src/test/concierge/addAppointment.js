const common = require('../../core/projects/concierge/helpers/common');

describe('Smoke Test: Add Appointment', () => {
  before((done) => {
    common.goTo(done);
  });

  describe('Enter Provision Key', () => {
    it('Should populate the provision key', (done) => {
      common.enterProvisionTalbots(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done);
    });
  });

  describe('Verify Login Screen', () => {
    it('Should navigate to the login screen', (done) => {
      common.verifyLoginScreen(done);
    });
  });

  describe('Login', () => {
    it('Should login as "ssales"', (done) => {
      common.loginUser(done, 'qaUser', 'qaUser@123');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done);
    });
  });

  describe('Click Planner', () => {
    it('Should take user to the Planner', (done) => {
      common.navPlanner(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done);
    });
  });

  describe('Open Appointment Form', () => {
    it('Should open the appointment form from the Planner', (done) => {
      common.addAppointmentForm_fromPlanner(done);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done);
    });
  });

  describe('Add Appointment', () => {
    it('Should add an appointment for 05/01/2016', (done) => {
      common.addAppointment_05012016(done);
    });
  });


  //  after(function (done) {
  // 	common.end(done);
  // });
});
