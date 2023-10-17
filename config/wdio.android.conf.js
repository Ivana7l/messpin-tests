const path = require('path');
const { config } = require('./wdio.shared.conf');

// ====================
// Runner Configuration
// ====================
//
config.port = 4723;

//
// ============
// Specs
// ============
config.specs = [
  path.join(process.cwd(), './tests/specs/*.spec.ts')
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: "Android",
    // "appium:platformVersion": "10.0",
    "appium:deviceName": "Nexus_4_API_34",
    "appium:automationName": "UIAutomator2",
    "appium:app": "C:/Users/ivana/Desktop/MesspinTests/app/messpin-debug.apk",
    'appium:appPackage': 'com.wahrcoder.messpin',
    'appium:appWaitActivity': 'com.wahrcoder.*',
    'appium:noReset': true,
    "appium:autoGrantPermissions": true
  }
]

config.maxInstances = 1;

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = [['appium', {
  args: {
    address: 'localhost',
    port: 4723,
    relaxedSecurity: true
  },
  logPath: './'
}]];

exports.config = config;
