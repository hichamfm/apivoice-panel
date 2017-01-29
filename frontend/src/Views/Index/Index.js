import React, {Component} from 'react';
import {
  Panel,
  Col,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from 'react-bootstrap';
import Layout from 'Layout/Layout';
import Config from 'Index/Config';
import Data from 'Index/Data';
let style;

class Out extends Component {
  constructor() {
    super();
    this.state = {
      auth: false,
      user: '',
      pass: ''
    }
    this.auth = this.auth.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  auth() {
    let self = this;
    window.server.authenticate({type: 'local', 'email': this.state.user, 'password': this.state.pass}).then(function(result) {
      self.setState({auth: true});
    }).catch(function(error) {
      console.error('Error authenticating!', error);
    });
  }

  handleKeyPress(target) {
    if (target.charCode == 13) {
      this.auth()
    }
  }

  render() {
    if (this.state.auth) {
      return (
        <Layout>
          <div style={style.content}>
            <Col md={3}>
              <Panel header="Números" bsStyle="primary">
                <Data/>
              </Panel>
            </Col>
            <Col md={9}>
              <Panel header="Configuración" bsStyle="primary">
                <Config/>
              </Panel>
            </Col>
          </div>
        </Layout>
      )
    } else {
      return (
        <div style={style.content}>
          <Col mdOffset={3} md={6} sm={11}>
            <Panel header="Login" bsStyle="primary">
              <Form horizontal>
                <FormGroup>
                  <Col componentClass={ControlLabel} sm={2}>
                    Usuario
                  </Col>
                  <Col sm={10}>
                    <FormControl onKeyPress={this.handleKeyPress} onChange={(event) => {
                      this.setState({user: event.target.value})
                    }} type="text"/>
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col componentClass={ControlLabel} sm={2}>
                    Contraseña
                  </Col>
                  <Col sm={10}>
                    <FormControl onKeyPress={this.handleKeyPress} onChange={(event) => {
                      this.setState({pass: event.target.value})
                    }} type="password"/>
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={1} sm={10}>
                    <Button onClick={this.auth}>
                      Login
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </Panel>
          </Col>
        </div>
      )
    }
  }
}

export default Out;

style = {
  content: {
    marginLeft: '50%',
    transform: 'translateX(-50%)',
    marginTop: '6em',
    width: '80%',
    textAlign: 'center'
  }
}
