import React  from 'react';
import Preloader from '../../common/preloader/preloader';
import s from "./profileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>;
  }
  // debugger
    return (
        <div className={s.profileInfo}>
          <img
            className={s.avatar}
            src={props.profile.photos.small}
            alt=""
          />
          <div className={s.profileAbout}>
            <h1>{props.profile.fullName}</h1>

            <p>{props.profile.aboutMe}</p>
            <p>{props.profile.lookingForAJob ? <b>Ищет работу</b>: <b>Не ищет работу</b>}</p>
            <p>{props.profile.lookingForAJobDescription}</p>

          </div>
        </div>
    );
}

export default ProfileInfo;