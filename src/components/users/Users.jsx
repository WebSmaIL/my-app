import axios from "axios";
import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
    let getUsers = () => {
        if (props.usersList.length === 0) {
            axios
                .get("https://social-network.samuraijs.com/api/1.0/users")
                .then((res) => {
                    // debugger
                    props.setUsers(res.data.items);
                });
            // props.setUsers([
            //     {
            //         id: 1,
            //         url: "https://coolsen.ru/wp-content/uploads/2021/06/15-8.jpg",
            //         userName: "Jack N.",
            //         userStatus: "I`m a boss",
            //         location: {
            //             country: "USA",
            //             city: "New-York",
            //         },
            //         followed: true,
            //     },
            //     {
            //         id: 2,
            //         url: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-1.jpeg",
            //         userName: "Amin K.",
            //         userStatus: "I`m a boss too",
            //         location: {
            //             country: "Iran",
            //             city: "IranCity",
            //         },
            //         followed: false,
            //     },
            //     {
            //         id: 3,
            //         url: "https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg",
            //         userName: "Veronica G.",
            //         userStatus: "and me too",
            //         location: {
            //             country: "Russia",
            //             city: "Omsk",
            //         },
            //         followed: false,
            //     },
            // ]);
        }
    };

    
    return (
        <div>
            <div>
                <span>1</span>
            </div>
            {props.usersList.map((user) => {
                return (
                    <div className={s.userItem} key={user.id}>
                        <div className={s.userFlex}>
                            <div>
                                <img
                                    className={s.userAvatar}
                                    src={
                                        user.photos.small != null
                                            ? user.photos.small
                                            : "https://startupfellows.ru/img/male.png"
                                    }
                                    alt=""
                                />
                            </div>
                            <div>
                                {user.followed ? (
                                    <button
                                        className={s.followBtn}
                                        onClick={() => {
                                            props.unfollow(user.id);
                                        }}
                                    >
                                        UNFOLLOW
                                    </button>
                                ) : (
                                    <button
                                        className={s.followBtn}
                                        onClick={() => {
                                            props.follow(user.id);
                                        }}
                                    >
                                        FOLLOW
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className={s.userInfo}>
                            <span>
                                <b>{user.name}</b>
                            </span>
                            <span>
                                <i>
                                    {user.status != null
                                        ? user.status
                                        : "This user don`t have status"}
                                </i>
                            </span>
                        </div>
                        {/* <div className={s.userLocation}>
                            <span>{user.location.country}</span>
                            <span>{user.location.city}</span>
                        </div> */}
                    </div>
                );
            })}
        </div>
    );
};

export default Users;
