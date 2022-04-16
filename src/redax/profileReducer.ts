import {v1} from "uuid";
import {profileApi} from "../API/api";
import {Dispatch} from "redux";

export type MyPostPageType = {
    myPostData: Array<PostType>
    newPostText: string
    profile: ProfileType
    status: string
}
export type PostType = {
    id: string,
    message: string,
    likesCount: number
    img: string
}
export type ProfileType = {
    aboutMe?: string
    userId?: number
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    contacts?: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos?: {
        small?: string
        large?: string
    }
}


let initialState: MyPostPageType = {
    myPostData: [
        {
            id: v1(),
            message: 'Hi, how are you?',
            likesCount: 12,
            img: 'https://bitprice.ru/sites/default/files/styles/mt_photo/public/img/logo/brands/447105.png?itok=uchLL3-4'
        },
        {
            id: v1(),
            message: 'American idol',
            likesCount: 90,
            img: 'https://bitprice.ru/sites/default/files/styles/mt_photo/public/img/logo/brands/447105.png?itok=uchLL3-4'
        },
    ],
    newPostText: '',
    profile: {},
    status: '',
}

export const profileReducer = (state = initialState, action: ActionType): MyPostPageType => {

    switch (action.type) {
        case 'SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        case 'SET_STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        case 'ADD_POST': {
            return {
                ...state,
                myPostData: [{
                    id: v1(),
                    message: state.newPostText,
                    likesCount: 0,
                    img: 'https://bitprice.ru/sites/default/files/styles/mt_photo/public/img/logo/brands/447105.png?itok=uchLL3-4'
                }, ...state.myPostData]
            }
        }
        case 'UPDATE_NEW_POST_TEXT': {
            return {
                ...state,
                newPostText: action.newPostText
            }
        }

    }
    return {...state}
}
type ActionType = addPostAT | setUserProfileAT | setStatusAT | updateNewPostTextActionCreatorAT

type addPostAT = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = () => ({type: 'ADD_POST'} as const)

type updateNewPostTextActionCreatorAT = ReturnType<typeof updateNewPostTextActionCreator>
export const updateNewPostTextActionCreator = (text: string) =>
    ({type: "UPDATE_NEW_POST_TEXT", newPostText: text} as const)

type setUserProfileAT = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileType) => ({type: 'SET_USER_PROFILE', profile: profile} as const)

type setStatusAT = ReturnType<typeof setStatus>
export const setStatus = (status: string) => ({type: 'SET_STATUS', status} as const)

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    profileApi.getProfile(userId)
        .then(res => {
            if (res.data)
                dispatch(setUserProfile(res.data))
        })
}

export const getUserStatus = (userId: string) => (dispatch: Dispatch) => {
    profileApi.getStatus(userId)
        .then(res => {
            console.log(res.data)
            dispatch(setStatus(res.data))
        })
}

export const updateUserStatus = (status: string) => (dispatch: Dispatch) => {
    profileApi.updateStatus(status)
        .then(res => {
            // if (res.data.resolveData === 0) {
            dispatch(setStatus(status))
            // }
        })
}