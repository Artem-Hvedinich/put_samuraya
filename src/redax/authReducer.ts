import {authAPI, securityAPI} from "../API/api";
import {Dispatch} from "redux";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunkType} from "./store";
import {handleServerAppError, handleServerNetworkError} from "../utilsError/error-utils";
import {setAppStatus} from "./appReducer";

const initialState: DataAuthType = {
    id: 0,
    email: '',
    login: '',
    isAuth: false,
    captchaUrl: null,
}

const slice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setUserData(state, action: PayloadAction<DataAuthType>) {
            return {...state, ...action.payload}
        },
        getCaptchaUrlSuccess(state, action: PayloadAction<{ url: string }>) {
            return {...state, captchaUrl: action.payload.url}
        }
    }
})


export const authReducer = slice.reducer
export const {setUserData, getCaptchaUrlSuccess} = slice.actions

export const getAuthUserData = (): AppThunkType => async (dispatch) => {
    dispatch(setAppStatus({status: 'loading'}))
    const res = await authAPI.me()
    try {
        if (res.data.resultCode === 0) {
            dispatch(setUserData({...res.data.data, captchaUrl: null, isAuth: true}))
            dispatch(setAppStatus({status: 'succeeded'}))
        } else handleServerAppError(res.data, dispatch)
    } catch (error) {
        handleServerNetworkError(error, dispatch)
    } finally {
        dispatch(setAppStatus({status: 'succeeded'}))
    }
}
export const getCaptchaUrl = (): AppThunkType => async (dispatch) => {
    dispatch(setAppStatus({status: 'loading'}))
    const res = await securityAPI.getCaptchaUrl()
    dispatch(getCaptchaUrlSuccess({url: res.data.url}))
    dispatch(setAppStatus({status: 'succeeded'}))
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: NullableType<string>): AppThunkType => async (dispatch) => {
    dispatch(setAppStatus({status: 'loading'}))
    const res = await authAPI.login(email, password, rememberMe, captcha)
    try {
        if (res.data.resultCode === 0) {
            dispatch(getAuthUserData())
            dispatch(setAppStatus({status: 'succeeded'}))
        } else {
            if (res.data.resultCode === 10) {
                dispatch(getCaptchaUrl())
                dispatch(setAppStatus({status: 'succeeded'}))
            }
            handleServerAppError(res.data, dispatch)
        }
    } catch (error) {
        handleServerNetworkError(error, dispatch)
    } finally {
        dispatch(setAppStatus({status: 'succeeded'}))
    }
}


export const logout = (): AppThunkType =>
    async (dispatch: Dispatch) => {
        dispatch(setAppStatus({status: 'loading'}))
        const res = await authAPI.logout()
        try {
            if (res.data.resultCode === 0) {
                dispatch(setUserData({id: null, email: null, login: null, isAuth: false, captchaUrl: null}))
                dispatch(setAppStatus({status: 'succeeded'}))
            } else handleServerAppError(res.data, dispatch)
        } catch (error) {
            handleServerNetworkError(error, dispatch)
        } finally {
            dispatch(setAppStatus({status: 'succeeded'}))
        }
    }

//types
export type DataAuthType = {
    id: NullableType<number>
    email: NullableType<string>
    login: NullableType<string>
    isAuth: boolean
    captchaUrl: NullableType<string>

}

export type NullableType<T> = null | T
