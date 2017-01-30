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
    return (
      <div>
        {
          this.numbers.map(function(number) {
            return <li key={number['_id']}>{number.number}</li>
          })
        }
      </div>
    )
  }
}

export default Out;

style = {}
