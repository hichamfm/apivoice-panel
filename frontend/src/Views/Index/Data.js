import React, {Component} from 'react';
//import {} from 'react-bootstrap';
let style;

class Out extends Component {
  constructor() {
    super();
    let self = this;
    this.numbers = [];
    let numbersService = window.server.service('numbers');
    numbersService.on('created', (number) => {
      this.numbers.push(number);
    })
    numbersService.find().then((numbers) => {
      this.numbers = numbers.data;
      self.forceUpdate();
    })
  }

  render() {
    console.log('numbers ', this.numbers);
    return (
      <div>
        {
          this.numbers.map(function(number) {
            return <li>{number.number}</li>
          })
        }
      </div>
    )
  }
}

export default Out;

style = {}
