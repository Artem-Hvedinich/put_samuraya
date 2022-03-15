export type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}


export type UserType = {
    id: number,
    follower: boolean,
    name: string,
    status: string,
    location: LocationType
    photos: any
}

export type LocationType = {
    city: string,
    country: string
}

let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
}

export const usersReducer = (state = initialState, action: any) => {

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
    }
    return state
}

export const followAC = (UserId: number) => ({type: 'FOLLOW', UserId})
export const unfollowAC = (UserId: number) => ({type: 'UNFOLLOW', UserId})
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET_USERS', users})
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage})
export const setTotalUsersCountAC = (totalCount: number) => ({type: 'SET_USERS_TOTAL_COUNT', totalCount})
