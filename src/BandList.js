import React, { Component } from 'react';
import Band from './Band';
import './BandList.css';

class BandList extends Component {
  static defaultProps = {
    bands: []      
  }

  render() {
    const bands = this.props.bands.map((band, index) => (
      <Band key={index} {...band} />
    ));
    return (
      <div className="band-list">
        {bands}
      </div>
    );
  }
}

export default BandList;
