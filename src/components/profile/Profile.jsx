import React from "react";
import MyPostsContainer from "./CreatePosts/CreatePostsContainer";
import NewPosts from "./NewPosts/NewPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./profileInfo/profileInfo";

const Profile = (props) => {
    debugger
    return (
        <main>
            <div>
                <img
                    className={s.mainThemeImg}
                    src="https://sun9-54.userapi.com/c824500/v824500634/7add1/vbdYmZrrCH0.jpg"
                    alt=""
                />

                <ProfileInfo />
            </div>

            <MyPostsContainer
                store = {props.store}
            />

            <NewPosts postsData={props.store.getState().profile.postsData} />
        </main>
    );
};

export default Profile;
