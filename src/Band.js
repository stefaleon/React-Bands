import React, { Component } from 'react';

class Band extends Component {
  render() {
    const { name, image, story } = this.props;
    const members = this.props.members.map((member, index) => (
      <li key={index}>{member}</li>
    ));
    return (
      <div>
        <div>{name}</div>
        <img src={image} alt={name} />
        <ul>{members}</ul>
        <p>{story}</p>
      </div>
    );
  }
}

export default Band;
