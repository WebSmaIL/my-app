import React  from 'react';
import s from "./CreatePosts.module.css";

const MyPosts = (props) => {

  let createPostArea = React.createRef();

  let onAddPost = () => {
    props.addPost(createPostArea.current.value);
  };

  return (
    <div className={s.myPosts}>
      <h1>Create post</h1>
      <textarea ref={createPostArea} placeholder="Your news..." />
      <button onClick={ onAddPost }>Send</button>
    </div>
  );
};

export default MyPosts;
