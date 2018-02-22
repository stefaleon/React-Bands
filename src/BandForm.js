import React, { Component } from 'react';
import './BandForm.css';

class BandForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      members: [ "" ],
      story: "",
      image: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {}
  handleClose() {}
  handleNewMember() {}

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { name, members, story, image } = this.state;

    let memberinputs = members.map( ( m, i ) => (
      <div className="member-input" key={`member-${i}`}>
        <label htmlFor="band-name-input">Member #{i+1}</label>
          <input
            id={`member-${i}`}
            type="text"
            name={`member-${i}`}
            value={m}
            size={30}
            autoComplete="off"
            placeholder="member"
            onChange={() => {}}
          />
      </div>
    ));



    return (
      <div className="band-form-container">
        <form className="band-form" onSubmit={this.handleSubmit}>
          <button
            className="close-form-button"
            onclick={this.handleClose}
          >
            &#215;
          </button>
          <div className="band-form-name">
            <label htmlFor="band-name-input">Name</label>
            <input
              id="band-name-input"
              key="name"
              name="name"
              type="text"
              value={name}
              size={30}
              autoComplete="off"
              onChange={this.handleChange}
            />
          </div>
          <div className="band-form-image">
            <label htmlFor="band-image-url">Image URL</label>
            <input
              id="band-image-url"
              key="image"
              name="image"
              type="text"
              value={image}
              size={30}
              autoComplete="off"
              onChange={this.handleChange}
            />
          </div>
          {memberinputs}
          <button
            className="add-member-button"
            onclick={this.handleNewMember}
          >
            +
          </button>
          <div className="band-form-story">
            <label htmlFor="band-story-input">Story</label>
            <div>
              <textarea
                id="band-story-input"
                key="story"
                name="story"
                type="text"
                value={story}
                rows='3'
                cols='48'
                autoComplete="off"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="form-submit-button"
            onclick={this.handleClose}
          >
            Add Band
          </button>


        </form>
      </div>
    );
  }
}

export default BandForm;
