import React from "react";

const Post = (props) => {
  props = props.history.location.postInfo;
  return (
    <div>
      <h1>{props.title}</h1>
      <div className="post-author">Author: {props.author}</div>
      <div className="post-img center">
        <img className="z-depth-1" src={props.image_url} alt="post image" />
      </div>
      <p className="post-content">{props.content}</p>
    </div>
  );
};

export default Post;
