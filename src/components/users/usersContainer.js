import React  from 'react';
import { connect } from 'react-redux/es/exports';
import { followAC, setUsersAC, unfollowAC } from '../../state/usersReducer';
import Users from './Users';

let mapStateToProps = (state)=>{
    return {
        usersList : state.usersPage.usersList
    }
};
let mapDispatchToProps = (dispatch)=>{
    return {
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users)=>{
            dispatch(setUsersAC(users))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);