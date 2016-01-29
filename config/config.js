var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'livechat'
    },
    port: 3000,
    db: 'mysql://root:@localhost/livechat',
  //mysql://user:pass@host/db
  },

  test: {
    root: rootPath,
    app: {
      name: 'livechat'
    },
    port: 3000,
    db: 'mysql://localhost/livechat-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'livechat'
    },
    port: 3000,
    db: 'mysql://localhost/livechat-production'
  }
};

module.exports = config[env];
