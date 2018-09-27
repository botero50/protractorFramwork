// PO imports
// const PageObject  = require('../page-objects/a-page-object.page.js');

describe('Daemon Sets', () => {
  // const aPageObjectInstance = new PageObject();

  beforeAll(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;
    browser.manage().deleteAllCookies();
    browser.driver.get('https://www.google.com');
  });

  afterAll(() => {
    browser.manage().deleteAllCookies();
  });

  it('CRUD Opetations', () => {
    const aConstant = 'example';

    // Create
  });
});
