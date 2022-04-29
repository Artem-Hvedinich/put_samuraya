import {v1} from "uuid";
import {profileApi} from "../API/api";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunkType} from "./reduxStore";
import {NullableType} from "./authReducer";
import {handleServerAppError, handleServerNetworkError} from "../utilsError/error-utils";
import {setAppStatus} from "./appReducer";

const initialState: ProfilePageType = {
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
    profile: {} as ProfileType,
    status: '',
    editMode: false,
    statusEditMode: false,
}

const slice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {
        addPost(state, action: PayloadAction<{ addNewPost: string }>) {
            return {
                ...state,
                posts: [{
                    id: v1(),
                    message: action.payload.addNewPost,
                    likesCount: 0,
                    img: 'https://bitprice.ru/sites/default/files/styles/mt_photo/public/img/logo/brands/447105.png?itok=uchLL3-4'
                }, ...state.posts]
            }
        },
        deletePost(state, action: PayloadAction<{ postId: string }>) {
            return {...state, posts: state.posts.filter(p => p.id !== action.payload.postId)}
        },
        setUserProfile(state, action: PayloadAction<{ profile: ProfileType }>) {
            return {...state, profile: action.payload.profile}
        },
        setStatus(state, action: PayloadAction<{ status: string }>) {
            return {...state, status: action.payload.status}
        },
        savePhotoSuccess(state, action: PayloadAction<{ photos: any }>) {
            return {...state, profile: {...state.profile, photos: action.payload.photos}}
        },
        editModeAction(state, action: PayloadAction<{ editMode: boolean }>) {
            return {...state, editMode: action.payload.editMode}
        },
        statusEditModeAction(state, action: PayloadAction<{ statusEditMode: boolean }>) {
            return {...state, statusEditMode: action.payload.statusEditMode}
        },
    }
})

export const profileReducer = slice.reducer
export const {
    addPost,
    deletePost,
    setUserProfile,
    setStatus,
    savePhotoSuccess,
    editModeAction,
    statusEditModeAction
} = slice.actions

export const getUserProfile = (userId: string): AppThunkType => async (dispatch) => {
    dispatch(setAppStatus({status: 'loading'}))
    const res = await profileApi.getProfile(userId)
    dispatch(setUserProfile({profile: res.data}))
    dispatch(setAppStatus({status: 'succeeded'}))
}

export const getUserStatus = (userId: string): AppThunkType => async (dispatch) => {
    dispatch(setAppStatus({status: 'loading'}))
    const res = await profileApi.getStatus(userId)
    dispatch(setStatus({status: res.data}))
    dispatch(setAppStatus({status: 'succeeded'}))
}

export const updateUserStatus = (status: string): AppThunkType => async (dispatch) => {
    dispatch(setAppStatus({status: 'loading'}))
    const res = await profileApi.updateStatus(status)
    try {
        if (res.data.resultCode === 0) {
            dispatch(setStatus({status}))
            dispatch(statusEditModeAction({statusEditMode: false}))
            dispatch(setAppStatus({status: 'succeeded'}))
        } else handleServerAppError(res.data, dispatch)
    } catch (error) {
        handleServerNetworkError(error, dispatch)
    } finally {
        dispatch(setAppStatus({status: 'succeeded'}))
    }
}
export const savePhotoTC = (file: string | Blob): AppThunkType => async (dispatch) => {
    dispatch(setAppStatus({status: 'loading'}))
    const res = await profileApi.savePhoto(file)
    try {
        if (res.data.resultCode === 0) {
            dispatch(savePhotoSuccess({photos: res.data.data.photos}))
            dispatch(setAppStatus({status: 'succeeded'}))
        } else handleServerAppError(res.data, dispatch)
    } catch (error) {
        handleServerNetworkError(error, dispatch)
    } finally {
        dispatch(setAppStatus({status: 'succeeded'}))
    }
}

export const saveProfile = (profile: ProfileType, editMode: boolean): AppThunkType => async (dispatch) => {
    dispatch(setAppStatus({status: 'loading'}))
    const res = await profileApi.saveProfile(profile)
    try {
        if (res.data.resultCode === 0) {
            dispatch(setAppStatus({status: 'succeeded'}))
            dispatch(editModeAction({editMode}))
        } else handleServerAppError(res.data, dispatch)
    } catch (error) {
        handleServerNetworkError(error, dispatch)
    } finally {
        dispatch(setAppStatus({status: 'succeeded'}))
    }
}

//types
export type ProfilePageType = {
    posts: Array<PostType>
    profile: ProfileType
    status: NullableType<string>
    editMode: boolean
    statusEditMode: boolean
}
export type PostType = {
    id: string,
    message: string,
    likesCount: number
    img: string
}
export type ContactsType = {
    [key: string]: NullableType<string>
    github: NullableType<string>
    vk: NullableType<string>
    facebook: NullableType<string>
    instagram: NullableType<string>
    twitter: NullableType<string>
    website: NullableType<string>
    youtube: NullableType<string>
    mainLink: NullableType<string>
}
export type PhotosType = {
    small: NullableType<string>
    large: NullableType<string>
}
export type ProfileType = {
    aboutMe: string
    userId: NullableType<number>
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}