var _ = require('underscore');
var base = require('./base.karma.conf.js');

var browsers = {
  sl_chrome: {
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'Windows 7',
    version: '35'
  },
  sl_firefox: {
    base: 'SauceLabs',
    browserName: 'firefox',
    version: '30'
  },
  sl_ios_safari: {
    base: 'SauceLabs',
    browserName: 'iphone',
    platform: 'OS X 10.9',
    version: '7.1'
  },
  sl_ie_11: {
    base: 'SauceLabs',
    browserName: 'internet explorer',
    platform: 'Windows 8.1',
    version: '11'
  }
};

module.exports = function(config) {
  config.set(_.defaults({
    reporters: ['saucelabs', 'spec'],

    sauceLabs: {
        public: 'public',
    },

    browsers: Object.keys(browsers),

    customLaunchers: browsers
  }, base));
};
