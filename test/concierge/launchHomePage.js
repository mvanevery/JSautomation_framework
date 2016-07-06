const common = require('../core/projects/concierge/helpers/common');

// common.closeBrowser();

describe('Open Concierge', () => {
  before((done) => {
    common.openBrowser(done);
  });

  describe('Verify Concierge Homepage', () => {
    it('Should have the homepage title = Concierge', (done) => {
      common.getPageTitle(done);
    });
  });

  // assert.equal('Test', 'Test', 'The page title failed expected result.');

  // after(function (done) {
  // 	common.end(done);
  // });
});
