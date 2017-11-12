import React, { Component } from "react";
import AddNewsPost from "./components/AddNewsPost/AddNewsPost";
import NewsPost from "./components/NewsPost/NewsPost";
import "./App.css";

class App extends Component {
  state = {
    news: [],
    test: true
  };

  addNewPost = newPost => {
    const { news } = this.state;

    this.setState({
      news: [...news, newPost]
    });
  };

  render() {
    const { news } = this.state;

    return (
      <div className="App">
        <AddNewsPost addNewPost={this.addNewPost} />

        <div className="news-list">
          {news.map(post => (
            <NewsPost key={post.id} text={post.text} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
