import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    const text =
        props.likeCount[props.likeCount.length - 1] === "1" ? "like" : "likes";

    return (
        <div className={s.postItem}>
            <img className={s.postAvatar} src={props.avatarURL} alt="" />
            <div>
                <div className={s.postContent}>{props.message}</div>

                <div className={s.likes}>
                    <span>
                        {props.likeCount} {text}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Post;
