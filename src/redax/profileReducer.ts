import {v1} from "uuid";
import {useEffect} from "react";
import {usersAPI} from "../API/api";

export type MyPostPageType = {
    myPostData: Array<PostType>
    newPostText: string
    profile: ProfileType
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
}

export const profileReducer = (state = initialState, action: any): MyPostPageType => {

    switch (action.type) {
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
        case 'SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
    }
    return {...state}
}

export const addPostActionCreator = () => ({type: 'ADD_POST'})
export const setUserProfile = (profile: any) => ({type: 'SET_USER_PROFILE', profile})
export const getUserProfile = (userId: any) => (dispatch: any) => {
    useEffect(() => {
        usersAPI.getProfile(userId)
            .then(res => {
                dispatch(setUserProfile(res.data))
            })
    }, [])
}
export const updateNewPostTextActionCreator = (text: string) =>
    ({type: "UPDATE_NEW_POST_TEXT", newPostText: text})