'use strict';

// src\services\call\hooks\receive.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook, next) {
    let configService = hook.app.service('configs');

    configService.find().then((c) => {

      let config = c.data[0];

      if (!hook.data.userfield || hook.data.userfield === '') {
        hook.result = {
          "command": "speak_getdtmf",
          "options": `netelip;Pedro;${config.textoPin};${config.pinLength * 2}000;${config.pinLength};1`,
          "userfield": "1"
        }
      } else if (hook.data.userfield >= 1 && hook.data.userfield < config.intentosIntroducirPin) {
        if (hook.data.dtmf && hook.data.dtmf !== '' && hook.data.dtmf.length === 4) {
          hook.result = {
            "command": "speak",
            "options": `netelip;Pedro;${config.messageAfterAuth}`,
            "userfield": "-1"
          }
        } else {
          hook.data.userfield++;
          hook.result = {
            "command": "speak_getdtmf",
            "options": `netelip;Pedro;${config.textoPin};7000;4;1`,
            "userfield": ++hook.data.userfield
          }
        }
      } else if (hook.data.userfield == -1) {
        hook.result = {
          "command": "hangup",
          "options": "",
          "userfield": ""
        }
      }
      next();
    })
  };
};
