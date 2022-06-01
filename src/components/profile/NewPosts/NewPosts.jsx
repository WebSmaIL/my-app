import React  from 'react';
import s from "./NewPosts.module.css";
import Post from "./post/Post";

const NewPosts = () => {
  return (
    <div className={s.newPosts}>
      <h1>New posts</h1>

      <Post
        message="Hi, its my first post in this social network, my name is Ilya and i`m
        learning React!"
        avatarURL="https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-48.jpg"
        likeCount="25"
      />

      <Post
        message="How are you bro?"
        avatarURL="https://uprostim.com/wp-content/uploads/2021/03/image204-9.jpg"
        likeCount="32"
      />
    </div>
  );
};

export default NewPosts;
