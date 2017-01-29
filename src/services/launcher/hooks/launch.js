'use strict';
const request = require('request');
// src\services\call\hooks\launch.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    request({
      uri: "https://apivoice.netelip.com",
      method: "POST",
      form: {
        "api": "prueba",
        "token": "c9202dc65e26cd89f201c7a3c9fb68637abbc64b23c852952a98c4d5d5cbca8f",
        "src": "0034851000750",
        "dst": "0034672344868",
        "duration": "30",
        "typedst": "pstn"
      }
    }, (err, res, body) => {
      console.log('Body: ', body);
    });
  };
};
