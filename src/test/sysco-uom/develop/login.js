const login = require('../../../core/projects/sysco-uom/helpers/login');
const common = require('../../../core/projects/sysco-uom/helpers/common');
const home = require('../../../core/projects/sysco-uom/helpers/home');

describe('Sysco UOM Stuffs', () => {
  before((done) => {
    common.goToAppium(done);
  });
  describe('Setting up the site', () => {
    it('should set up the site to test', (done) => {
      common.pause(done, 5000);
    });
  });
  describe('Log in to the app', () => {
    it('should Login', (done) => {
      login.login(done);
    });
  });
  describe('Pausing', () => {
    it('Should pause the test for 10 seconds', (done) => {
      common.pause(done, 5000);
    });
  });
  describe('Click Expense from homepage', () => {
    it ('should click the Expense Categories link', (done) => {
      home.gotoExpense(done, 'Expense Categories');
    });
  });
  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });
  //describe('Click Food from Expense Categories', () => {
  //  it ('should click Food from Expense Categories link', (done) => {
  //    home.selectFood(done);
  //  });
  //});
  //describe('Pausing', () => {
  //  it('Should pause the test for 2 seconds', (done) => {
  //    common.pause(done, 2000);
  //  });
  //});
  describe('Click back icon in Navigation bars', () => {
    it ('should click the Back icon in navigation', (done) => {
      common.back(done);
    });
  });
  describe('Pausing', () => {
    it('Should pause the test for 5 seconds', (done) => {
      common.pause(done, 5000);
    });
  });
  //after((done) => {
  //  common.end(done);
  //});
});
