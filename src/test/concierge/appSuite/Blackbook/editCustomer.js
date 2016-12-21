/**
 * Created by mvanevery on 12/01/16.
 * Project:     Concierge
 * Test Name:   editCustomer
 * Author:      Mike Van Every
 * Date:        12/01/2016
 */


const common = require('../../../../core/projects/concierge/helpers/common');
const login = require('../../../../core/projects/concierge/helpers/loginPage');
const blackbook = require('../../../../core/projects/concierge/helpers/blackbook');
const landing = require('../../../../core/projects/concierge/helpers/landingPage');


 describe('Smoke Test: Edit Customer', () => {
  before((done) => {
    common.goTo(done);
  });

   describe('Verify Login Screen', () => {
     it('Should navigate to the login screen', (done) => {
       login.verifyLoginScreen(done, true);
     });
   });

   describe('Pausing', () => {
     it('Should pause the test for 3 seconds', (done) => {
       common.pause(done, 3000);
     });
   });

   describe('Login', () => {
     it('Should login as "testauto"', (done) => {
       login.loginUser(done, true, 'testauto', 'qaUser@123');
     });
   });

  describe('Pausing', () => {
    it('Should pause the test for 10 seconds', (done) => {
      common.pause(done, 10000);
    });
  });

   describe('Click the Blackbook menu option', () => {
     it('Should open Blackbook sections', (done) => {
       landing.navigateIcons(done, "blackbookIcon", true);
     });
   });
   describe('Pausing', () => {
     it('Should pause the test for 5 seconds', (done) => {
       common.pause(done, 5000);
     });
   });

   describe('Verify Header', () => {
     it('Should verify the header on the Blackbook page', (done) => {
       blackbook.verifyPageHeader(done, true, 'My Clients');
     });
   });

   describe('Pausing', () => {
     it('Should pause the test for 5 seconds', (done) => {
       common.pause(done, 5000);
     });
   });

  describe('Enter First Name', () => {
    it('should enter a name in the first name field', (done) => {
      blackbook.enterValue(done, true, "firstName", "Automation");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 1 seconds', (done) => {
      common.pause(done, 1000);
    });
  });

  describe('Enter Last Name', () => {
    it('should enter a name in the last name field', (done) => {
      blackbook.enterValue(done, true, "lastName", "Test");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 1 seconds', (done) => {
      common.pause(done, 1000);
    });
  });

  describe('Click the Search Customer button', () => {
    it('Should click the search customer button', (done) => {
      blackbook.searchCustomer(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 8 seconds', (done) => {
      common.pause(done, 8000);
    });
  });

  describe('Click the Search Card Avatar', () => {
    it('Should click the search card avatar', (done) => {
      blackbook.selectCustomerCard(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 2 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

   describe('Verify Profile Header', () => {
     it('Should verify the header on the Customer Profile page', (done) => {
       blackbook.verifyPageHeader(done, true, 'Customer Profile');
     });
   });

   describe('Pausing', () => {
     it('Should pause the test for 2 seconds', (done) => {
       common.pause(done, 2000);
     });
   });

  describe('Verify Customer Name', () => {
    it('Should verify the customer name on the Customer Profile page', (done) => {
      blackbook.verifyCustomerName(done, true, 'Automation Test');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Click the Edit Icon', () => {
    it('Should click the edit icon', (done) => {
      blackbook.openEditCustomer(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Enter Last Name', () => {
    it('should enter a name in the last name field', (done) => {
      blackbook.enterValue(done, true, "lastNameModal", "Updated");
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Click the DONE button', () => {
    it('should click the DONE button and save the customer', (done) => {
      blackbook.saveButton(done, true);
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });

  describe('Verify Customer Name', () => {
    it('Should verify the customer name on the Customer Profile page', (done) => {
      blackbook.verifyCustomerName(done, true, 'Automation Updated');
    });
  });

  describe('Pausing', () => {
    it('Should pause the test for 1 seconds', (done) => {
      common.pause(done, 3000);
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
