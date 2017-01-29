'use strict';
const launcher = require('./launcher');
const call = require('./call');
const config = require('./config');
const number = require('./number');
const authentication = require('./authentication');
const user = require('./user');

module.exports = function() {
  const app = this;


  app.configure(authentication);
  app.configure(user);
  app.configure(number);
  app.configure(config);
  app.configure(call);
  app.configure(launcher);
};
