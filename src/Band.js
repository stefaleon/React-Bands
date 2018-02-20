import React, { Component } from 'react';
import MemberList from './MemberList';

class Band extends Component {
  render() {
    const { name, image, members, story } = this.props;

    return (
      <div className="band-card">
        <h2>{name}</h2>
        <img className="band-image" src={image} alt={name} />
        <MemberList members={members}/>
        <p className="band-story">{story}</p>
      </div>
    );
  }
}

export default Band;
