'use strict';

// configuration-model.js - A sequelize model
//
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const configuration = sequelize.define('configurations', {
    text: {
      type: Sequelize.STRING,
      allowNull: false
    }
    tiempoEntreLlamadas: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 60
    },
    intentosIntroducirPin: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0000
    },
    numeroAlternativo1: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 000000000
    },
    numeroAlternativo2: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 000000000
    },
    emailAlternativo: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "email"
    },
    intervaloEjecucionInicio: {
      type: Sequelize.STRING,
      allowNull: false
    },
    intervaloEjecucionFin: {
      type: Sequelize.STRING,
      allowNull: false
    },
    activo: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    emailLog: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: 60
    }
  }, {
    freezeTableName: true
  });

  configuration.sync();

  return configuration;
};
