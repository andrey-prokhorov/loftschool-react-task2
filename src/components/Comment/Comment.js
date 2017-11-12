import React, { Component } from "react";
import "./Comment.css";

class Comment extends Component {
  
  onDelete = () => {
    const { id, onDelete } = this.props;
    onDelete(id);
  };

  render() {
    const { text } = this.props;

    return (
      <div className="comment-holder">
        <div className="comment-text">
          {text}

          <span onClick={this.onDelete} className="delete">
            X
          </span>
        </div>
      </div>
    );
  }
}

export default Comment;
