/** Author: Isaac Myman
   Test Rails Link: https://madmobile.testrail.net/index.php?/cases/view/1667    https://madmobile.testrail.net/index.php?/cases/view/1665
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

describe('Select the 1st item on the sweaters PLP', () => {
  it('Should navigate user to PDP', (done) => {
    common.selectItem1(done);
  });
});

describe('Pausing', () => {
  it('Should pause the test for 5 seconds', (done) => {
    common.pause(done, 5000)
  });
});

describe('Select 1st color variant option', () => {
  it('Should select 1st color variant option', (done) => {
    common.selectColor(done);
  });
});

describe('Pausing', () => {
  it('Should pause the test for 2 seconds', (done) => {
    common.pause(done, 5000);
  });
});

describe('Verify picture has changed', () => {
  it('Should change picture to reflect color variant selection', (done) => {
    common.verifyPDPImage(done);
  });
});

describe('Select petites size type variant option', () => {
  it('Should select petites variant option', (done) => {
    common.selectSizeType(done);
  });
});

describe('Pausing', () => {
  it('Should pause the test for 2 seconds', (done) => {
    common.pause(done, 5000);
  });
});

describe('Select PM size variant option', () => {
  it('Should select PM variant option', (done) => {
    common.selectSize(done);
  });
});

describe('Pausing', () => {
  it('Should pause the test for 2 seconds', (done) => {
    common.pause(done, 5000);
  });
});

describe('Verify your price displays', () => {
  it('Should now show your price field and original price', (done) => {
    common,verifyYourPrice(done);
  });
});


/**
 * Created by imyman on 11/8/16.
 */
