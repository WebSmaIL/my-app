import React from "react";
import { addPostActionCreator, changePostActionCreator } from "../../../state/profileReducer";

import MyPosts from "./CreatePosts";

const MyPostsContainer = (props) => {
    let onAddPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        let action = changePostActionCreator(text);
        props.store.dispatch(action);
    };

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={onAddPost}
            newPostText={props.store.getState().profile.newPostText}
        />
    );
};

export default MyPostsContainer;
