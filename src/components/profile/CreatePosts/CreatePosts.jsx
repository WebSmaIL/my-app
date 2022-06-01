import React  from 'react';
import s from "./CreatePosts.module.css";

const MyPosts = () => {
  return (
    <div className={s.myPosts}>
      <h1>Create post</h1>
      <textarea placeholder="Your news..." />
      <button>Send</button>
    </div>
  );
};

export default MyPosts;
