import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";
import AddPost from "./components/AddPost";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar></NavBar>
          <div className="container">
            <Route exact path="/" component={Home}></Route>
            <Route path="/post" component={Post}></Route>
            <Route path="/add-post" component={AddPost}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
