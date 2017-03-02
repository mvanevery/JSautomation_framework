### Test Step Breakdown


   This line is to describe what action is being taken in this step

        describe('Pausing', () => { 

   This line describes what the step is actually doing or rather supposed to be doing     

        it('Should pause the test for 5 seconds', (done) => { 
         
   This line is what function is being called in this step. For instance 'common.pause()', 'common' is the js file and 'pause' is 
     the function within that file that is being executed.   

        common.openBrowser(done); 


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

      describe('Verify Concierge Screen', () => {
        it('Should navigate to the Concierge screen', (done) => {
          common.verifyConciergeScreen(done);
        });
      });

      after((done) => {
        common.end(done);
      });
    });
