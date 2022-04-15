import React from "react";
import {connect} from "react-redux";
import {StateType} from "../../redax/reduxStore";
import {
    follow,
    getUsers,
    setCurrentPage, setToggleIsFetching, unfollow,
    UsersPageType,
} from "../../redax/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

export type PropsType = UsersPageType & MDTP

export class UsersAPIComponent extends React.Component<PropsType, any> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => this.props.getUsers(pageNumber, this.props.pageSize)


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                currentPage={this.props.currentPage}
            />
        </>
    }
}

let mapStateToProps = (state: StateType): UsersPageType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export type MDTP = {
    follow: (UsersId: number) => void
    unfollow: (UsersId: number) => void
    setCurrentPage: (pageNumber: number) => void
    setToggleIsFetching: (isFetching: boolean) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export const UsersContainer = connect(mapStateToProps,
    {
        follow, unfollow,
        setCurrentPage, setToggleIsFetching,
        getUsers
    }
)(UsersAPIComponent)