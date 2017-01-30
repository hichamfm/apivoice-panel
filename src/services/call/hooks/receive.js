'use strict';

// src\services\call\hooks\receive.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    let configService = hook.app.service('configs');
    console.log('DATA', hook.data);


    if (!hook.data.userfield || hook.data.userfield === '') {
        hook.result = JSON.stringify({
            "command": "speak_getdtmf",
            "options": "netelip;Pedro;Introduce el pin de cuatro digitos;7000;4;1",
            "userfield": "1"
        }, null, 4);
    } else if (hook.data.userfield >= 1) {
        if (hook.data.dtmf && hook.data.dtmf !== '' && hook.data.dtmf.length === 4) {
            hook.result = JSON.stringify({
                "command": "speak",
                "options": "netelip;Pedro;Autenticacion correcta",
                "userfield": "-1"
            }, null, 4);
        } else {
            hook.data.userfield++;
            hook.result = JSON.stringify({
                "command": "speak_getdtmf",
                "options": `netelip;Pedro;Intento numero ${hook.data.userfield}. Introdce el pin de cuatro digitos;7000;4;1`,
                "userfield": ++hook.data.userfield
            }, null, 4);
        }
    } else if (hook.data.userfield == -1) {
        hook.result = JSON.stringify({
            "command": "hangup",
            "options": "",
            "userfield": ""
        }, null, 4);
    }
  };
};
