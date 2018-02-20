import React, { Component } from 'react';

class Band extends Component {
  render() {
    const { name, image, story } = this.props;
    const members = this.props.members.map((member, index) => (
      <span key={index}> &#9642;{member} </span>
    ));
    return (
      <div className="band-card">
        <h2>{name}</h2>
        <img className="band-image" src={image} alt={name} />
        <div className="band-members">
          <span><strong>Members: </strong></span>
          <span>{members}</span>
        </div>
        <p className="band-story">{story}</p>
      </div>
    );
  }
}

export default Band;
