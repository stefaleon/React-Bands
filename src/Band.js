import React, { Component } from 'react';

class Band extends Component {
  render() {
    const { name } = this.props;
    const members = this.props.members.map((member, index) => (
      <li key={index}>{member}</li>
    ));
    return (
      <div>
        <div>{name}</div>
        <ul>{members}</ul>
      </div>
    );
  }
}

export default Band;
