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
        <Panel header="Añadir número">
          <AddNumber/>
        </Panel>
        <Panel header="Launcher">
          <Button onClick={this.launch}>launch call</Button>
        </Panel>
      </div>
    )
  }
}

export default Out;

style = {}
