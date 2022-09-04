import React from "react";
import s from "./Users.module.css";


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
                                className={`${s.paginateBtn} ${
                                    props.currentPage === el
                                        ? s.currentPage
                                        : ""
                                }`}
                                onClick={() => {props.onPageChanged(el)}}
                            >
                                {el}
                            </button>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default Users;
