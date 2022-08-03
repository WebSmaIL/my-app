import React from "react";
import { addPostActionCreator, changePostActionCreator } from "../../../state/profileReducer";
import s from "./CreatePosts.module.css";

const MyPosts = (props) => {
    let createPostArea = React.createRef();

    let onAddPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = createPostArea.current.value;
        let action = changePostActionCreator(text);
        props.dispatch(action);
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
