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
  }

  render() {
    <>
      <div>
        <Display />
        <ButtonPannel />
      </div>
    </>;
  }
}

export default App;
