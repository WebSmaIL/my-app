import React  from 'react';
import MyPosts from "./CreatePosts/CreatePosts";
import NewPosts from "./NewPosts/NewPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <main>
      <div>
        <img
          className={s.mainThemeImg}
          src="https://sun9-54.userapi.com/c824500/v824500634/7add1/vbdYmZrrCH0.jpg"
          alt=""
        />

        <div className={s.profileInfo}>
          <img
            className={s.avatar}
            src="https://a.d-cd.net/1a424f2s-960.jpg"
            alt=""
          />
          <div className={s.profileAbout}>
            <h1>Ilya Smakovskiy</h1>

            <p>Date of Birth: 14feb</p>
            <p>City: Omsk</p>
            <p>Education: IDK</p>
            <p>Web Site: www.websmail.ru</p>

          </div>
        </div>
      </div>

      {/* My posts */}
      <MyPosts />

      {/* New posts */}
      <NewPosts />
    </main>
  );
};

export default Profile;
