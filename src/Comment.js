import React, { Component } from "react";
import "./Comment.css";

class Comment extends Component {
  handleDelete = () => {
    const { id, onDelete } = this.props;
    onDelete(id);
  };

  render() {
    const { text } = this.props;

    return (
      <div className="comment-holder">
        <div className="comment-text">
          <p>
            {text}
            <span onClick={this.handleDelete} className="delete">
              X
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Comment;
