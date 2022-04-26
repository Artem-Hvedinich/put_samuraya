import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";
import {Dispatch} from "redux";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunkType} from "./reduxStore";

const initialState: DataAuthType = {
    id: 0,
    email: '',
    login: '',
    isAuth: false,
}

const slice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setUserData(state, action: PayloadAction<DataAuthType>) {
            return {...state, ...action.payload}
        }
    }
})


export const authReducer = slice.reducer
export const {setUserData} = slice.actions

export const getAuthUserData = (): AppThunkType => async (dispatch) => {
    const res = await authAPI.me()
    if (res.data.resultCode === 0) {
        let {id, email, login} = res.data.data
        dispatch(setUserData({id, email, login, isAuth: true}))
    }
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunkType => async (dispatch) => {
    const res = await authAPI.login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        dispatch(stopSubmit('login', {_error: res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'}))
    }
}

export const logout = (): AppThunkType =>
    async (dispatch: Dispatch) => {
        const res = await authAPI.logout()
        if (res.data.resultCode === 0) {
            dispatch(setUserData({id: null, email: null, login: null, isAuth: false}))
        }
    }

//types
export type DataAuthType = {
    id: NullableType<number>
    email: NullableType<string>
    login: NullableType<string>
    isAuth: boolean
}

export type NullableType<T> = null | T
