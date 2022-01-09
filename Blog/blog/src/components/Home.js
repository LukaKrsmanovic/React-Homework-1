import React from "react";
import PostCard from "./Card";
import Post from "./Post";

const url = "https://jsonblob.com/api/929808639385157632";

class Home extends React.Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const data = await fetch(url).then((response) => response.json());
    const posts = data.posts;
    this.setState({ posts });
  }

  getPosts = () => {
    let posts = this.state.posts;
    return posts.map((post) => {
      return <PostCard postInfo={post} key={post.id}></PostCard>;
    });
  };

  render() {
    return (
      <div>
        <h1 className="center">Svi postovi</h1>
        <div className="ui three stackable cards">{this.getPosts()}</div>
      </div>
    );
  }
}

export default Home;
