import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {StateType} from "../../redax/redaxStore";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redax/usersReducer";


let mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
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