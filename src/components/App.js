import '../App.css';
import { Component } from 'react';
import Display from './Display';
import ButtonPannel from './ButtonPanel';
/* eslint-disable no-unused-vars */
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
    return (
      <>
        <div>
          <Display />
          <ButtonPannel onClick={buttonName => this.handleClick(buttonName)} />
        </div>
      </>
    );
  }
}

export default App;
