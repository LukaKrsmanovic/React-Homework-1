import React, { useState } from "react";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer,NotificationManager} from 'react-notifications';

export const AddPost = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [image_url, setImageUrl] = useState("");

  const url = "https://jsonblob.com/api/929808639385157632";

  async function postData(myData) {
    let data = await fetch(url).then((response) => response.json());

    myData.id = data.posts.length + 1;

    data.posts.push(myData);
    return data;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const myData = {
      id: -1,
      title,
      image_url,
      author,
      content,
    };

    let data = await postData(myData);
    console.log(data);

    fetch(url, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    }).then(
      NotificationManager.success('Post added successfully','Thank you for sharing!') )
  };

  return (
    <div className="addPost">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="author"
            placeholder="Author"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Post content"
            className="form-control newPostContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Post image url"
            onChange={(e) => setImageUrl(e.target.value)}
            value={image_url}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            className="btn btn-dark btn-block"
            value="Add Post"
          />
          <NotificationContainer/>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
