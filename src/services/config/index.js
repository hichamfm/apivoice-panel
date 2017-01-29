'use strict';

const path = require('path');
const NeDB = require('nedb');
const service = require('feathers-nedb');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const db = new NeDB({
    filename: path.join(app.get('nedb'), 'configs.db'),
    autoload: true
  });

  let options = {
    Model: db,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/configs', service(options));

  // Get our initialize service to that we can bind hooks
  const configService = app.service('/configs');

  // Set up our before hooks
  configService.before(hooks.before);

  // Set up our after hooks
  configService.after(hooks.after);
};
