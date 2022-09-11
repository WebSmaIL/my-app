import React from "react";
import CreatePostsContainer from "./CreatePosts/CreatePostsContainer";
import NewPostsContainer from "./NewPosts/NewPostsContainer"
import s from "./Profile.module.css";
import ProfileInfo from "./profileInfo/profileInfo";

const Profile = (props) => {
    return (
        <main>
            <div>
                <img
                    className={s.mainThemeImg}
                    src="https://sun9-54.userapi.com/c824500/v824500634/7add1/vbdYmZrrCH0.jpg"
                    alt=""
                />

                <ProfileInfo profile={props.profile}/>
            </div>

            <CreatePostsContainer />

            <NewPostsContainer />
        </main>
    );
};

export default Profile;

