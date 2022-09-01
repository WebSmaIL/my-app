import React from "react";
import axios from "axios";
import s from "./Users.module.css";
import { setCurPage } from "../../state/usersReducer";

class User extends React.Component {
    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((res) => {
                this.props.setUsers(res.data.items);
                this.props.setTotalCount(res.data.totalCount);
            });
    }

    onPageChanged(p) {
        this.props.setCurPage(p);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`
            )
            .then((res) => {
                this.props.setUsers(res.data.items);
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pagesArr = [];
        for (let i = 1; i <= pagesCount; i++) {
            pagesArr.push(i);
        }
        return (
            <div>
                {this.props.usersList.map((user) => {
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
                                                this.props.unfollow(user.id);
                                            }}
                                        >
                                            UNFOLLOW
                                        </button>
                                    ) : (
                                        <button
                                            className={s.followBtn}
                                            onClick={() => {
                                                this.props.follow(user.id);
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
                            (el <= 4 && this.props.currentPage <= 3) ||
                            (el >= pagesCount - 3 && this.props.currentPage >= pagesCount - 2) ||
                            el === pagesCount ||
                            (el >= this.props.currentPage - 1 &&
                                el <= this.props.currentPage + 1)
                        ) {
                            return (
                                <button
                                    className={`${s.paginateBtn} ${
                                        this.props.currentPage === el
                                            ? s.currentPage
                                            : ""
                                    }`}
                                    onClick={() => this.onPageChanged(el)}
                                >
                                    {el}
                                </button>
                            );
                        }
                    })}
                </div>
            </div>
        );
    }
}

export default User;
