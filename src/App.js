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
        <Band
          name="The Clash"
          members={[ 'Joe', 'Mick', 'Paul', 'Topper']}
          story="The Clash were an English rock band formed in London in 1976. as part of the original wave of British punk rock. They have also contributed to the post-punk and new wave movements that emerged in the wake of punk and employed elements of a variety of genres including reggae, dub, funk, ska and rockabilly."
          image={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Clash_21051980_12_800.jpg/600px-Clash_21051980_12_800.jpg"}
        />
      </div>
    );
  }
}

export default App;
