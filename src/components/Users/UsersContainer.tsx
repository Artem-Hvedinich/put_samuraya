import React from "react";
import {connect} from "react-redux";
import {StateType} from "../../redax/reduxStore";
import {
    follow,
    setCurrentPage, setToggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow,
    UsersPageType,
    UserType
} from "../../redax/usersReducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

export type PropsType = UsersPageType & MDTP

export class UsersAPIComponent extends React.Component<PropsType, any> {

    componentDidMount() {
        this.props.setToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?
        page=${this.props.currentPage}count${this.props.pageSize}`).then(r => {
            this.props.setToggleIsFetching(false)
            this.props.setUsers(r.data.items)
            this.props.setTotalUsersCount(r.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?
        page=${pageNumber}count${this.props.pageSize}`).then(r => {
            this.props.setToggleIsFetching(false)
            this.props.setUsers(r.data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                users={this.props.users} follow={this.props.follow}
                unfollow={this.props.unfollow} currentPage={this.props.currentPage}
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
        isFetching: state.usersPage.isFetching
    }
}

export type MDTP = {
    follow: (UsersId: number) => void
    unfollow: (UsersId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setToggleIsFetching: (isFetching: boolean) => void
}

export const UsersContainer = connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleIsFetching}
)(UsersAPIComponent)