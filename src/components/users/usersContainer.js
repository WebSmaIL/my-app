import React from "react";
import { connect } from "react-redux/es/exports";
import { follow, setCurPage, setIsFetching, setTotalCount, setUsers, unfollow } from "../../state/usersReducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((res) => {
                this.props.setUsers(res.data.items);
                this.props.setTotalCount(res.data.totalCount);
                this.props.setIsFetching(false);
            });
    }

    onPageChanged(p) {
        this.props.setIsFetching(true);
        this.props.setCurPage(p);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`
            )
            .then((res) => {
                this.props.setUsers(res.data.items);
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
                        usersList={this.props.usersList}
                        unfollow={this.props.unfollow}
                        follow={this.props.follow}
                        currentPage={this.props.currentPage}
                        totalCount={this.props.totalCount}
                        onPageChanged={(p) => this.onPageChanged(p)}
                        pageSize={this.props.pageSize}
                        isFetching={this.props.isFetching}
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
    };
};

export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurPage, setTotalCount, setIsFetching })(UsersContainer);
