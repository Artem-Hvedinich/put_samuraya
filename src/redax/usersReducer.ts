import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {usersAPI} from "../API/api";
import {AppThunkType} from "./reduxStore";

const initialState: UsersPageType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

const slice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        setUsers(state, action: PayloadAction<{ users: Array<UserType> }>) {
            return {...state, users: action.payload.users}
        },
        followSuccess(state, action: PayloadAction<{ userId: number }>) {
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userId ? {...u, follower: true} : u),
            }
        },
        unfollowSuccess(state, action: PayloadAction<{ userId: number }>) {
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userId ? {...u, follower: false} : u),
            }
        },
        setCurrentPage(state, action: PayloadAction<{ currentPage: number }>) {
            return {...state, currentPage: action.payload.currentPage}
        },
        setToggleIsFetching(state, action: PayloadAction<{ isFetching: boolean }>) {
            return {...state, isFetching: action.payload.isFetching}
        },
        setTotalUsersCount(state, action: PayloadAction<{ totalCount: number }>) {
            return {...state, totalUsersCount: action.payload.totalCount}
        },
        setToggleFollowingInProgress(state, action: PayloadAction<{ isFetching: boolean, userId: number }>) {
            return {
                ...state,
                followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(id => id !== action.payload.userId)
            }
            // state.followingInProgress = action.payload.isFetching
            //     ? [...state.followingInProgress, action.payload.userId]
            //     : state.followingInProgress.filter(id => id !== action.payload.userId)
        },
    }
})

export const usersReducer = slice.reducer
export const {
    followSuccess, unfollowSuccess, setUsers, setCurrentPage,
    setToggleIsFetching, setTotalUsersCount, setToggleFollowingInProgress
} = slice.actions

export const getUsers = (currentPage: number): AppThunkType => async (dispatch) => {
    dispatch(setToggleIsFetching({isFetching: true}))
    const res = await usersAPI.getUsers(currentPage)
    dispatch(setUsers({users: res.data.items}))
    dispatch(setCurrentPage({currentPage}))
    dispatch(setTotalUsersCount({totalCount: res.data.totalCount}))
    dispatch(setToggleIsFetching({isFetching: false}))

}
export const follow = (userId: number): AppThunkType => async (dispatch) => {
    dispatch(setToggleFollowingInProgress({isFetching: true, userId}))
    const res = await usersAPI.follow(userId)
    if (res.data.resultCode === 0) {
        dispatch(followSuccess({userId}))
    }
    dispatch(setToggleFollowingInProgress({isFetching: false, userId}))
}
export const unfollow = (userId: number): AppThunkType => async (dispatch) => {
    dispatch(setToggleFollowingInProgress({isFetching: true, userId}))
    const res = await usersAPI.unfollow(userId)
    if (res.data.resultCode === 0) {
        dispatch(unfollowSuccess({userId: userId}))
    }
    dispatch(setToggleFollowingInProgress({isFetching: false, userId}))
}
//types
export type UserType = {
    id: number
    follower: boolean
    name: string
    status: string
    location: {
        city: string
        country: string
    }
    photos: any
}
export type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: any[]
}

// import {usersAPI} from "../API/api";
// import { AppThunkType } from "./reduxStore";
//
//
// let initialState: UsersPageType = {
//     users: [],
//     pageSize: 10,
//     totalUsersCount: 0,
//     currentPage: 1,
//     isFetching: true,
//     followingInProgress: [],
// }
//
// export const usersReducer = (state = initialState, action: ActionType): UsersPageType => {
//     switch (action.type) {
//         case 'FOLLOW':
//             return {
//                 ...state,
//                 users: state.users.map(u => u.id === action.UserId ? {...u, follower: true} : u),
//             }
//         case 'UNFOLLOW':
//             return {
//                 ...state,
//                 users: state.users.map(u => u.id === action.UserId ? {...u, follower: false} : u),
//             }
//         case 'SET_USERS':
//             return {...state, users: action.users}
//         case 'SET_CURRENT_PAGE':
//             return {...state, currentPage: action.currentPage}
//         case 'SET_USERS_TOTAL_COUNT':
//             return {...state, totalUsersCount: action.totalCount}
//         case 'SET_TOGGLE_IS_FETCHING':
//             return {...state, isFetching: action.isFetching}
//         case 'FOLLOWING_IN_PROGRESS':
//             return {
//                 ...state,
//                 followingInProgress: action.isFetching
//                     ? [...state.followingInProgress, action.UserId]
//                     : state.followingInProgress.filter(id => id !== action.UserId)
//             }
//     }
//     return state
// }
//
//
// export const followSuccess = (UserId: number) => ({type: 'FOLLOW', UserId} as const)
// export const setUsers = (users: Array<UserType>) => ({type: 'SET_USERS', users} as const)
// export const unfollowSuccess = (UserId: number) => ({type: 'UNFOLLOW', UserId} as const)
// export const setCurrentPage = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const)
// export const setToggleIsFetching = (isFetching: boolean) => ({type: 'SET_TOGGLE_IS_FETCHING', isFetching} as const)
// export const setTotalUsersCount = (totalCount: number) => ({type: 'SET_USERS_TOTAL_COUNT', totalCount} as const)
// export const setToggleFollowingInProgress = (isFetching: boolean, UserId: number) => ({
//     type: 'FOLLOWING_IN_PROGRESS', isFetching, UserId
// } as const)
//
//
// export const getUsers = (currentPage: number): AppThunkType => async (dispatch) => {
//     dispatch(setToggleIsFetching(true))
//     const res = await usersAPI.getUsers(currentPage)
//     dispatch(setUsers(res.data.items))
//     dispatch(setCurrentPage(currentPage))
//     dispatch(setTotalUsersCount(res.data.totalCount))
//     dispatch(setToggleIsFetching(false))
//
// }
// export const follow = (userID: number):AppThunkType => async (dispatch) => {
//     dispatch(setToggleFollowingInProgress(true, userID))
//     const res = await usersAPI.follow(userID)
//     if (res.data.resultCode === 0) {
//         dispatch(followSuccess(userID))
//     }
//     dispatch(setToggleFollowingInProgress(false, userID))
// }
// export const unfollow = (userID: number):AppThunkType => async (dispatch) => {
//     dispatch(setToggleFollowingInProgress(true, userID))
//     const res = await usersAPI.unfollow(userID)
//     if (res.data.resultCode === 0) {
//         dispatch(unfollowSuccess(userID))
//     }
//     dispatch(setToggleFollowingInProgress(false, userID))
// }
//
// //types
// type ActionType =
//     | ReturnType<typeof setToggleFollowingInProgress>
//     | ReturnType<typeof setToggleIsFetching>
//     | ReturnType<typeof setTotalUsersCount>
//     | ReturnType<typeof setCurrentPage>
//     | ReturnType<typeof setUsers>
//     | ReturnType<typeof unfollowSuccess>
//     | ReturnType<typeof followSuccess>
// export type UserType = {
//     id: number
//     follower: boolean
//     name: string
//     status: string
//     location: {
//         city: string
//         country: string
//     }
//     photos: any
// }
// export type UsersPageType = {
//     users: Array<UserType>
//     pageSize: number
//     totalUsersCount: number
//     currentPage: number
//     isFetching: boolean
//     followingInProgress: any[]
// }