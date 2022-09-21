import React from "react";
import { connect } from "react-redux/es/exports";
import {
    follow,
    setCurPage,
    setIsFetching,
    setTotalCount,
    setUsers,
    unfollow
} from "../../state/usersReducer";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";
import { UsersAPI } from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((res) => {
            this.props.setUsers(res.items);
            this.props.setTotalCount(res.totalCount);
            this.props.setIsFetching(false);
        });
    }

    onPageChanged(p) {
        this.props.setIsFetching(true);
        this.props.setCurPage(p);
        UsersAPI.getUsers(p, this.props.pageSize).then((res) => {
                this.props.setUsers(res.items);
                this.props.setIsFetching(false);
            });
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
        isFetching: state.usersPage.isFetching
    };
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurPage,
    setTotalCount,
    setIsFetching
})(UsersContainer);
