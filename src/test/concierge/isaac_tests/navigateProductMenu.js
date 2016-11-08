/* Author: Isaac Myman
   Test Rails: https://madmobile.testrail.net/index.php?/cases/view/1247
 */


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
  it('Should pause the test for 5 seconds', (done) => {
    common.pause(done, 5000);
  });
});

describe('Click the product catalog nav button', () => {
  it('Should open the product catalog menu drawer', (done) => {
    common.navProduct(done);
  });
});

describe('Pausing', () => {
  it('Should pause the test for 2 seconds', (done) => {
    common.pause(done, 5000);
  });
});

describe('Click Apparel', () => {
  it('Should transition to the Apparel category menu', (done) => {
    common.selectApparel(done);
  });
});

describe('Pausing', () => {
  it('Should pause the test for 2 seconds', (done) => {
    common.pause(done, 5000);
  });
});

describe('Select Sweaters', () => {
  it('Should close the product catalog menu and display a PLP', (done) => {
    common.selectSweaters(done);
  });
});

describe('Pausing', () => {
  it('Should pause the test for 5 seconds', (done) => {
    common.pause(done, 5000);
  });
});


describe('Verify User is on the Sweaters PLP', () => {
  it('Should show the word Sweaters in the header', (done) => {
    common.verifyPLPHeader(done);
  });
});

after((done) => {
  common.end(done);
});
/**
 * Created by imyman on 11/8/16.
 */
