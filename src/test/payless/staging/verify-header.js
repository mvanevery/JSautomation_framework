/**
 * Created by mvanevery on 7/22/2016.
 */
const common = require('../../../core/projects/payless/helpers/common');
const prod = require('../../../core/projects/payless/helpers/common-production');
const home = require('../../../core/projects/payless/helpers/home');

describe('Testing End to End Production', () => {
  before((done) => {
    common.goTo(done);
  });
  describe('Setting up the site', () => {
    it('should set up the site to test', (done) => {
      common.pause(done, 2500);
    });
  });
  describe('Closing Popup', () => {
    it('should close any popup', (done) => {
      common.closePopup(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(done, 1000);
    });
  });
  describe('Verifying header', () => {
    it('should verify header', (done) => {
      home.verifyPromo(done);
    });
  });
  describe('pausing', () => {
    it('should pause the test', (done) => {
      common.pause(done, 1000);
    });
  });
  describe('Verifying banner', () => {
    it('should verify banner', (done) => {
      home.verifyBanners(done);
    });
  });
  after((done) => {
    common.end(done);
  });
})
