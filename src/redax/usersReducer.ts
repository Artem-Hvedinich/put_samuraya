export type UsersPageType = {
    users: Array<UserType>
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
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://bitprice.ru/sites/default/files/styles/mt_photo/public/img/logo/brands/447105.png?itok=uchLL3-4',
        //     follower: false,
        //     fullName: 'Artem',
        //     status: 'Hi, how are you?',
        //     location: {city: 'Brest', country: 'Belarus'}
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://bitprice.ru/sites/default/files/styles/mt_photo/public/img/logo/brands/447105.png?itok=uchLL3-4',
        //     follower: true,
        //     fullName: 'Met',
        //     status: 'Hi, how are you?',
        //     location: {city: 'Philadelphia', country: 'USA'}
        // },
        // {
        //     id: 3,
        //     photoUrl: 'https://bitprice.ru/sites/default/files/styles/mt_photo/public/img/logo/brands/447105.png?itok=uchLL3-4',
        //     follower: false,
        //     fullName: 'Dima',
        //     status: 'Hi, how are you?',
        //     location: {city: 'Kiev', country: 'Ukraine'}
        // },
        // {
        //     id: 4,
        //     photoUrl: 'https://bitprice.ru/sites/default/files/styles/mt_photo/public/img/logo/brands/447105.png?itok=uchLL3-4',
        //     follower: true,
        //     fullName: 'Tim',
        //     status: 'Hi, how are you?',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
    ],

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
            return {...state, users: [...state.users, ...action.users]}
        }
    }
    return state
}

export const followAC = (UserId: number) => ({type: 'FOLLOW', UserId})
export const unfollowAC = (UserId: number) => ({type: 'UNFOLLOW', UserId})
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET_USERS', users})