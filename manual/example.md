### Test Step Breakdown


    describe('Pausing', () => { 
        -- This line is to describe what action is being taken in this step 
    it('Should pause the test for 5 seconds', (done) => { 
        -- This line describes what the step is actually doing or rather supposed to be doing 
    common.pause(done, 2500); 
         -- This line is what function is being called in this step. For instance 'common.pause()', 'common' is the js file and 'pause' is 
     the function within that file that is being executed.   

### Test Example

     describe('Smoke Test: Login as "ssales"', () => {
      before((done) => {
        common.openBrowser(done);
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
          common.loginSsales(done);
        });
      });

      describe('Pausing', () => {
        it('Should pause the test for 5 seconds', (done) => {
          common.pause(done);
        });
      });

      describe('Verify Concierge Screen', () => {
        it('Should navigate to the Concierge screen', (done) => {
          common.verifyConciergeScreen(done);
        });
      });

      after((done) => {
        common.end(done);
      });
    });
