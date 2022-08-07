import React from "react";
import s from "./NewPosts.module.css";
import Post from "./post/Post";

const NewPosts = (props) => {
    
    let postsItems = props.postsData.map((p) => (
        <Post
            message={p.message}
            avatarURL={p.avatarURL}
            likeCount={p.likeCount}
        />
    ));

    return (
        <div className={s.newPosts}>
            <h1>New posts</h1>

            {postsItems}
        </div>
    );
};

export default NewPosts;
