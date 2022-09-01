import React  from 'react';
import { connect } from 'react-redux/es/exports';
import { followAC, setCurPage, setTotalCount, setUsersAC, unfollowAC } from '../../state/usersReducer';
// import Users from './Users';
import User from './UsersClass';

let mapStateToProps = (state)=>{
    return {
        usersList : state.usersPage.usersList,
        pageSize : state.usersPage.pageSize,
        totalCount : state.usersPage.totalCount,
        currentPage : state.usersPage.currentPage
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
        },
        setCurPage: (currentPage = 1)=>{
            dispatch(setCurPage(currentPage))
        },
        setTotalCount: (count)=> {
            dispatch(setTotalCount(count))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
