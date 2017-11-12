import React, { Component } from "react";
import Comment from "./Comment";
import generateId from "./helpers/generateId";
import "./NewsPost.css";

export class NewsPost extends Component {
  state = {
    commentInput: '',
    comments: []
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({ commentInput: value });
  };

  handleKeyDown = event => {
    const isEnterKey = event.keyCode === 13;
    if (!isEnterKey) return;

    this.addComment();
  };

  addComment = () => {
    const { commentInput, comments } = this.state;
    const id = generateId();

    const newComment = { text: commentInput, id };

    this.setState({
      comments: [...comments, newComment],
      commentInput: ''
    });        
  };

  handleDelete = id => {
    const comments = this.state.comments.filter(item => item.id !== id);
    this.setState(state => ({...state, comments}));
  };

  render() {
    const { text } = this.props;
    const { comments, commentInput } = this.state;

    return (
      <div className="news-post">
        <p>{text}</p>

        <div className="comments-list">
          {comments.map(comment => (
            <Comment
              id={comment.id}
              key={comment.id}
              text={comment.text}
              onDelete={this.handleDelete}
            />
          ))}
        </div>

        <input
          className="new-comment"
          placeholder="Write a comment..."
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={commentInput}
        />

        <button className="add-comment" onClick={this.addComment}>
          Add comment
        </button>
      </div>
    );
  }
}

export default NewsPost;
