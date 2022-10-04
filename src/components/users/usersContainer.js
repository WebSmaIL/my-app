import React from "react";
import { connect } from "react-redux/es/exports";
import {
    setCurPage,
    getUsersThunkCreator,
    unfollowUserTC,
    followUserTC,
} from "../../state/usersReducer";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";
import {WithAuthRedirect} from "../HOC/WithAuthRedirect"

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(
            this.props.currentPage,
            this.props.pageSize
        );
    }

    onPageChanged(p) {
        this.props.getUsersThunkCreator(p, this.props.pageSize);
        this.props.setCurPage(p);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? (
                    <Preloader />
                ) : (
                    <Users
                        {...this.props}
                        onPageChanged={(p) => this.onPageChanged(p)}
                    />
                )}
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        usersList: state.usersPage.usersList,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    };
};

let redirectComponent = WithAuthRedirect(UsersContainer)

export default connect(mapStateToProps, {
    setCurPage,
    getUsersThunkCreator,
    unfollowUserTC,
    followUserTC,
})(redirectComponent);
