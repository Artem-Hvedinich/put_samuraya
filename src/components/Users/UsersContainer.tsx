import React from "react";
import {connect} from "react-redux";
import {Users} from './Users'
import {StateType} from "../../redax/redaxStore";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redax/usersReducer";

export type MSTP = {
    users:  Array<UserType>
}

let mapStateToProps = (state: StateType): MSTP => {
    return {
        users: state.usersPage.users
    }
}

export type MDTP = {
    follow: (UsersId: number) => void
    unfollow: (UsersId: number) => void
    setUsers: (users: Array<UserType>) => void
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
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)