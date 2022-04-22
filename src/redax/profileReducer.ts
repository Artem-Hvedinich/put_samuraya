import {v1} from "uuid";
import {profileApi} from "../API/api";
import {Dispatch} from "redux";

export type MyPostPageType = {
    posts: Array<PostType>
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
    posts: [
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
    profile: {},
    status: '',
}

export const profileReducer = (state = initialState, action: ActionType): MyPostPageType => {

    switch (action.type) {
        case 'SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'SET_STATUS':
            return {
                ...state,
                status: action.status
            }
        case 'ADD_POST':
            return {
                ...state,
                posts: [{
                    id: v1(),
                    message: action.addNewPost,
                    likesCount: 0,
                    img: 'https://bitprice.ru/sites/default/files/styles/mt_photo/public/img/logo/brands/447105.png?itok=uchLL3-4'
                }, ...state.posts]
            }
        case "DELETE_POST":
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
    }
    return {...state}
}

export const addPost = (addNewPost: string) => ({type: 'ADD_POST', addNewPost} as const)

export const deletePost = (postId: string) => ({type: 'DELETE_POST', postId} as const)

export const setUserProfile = (profile: ProfileType) => ({type: 'SET_USER_PROFILE', profile: profile} as const)

export const setStatus = (status: string) => ({type: 'SET_STATUS', status} as const)

export const getUserProfile = (userId: string) => async (dispatch: Dispatch) => {
    const res = await profileApi.getProfile(userId)
    if (res.data)
        dispatch(setUserProfile(res.data))
}

export const getUserStatus = (userId: string) => async (dispatch: Dispatch) => {
    const res = await profileApi.getStatus(userId)
    dispatch(setStatus(res.data))
}

export const updateUserStatus = (status: string) => async (dispatch: Dispatch) => {
    const res = await profileApi.updateStatus(status)
    if (res.data.resolveData === 0) {
        dispatch(setStatus(status))
    }
}


type ActionType =
    | ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>
