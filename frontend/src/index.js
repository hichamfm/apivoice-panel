import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import Index from 'Index/Index';

const feathers = require('feathers/client')
const socketio = require('feathers-socketio/client');
const authentication = require('feathers-authentication/client');
const hooks = require('feathers-hooks');
const io = require('socket.io-client');

const socket = io('http://localhost');
window.server = feathers()
  .configure(hooks())
  .configure(socketio(socket))
  .configure(authentication({ storage: window.localStorage }));

ReactDOM.render( <
        Index > < /Index>, document.getElementById('root'));
