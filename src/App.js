import React, { Component } from "react";
//import AddNewsPost from "./components/AddNewsPost/AddNewsPost";
import NewsPost from "./NewsPost";
import generateId from "./helpers/generateId";
import "./App.css";

class App extends Component {
  state = {
    newsInput: "",
    news: []
  };

  addNewPost = () => {
    const { newsInput, news } = this.state;

    const id = generateId();
    const newPost = { id, text: newsInput };

    this.setState({
      news: [...news, newPost],
      newsInput: ""
    });
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({ newsInput: value });
  };

  handleKeyDown = event => {
    const isEnterKey = event.keyCode === 13;
    if (!isEnterKey) return;

    this.addNewPost();
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({ newsInput: value });
  };

  handleKeyDown = event => {
    const isEnterKey = event.keyCode === 13;
    if (!isEnterKey) return;

    this.addNewPost();
  };

  render() {
    const { news, newsInput } = this.state;

    return (
      <div className="App">
        <div className="add-new-post">
          <input
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            value={newsInput}
            placeholder="What's new?"
          />

          <button className="add-button" onClick={this.addNewPost}>
            Add post
          </button>
        </div>

        <div className="news-list">
          {news.map(post => <NewsPost key={post.id} text={post.text} />)}
        </div>
      </div>
    );
  }
}

export default App;
