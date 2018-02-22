import React, { Component } from 'react';
import Band from './Band';
import './BandList.css';

class BandList extends Component {  

  render() {
    const bands = this.props.bands.map( band => (
      <Band key={band.id} {...band} />
    ));
    return (
      <div className="band-list">
        {bands}
      </div>
    );
  }
}

export default BandList;
