import React, { Component } from "react";
import "./AddNewPost.css";
import generateId from "../../helpers/generateId";

export class AddNewsPost extends Component {
  state = {
    postInput: '',
    comments: []
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({ postInput: value });
  };

  handleKeyDown = event => {
    const isEnterKey = event.keyCode === 13;
    if (!isEnterKey) return;

    this.addNewPost();
  };

  addNewPost = () => {
    const { postInput, comments } = this.state;

    const id = generateId();
    const newPost = { id, text: postInput, comments };

    this.props.addNewPost(newPost);
    this.setState({ postInput: '' });
  };

  render() {
    const { postInput } = this.state;

    return (
      <div>
        <input
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={postInput}
          placeholder="What's new?"
        />

        <button className="add-button" onClick={this.addNewPost}>
          Add post
        </button>
      </div>
    );
  }
}

export default AddNewsPost;
