import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";
import AddPost from "./components/AddPost";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Home}></Route>
          <Route path="/post" component={Post}></Route>
          <Route path="/add-post" component={AddPost}></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
