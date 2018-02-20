import React, { Component } from 'react';


class MemberList extends Component {
  static defaultProps = {
    members: []
  }

  render() {
    const members = this.props.members.map((member, index) => (
      <span key={index}> &#9642;{member} </span>
    ));
    return (
      <div className="band-members">
        <span><strong>Members: </strong></span>
        <span>{members}</span>
      </div>
    );
  }

}

export default MemberList;
