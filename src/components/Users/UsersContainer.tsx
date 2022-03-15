import React from "react";
import {connect} from "react-redux";
import {StateType} from "../../redax/reduxStore";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersPageType,
    UserType
} from "../../redax/usersReducer";
import axios from "axios";
import {Users} from "./Users";
import s from "./Users.module.css"

export type PropsType = UsersPageType & MDTP

export class UsersAPIComponent extends React.Component<PropsType, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?
        page=${this.props.currentPage}count${this.props.pageSize}`).then(r => {
            this.props.setUsers(r.data.items)
            this.props.setTotalUsersCount(r.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?
        page=${pageNumber}count${this.props.pageSize}`).then(r => {
            this.props.setUsers(r.data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <div className={s.loader}>
                <div className={s.coin}></div>
            </div> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users} follow={this.props.follow}
                   unfollow={this.props.unfollow} currentPage={this.props.currentPage}
            />;
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
}

let mapDispatchToProps = (dispatch: Dispatch): MDTP => {
    return {
        follow: (UsersId: number) => {
            dispatch(followAC(UsersId))
        },
        unfollow: (UsersId: number) => {
            dispatch(unfollowAC(UsersId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)