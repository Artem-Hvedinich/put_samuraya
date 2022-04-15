import {usersAPI} from "../API/api";

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
let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

export const usersReducer = (state = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(u => u.id === action.UserId ? {...u, follower: true} : u),
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map(u => u.id === action.UserId ? {...u, follower: false} : u),
            }
        }
        case 'SET_USERS': {
            return {...state, users: action.users}
        }
        case 'SET_CURRENT_PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET_USERS_TOTAL_COUNT': {
            return {...state, totalUsersCount: action.totalCount}
        }
        case 'SET_TOGGLE_IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case 'FOLLOWING_IN_PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.UserId]
                    : state.followingInProgress.filter(id => id !== action.UserId)
            }
        }
    }
    return state
}

type ActionType = FollowACType | UnfollowACType | SetUsersACType | setCurrentPageACType |
    setTotalUsersCountACType | setToggleIsFetchingACType | setToggleFollowingInProgressACType

export type FollowACType = ReturnType<typeof followSuccess>
export const followSuccess = (UserId: number) => ({type: 'FOLLOW', UserId}) as const

export type UnfollowACType = ReturnType<typeof unfollowSuccess>
export const unfollowSuccess = (UserId: number) => ({type: 'UNFOLLOW', UserId}) as const

export type SetUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<UserType>) => ({type: 'SET_USERS', users}) as const

export type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage}) as const

export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalCount: number) => ({type: 'SET_USERS_TOTAL_COUNT', totalCount}) as const

export type setToggleIsFetchingACType = ReturnType<typeof setToggleIsFetching>
export const setToggleIsFetching = (isFetching: boolean) => ({type: 'SET_TOGGLE_IS_FETCHING', isFetching}) as const

export type setToggleFollowingInProgressACType = ReturnType<typeof setToggleFollowingInProgress>
export const setToggleFollowingInProgress = (isFetching: boolean, UserId: number) => {
    return {
        type: 'FOLLOWING_IN_PROGRESS', isFetching, UserId
    } as const
}


export const getUsers = (currentPage: number, pageSize: number) =>
    (dispatch: any) => {
        dispatch(setToggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setToggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
        // }
    }

export const follow = (userID: number) =>
    (dispatch: any) => {
        dispatch(setToggleFollowingInProgress(true, userID))
        usersAPI.follow(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userID))
                }
                dispatch(setToggleFollowingInProgress(false, userID))
            })
    }

export const unfollow = (userID: number) =>
    (dispatch: any) => {
        dispatch(setToggleFollowingInProgress(true, userID))
        usersAPI.unfollow(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userID))
                }
                dispatch(setToggleFollowingInProgress(false, userID))
            })
    }