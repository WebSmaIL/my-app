import React from "react";
import s from "./NewPosts.module.css";
import Post from "./post/Post";

const NewPosts = () => {
    let postsData = [
        {
            id: "1",
            message: "Hi, its my first post in this social network, my name is Ilya and i`m learning React!",
            avatarURL: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-48.jpg",
            likeCount: "35",
        },
        {
          id: "2",
          message: "How are you bro?",
          avatarURL: "https://uprostim.com/wp-content/uploads/2021/03/image204-9.jpg",
          likeCount: "21",
        },
    ];

    return (
        <div className={s.newPosts}>
            <h1>New posts</h1>

            <Post
                message={postsData[0].message}
                avatarURL={postsData[0].avatarURL}
                likeCount={postsData[0].likeCount}
            />

            <Post
                message={postsData[1].message}
                avatarURL={postsData[1].avatarURL}
                likeCount={postsData[1].likeCount}
            />
        </div>
    );
};

export default NewPosts;
