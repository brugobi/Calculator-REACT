import '../App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import Display from './Display';
import ButtonPannel from './ButtonPanel';
import Calculate from '../logic/calculate';
import Nav from './Nav';
import Home from './Home';
import Quote from './Quote';

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
      <BrowserRouter>
        <>
          <Nav />
          <Switch>
            <Route
              exact
              path="/calculator"
              render={() => (
                <div className="calculator">
                  <Display result={display} />
                  <ButtonPannel onClick={this.handleClick} />
                </div>
              )}
            />
            <Route exact path="/" component={Home} />
            <Route exact path="/quote" component={Quote} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
