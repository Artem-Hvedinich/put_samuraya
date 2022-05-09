import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {usersAPI} from "../API/api";
import {AppThunkType} from "./store";
import {setAppStatus} from "./appReducer";
import {handleServerAppError, handleServerNetworkError} from "../utilsError/error-utils";

const initialState: UsersPageType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
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
        },
    }
})

export const usersReducer = slice.reducer
export const {
    followSuccess, unfollowSuccess, setUsers, setCurrentPage,
    setTotalUsersCount, setToggleFollowingInProgress
} = slice.actions

export const getUsers = (currentPage: number): AppThunkType => async (dispatch) => {
    dispatch(setAppStatus({status: 'loading'}))
    const res = await usersAPI.getUsers(currentPage)
    dispatch(setUsers({users: res.data.items}))
    dispatch(setCurrentPage({currentPage}))
    dispatch(setTotalUsersCount({totalCount: res.data.totalCount}))
    dispatch(setAppStatus({status: 'succeeded'}))
}
export const follow = (userId: number): AppThunkType => async (dispatch) => {
    dispatch(setAppStatus({status: 'loading'}))
    dispatch(setToggleFollowingInProgress({isFetching: true, userId}))
    const res = await usersAPI.follow(userId)
    try {
        if (res.data.resultCode === 0) {
            dispatch(followSuccess({userId}))
            dispatch(setAppStatus({status: 'succeeded'}))
        } else handleServerAppError(res.data, dispatch)
    } catch (error) {
        handleServerNetworkError(error, dispatch)
    } finally {
        dispatch(setToggleFollowingInProgress({isFetching: false, userId}))
        dispatch(setAppStatus({status: 'succeeded'}))
    }
}
export const unfollow = (userId: number): AppThunkType => async (dispatch) => {
    dispatch(setAppStatus({status: 'loading'}))
    dispatch(setToggleFollowingInProgress({isFetching: true, userId}))
    const res = await usersAPI.unfollow(userId)
    try {
        if (res.data.resultCode === 0) {
            dispatch(unfollowSuccess({userId: userId}))
            dispatch(setAppStatus({status: 'succeeded'}))
        } else handleServerAppError(res.data, dispatch)
    } catch (error) {
        handleServerNetworkError(error, dispatch)
    } finally {
        dispatch(setToggleFollowingInProgress({isFetching: false, userId}))
        dispatch(setAppStatus({status: 'succeeded'}))
    }

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
    followingInProgress: any[]
}