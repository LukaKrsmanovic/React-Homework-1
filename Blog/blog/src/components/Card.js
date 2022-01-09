import React from "react";
import { Link } from "react-router-dom";

const PostCard = (props) => {
  return (
    <Link to="/post" className="ui card">
      <img src={props.postInfo.image_url} alt="post image" width="100%" />
      <div className="content center">
        <div className="meta">{props.postInfo.author}</div>
        <div className="header">{props.postInfo.title}</div>
      </div>
    </Link>
  );
};

export default PostCard;
