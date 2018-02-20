import React, { Component } from 'react';
import logo from './logo.svg';
import Band from './Band';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>  */}
        <Band name="The Clash" members={[ 'Joe', 'Mick', 'Paul', 'Topper']}/>
      </div>
    );
  }
}

export default App;
