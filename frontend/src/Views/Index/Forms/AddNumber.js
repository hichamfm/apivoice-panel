import React, {Component} from 'react';
import {
    Form,
    FormGroup,
    FormControl,
    Button,
    Col,
    ControlLabel,
    Checkbox,
    Panel
} from 'react-bootstrap';
let style;

class Out extends Component {
    constructor(){
      super();
      this.submit = this.submit.bind(this);
      this.numberService = window.server.service('numbers');
      this.state = {
        number: null
      }
    }

    submit(event){
      this.numberService.create({
        number: this.state.number
      });
    }

    render() {
        return (
            <Form horizontal>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                        Número
                    </Col>
                    <Col sm={10}>
                        <FormControl onChange={(event)=>{this.setState({number: event.target.value})}} type="number" placeholder="Número"/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={1} sm={10}>
                        <Button onClick={this.submit}>
                            Añadir
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

export default Out;

style = {}
