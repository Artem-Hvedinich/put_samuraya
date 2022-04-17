import {authAPI} from "../API/api";

export type DataType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}

let initialState: DataType = {
    id: 0,
    email: '',
    login: '',
    isAuth: false,
}

export const authReducer = (state = initialState, action: setUserDataType) => {
    switch (action.type) {
        case 'SET_USER_DATA': {
            return {
                ...state, ...action.payload
            }
        }
    }
    return state
}


type setUserDataType = ReturnType<typeof setUserData>
export const setUserData = (id: number, email: string, login: string, isAuth: boolean) => ({
    type: 'SET_USER_DATA', payload: {id, email, login, isAuth},
} as const)

export const getAuthUserData = () =>
    (dispatch: any) => {
        authAPI.me()
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data
                    dispatch(setUserData(id, email, login, true))
                }
            })
    }

export const login = (email: string, password: string, rememberMe: boolean) =>
    (dispatch: any) => {
        authAPI.login(email, password, rememberMe)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                }
            })
    }

export const logout = () =>
    (dispatch: any) => {
        authAPI.logout()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setUserData(0, '', '', false))
                }
            })
    }