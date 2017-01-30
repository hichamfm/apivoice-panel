import React, {Component} from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  Button,
  Col,
  ControlLabel,
  Checkbox,
  Panel,
  Accordion
} from 'react-bootstrap';
import AddNumber from 'Index/Forms/AddNumber';
import MessageAskPin from 'Index/Forms/MessageAskPin';
import AlternativeNumber1 from 'Index/Forms/AlternativeNumber1';
import AlternativeNumber2 from 'Index/Forms/AlternativeNumber2';
import TimeBetweenCalls from 'Index/Forms/TimeBetweenCalls';
import IntentosPin from 'Index/Forms/IntentosPin';
import IntervalInit from 'Index/Forms/IntervalInit';
import IntervalEnd from 'Index/Forms/IntervalEnd';
import Active from 'Index/Forms/Active';
import PinLength from 'Index/Forms/PinLength';
import MessageAfterAuth from 'Index/Forms/MessageAfterAuth';
import MessageRetryPin from 'Index/Forms/MessageRetryPin';
let style;

class Out extends Component {
  constructor() {
    super();
    this.launch = this.launch.bind(this);
  }

  launch() {
    let launcherService = window.server.service('launchers');
    launcherService.create({call: true});
  }

  render() {
    return (
      <div>
          <MessageAskPin/>
          <PinLength/>
          <MessageRetryPin/>
          <MessageAfterAuth/>
          <AlternativeNumber1/>
          <AlternativeNumber2/>
          <TimeBetweenCalls/>
          <IntentosPin/>
          <IntervalInit/>
          <IntervalEnd/>
          <Active/>
          <Button onClick={this.launch}>launch call</Button>
      </div>
    )
  }
}

export default Out;

style = {}
