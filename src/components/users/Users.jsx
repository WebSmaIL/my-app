import React from "react";
import s from "./Users.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { UsersAPI } from "../../api/api";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pagesArr = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagesArr.push(i);
    }

    return (
        <div>
            {props.usersList.map((user) => {
                return (
                    <div className={s.userItem} key={user.id}>
                        <div className={s.userFlex}>
                            <div>
                                <NavLink to={"/profile/" + user.id}>
                                    <img
                                        className={s.userAvatar}
                                        src={
                                            user.photos.small != null
                                                ? user.photos.small
                                                : "https://startupfellows.ru/img/male.png"
                                        }
                                        alt=""
                                    />
                                </NavLink>
                            </div>
                            <div>
                                {user.followed ? (
                                    <button
                                        className={s.unfollowBtn}
                                        onClick={() => {
                                            UsersAPI.unfollowUser(user.id).then(
                                                (res) => {
                                                    if (res.resultCode == 0) {
                                                        props.unfollow(user.id);
                                                    }
                                                }
                                            );
                                        }}
                                    >
                                        UNFOLLOW
                                    </button>
                                ) : (
                                    <button
                                        className={s.followBtn}
                                        onClick={() => {
                                            UsersAPI.followUser(user.id).then(
                                                (res) => {
                                                    if (res.resultCode == 0) {
                                                        props.follow(user.id);
                                                    }
                                                }
                                            );
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
                    </div>
                );
            })}
            <div className={s.paginateBlock}>
                {pagesArr.map((el) => {
                    if (
                        el === 1 ||
                        (el <= 4 && props.currentPage <= 3) ||
                        (el >= pagesCount - 3 &&
                            props.currentPage >= pagesCount - 2) ||
                        el === pagesCount ||
                        (el >= props.currentPage - 1 &&
                            el <= props.currentPage + 1)
                    ) {
                        return (
                            <button
                                key={el}
                                className={`${s.paginateBtn} ${
                                    props.currentPage === el
                                        ? s.currentPage
                                        : ""
                                }`}
                                onClick={() => {
                                    props.onPageChanged(el);
                                }}
                            >
                                {el}
                            </button>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
};

export default Users;
