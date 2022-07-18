import React from "react";
import s from "./NewPosts.module.css";
import Post from "./post/Post";

const NewPosts = () => {
    let postsData = [
        {
            id: "1",
            message:
                "Hi, its my first post in this social network, my name is Ilya and i`m learning React!",
            avatarURL:
                "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-48.jpg",
            likeCount: "35",
        },
        {
            id: "2",
            message: "How are you bro?",
            avatarURL:
                "https://uprostim.com/wp-content/uploads/2021/03/image204-9.jpg",
            likeCount: "21",
        },
        {
            id: "3",
            message: "im good, tnx!",
            avatarURL:
                "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-48.jpg",
            likeCount: "25",
        },
        {
            id: "4",
            message: "Wow, this social network is a crazy",
            avatarURL:
                "https://uprostim.com/wp-content/uploads/2021/03/image204-9.jpg",
            likeCount: "101",
        },
    ];

    let postsItems = postsData.map((p) => (
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
