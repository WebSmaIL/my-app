import React  from 'react';
import s from "./profileInfo.module.css";

const ProfileInfo = () => {
    return (
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
    );
}

export default ProfileInfo;