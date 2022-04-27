import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAuthUserData, NullableType} from "./authReducer";
import {AppThunkType} from "./reduxStore";
import {authAPI} from "../API/api";
import {handleServerAppError, handleServerNetworkError} from "../utilsError/error-utils";

const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as NullableType<string>,
    isInitialized: false
}

const slice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        setAppStatus(state, action: PayloadAction<{ status: RequestStatusType }>) {
            state.status = action.payload.status
        },
        setAppError(state, action: PayloadAction<{ error: NullableType<string> }>) {
            state.error = action.payload.error
        },
        setInitialized(state, action: PayloadAction<{ isInitialized: boolean }>) {
            state.isInitialized = action.payload.isInitialized
        }
    }
})
export const appReducer = slice.reducer
export const {setAppStatus, setAppError, setInitialized} = slice.actions

export const initializeApp = (): AppThunkType => async dispatch => {
    dispatch(setAppStatus({status: 'loading'}))
    const res = await authAPI.me()
    try {
        if (res.data.resultCode === 0) {
            dispatch(setInitialized({isInitialized: false}))
            dispatch(getAuthUserData())
            dispatch(setAppStatus({status: 'succeeded'}))
        } else handleServerAppError(res.data, dispatch)
    } catch (error) {
        handleServerNetworkError(error, dispatch)
    } finally {
        dispatch(setInitialized({isInitialized: true}))
        dispatch(setAppStatus({status: 'succeeded'}))
    }
}
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
