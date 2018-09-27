const TestDataEnvironment = require('./resources/test-data-environment.js');
const jasmineReporters = require('jasmine-reporters');

const testDataEnvironment = new TestDataEnvironment();

// conf.js
exports.config = {
  restartBrowserBetweenSuites: true,
  specs: ['**/*.spec.js'],
  suites: {
    e2e: 'e2e/**/*.spec.js',
  },
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['disable-infobars=true'],
      prefs: {
        credentials_enable_service: false,
        download: {
          prompt_for_download: false,
          default_directory: './downloads',
        },
      },
    },
  },
  jasmineNodeOpts: {},
  onPrepare() {
    const env = jasmine.getEnv();
    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();
    env.addReporter(new jasmineReporters.TapReporter({
    }));
  },
  params: testDataEnvironment,
};
