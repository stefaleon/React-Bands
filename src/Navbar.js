import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  static defaultProps = {
    onNewBand() {}
  };
  render() {
    return (
      <header>
        <h3><a>Bands App</a></h3>
        <nav>
          <li><a onClick={this.props.onNewBand}>New Band</a></li>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
        </nav>
      </header>
    );
  }
}

export default Navbar;
