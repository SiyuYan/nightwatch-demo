const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber.json',
  output: 'reports/report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  screenshotsDirectory: 'screenshots/',
  storeScreenshots: true,
  metadata: {
    "Browser": "Chrome  54.0.2840.98",
    "Parallel": "Scenarios",
    "Executed": "Remote"
  }
};

reporter.generate(options);
    
 
