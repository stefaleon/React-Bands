import React, { Component } from 'react';
import Navbar from './Navbar';
import BandList from './BandList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <BandList />
      </div>
    );
  }
}

export default App;
