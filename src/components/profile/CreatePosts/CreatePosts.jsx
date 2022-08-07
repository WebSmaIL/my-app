import React from "react";
import s from "./CreatePosts.module.css";

const MyPosts = (props) => {
    let createPostArea = React.createRef();

    let onAddPost = () => {
        props.addPost()
    };

    let onPostChange = () => {
        let text = createPostArea.current.value;
        props.updateNewPostText(text)
    };

    return (
        <div className={s.myPosts}>
            <h1>Create post</h1>
            <textarea
                onChange={onPostChange}
                ref={createPostArea}
                placeholder="Your news..."
                value={props.newPostText}
            />
            <button onClick={onAddPost}>Send</button>
        </div>
    );
};

export default MyPosts;
