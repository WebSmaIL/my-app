import React from "react";
import MyPosts from "./CreatePosts/CreatePosts";
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

            <MyPosts
                newPostText={props.state.newPostText}
                dispatch = {props.dispatch}
            />

            <NewPosts postsData={props.state.postsData} />
        </main>
    );
};

export default Profile;
