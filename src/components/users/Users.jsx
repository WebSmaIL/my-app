import React  from 'react';
import s from './Users.module.css';

const Users = (props) => {
    debugger;
    if (props.usersList.length === 0) {
        props.setUsers([
            {
                id: 1,
                url:"https://coolsen.ru/wp-content/uploads/2021/06/15-8.jpg",
                userName: "Jack N.",
                userStatus: "I`m a boss",
                location: {
                    country: "USA",
                    city: "New-York",
                },
                followed: true,
            },
            {
                id: 2,
                url:"https://coolsen.ru/wp-content/uploads/2021/06/15-8.jpg",
                userName: "Amin K.",
                userStatus: "I`m a boss too",
                location: {
                    country: "Iran",
                    city: "IranCity",
                },
                followed: false,
            },
            {
                id: 3,
                url:"https://coolsen.ru/wp-content/uploads/2021/06/15-8.jpg",
                userName: "Veronica G.",
                userStatus: "and me too",
                location: {
                    country: "Russia",
                    city: "Omsk",
                },
                followed: false,
            }])
    }
    return (
        <div>
            {
                props.usersList.map( user => {
                    return(
                        <div key={user.id}>
                            <span>
                                <div>
                                    <img width="50" height="50" src={user.url} alt="" />
                                </div>
                                <div>
                                    {
                                    user.followed ? <button onClick={()=>{props.unfollow(user.id)}}>UNFOLLOW</button> 
                                    : 
                                    <button onClick={()=>{props.follow(user.id)}}>FOLLOW</button>}
                                </div>
                            </span>
                            <span>
                                <div>{user.userName}</div>
                                <div>{user.userStatus}</div>
                            </span>
                            <span>
                                <div>{user.location.country}</div>
                                <div>{user.location.city}</div>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users;