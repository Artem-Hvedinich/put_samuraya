import {getAuthUserData} from "./authReducer";
import {Dispatch} from "redux";

type AppTypeReducer = {
    initialized: boolean
}
let initialState: AppTypeReducer = {
    initialized: false
}

export const appReducer = (state = initialState, action: setInitializedType) => {
    switch (action.type) {
        case 'SET_INITIALIZED': {
            return {
                ...state,
                initialized: true
            }
        }
    }
    return state
}

type setInitializedType = ReturnType<typeof setInitialized>
export const setInitialized = () => ({type: 'SET_INITIALIZED'} as const)

export const initializedApp = () => (dispatch: any) => {
    dispatch(getAuthUserData())
    dispatch(setInitialized())
}