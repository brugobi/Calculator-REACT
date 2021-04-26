import '../App.css';
import { Component } from 'react';
import Display from './Display';
import ButtonPannel from './ButtonPanel';
import Calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(operation) {
    const stateResult = Calculate(this.state, operation);
    this.setState(stateResult);
  }

  render() {
    const { total, next, operation } = this.state;
    let display = '0';
    if (next) {
      display = `${total}${operation}${next}`;
    } else if ((operation && operation !== '=') && total) {
      display = `${total}${operation}`;
    } else {
      display = total || '0';
    }

    return (
      <>
        <div className="calculator">
          <Display result={display} />
          <ButtonPannel onClick={this.handleClick} />
        </div>
      </>
    );
  }
}

export default App;
