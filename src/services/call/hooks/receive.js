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
    console.log('FILES', hook.files);
    // if (!req.fields.userfield || req.fields.userfield === '') {
    //     res.send(JSON.stringify({
    //         "command": "speak_getdtmf",
    //         "options": "netelip;Pedro;Introduce el pin de cuatro digitos;7000;4;1",
    //         "userfield": "1"
    //     }, null, 4));
    // } else if (req.fields.userfield >= 1) {
    //     if (req.fields.dtmf && req.fields.dtmf !== '' && req.fields.dtmf.length === 4) {
    //         res.send(JSON.stringify({
    //             "command": "speak",
    //             "options": "netelip;Pedro;Autenticacion correcta",
    //             "userfield": "-1"
    //         }, null, 4));
    //     } else {
    //         req.fields.userfield++;
    //         res.send(JSON.stringify({
    //             "command": "speak_getdtmf",
    //             "options": `netelip;Pedro;Intento numero ${req.fields.userfield}. Introdce el pin de cuatro digitos;7000;4;1`,
    //             "userfield": ++req.fields.userfield
    //         }, null, 4));
    //     }
    // } else if (req.fields.userfield == -1) {
    //     res.send(JSON.stringify({
    //         "command": "hangup",
    //         "options": "",
    //         "userfield": ""
    //     }, null, 4));
    // }
  };
};
