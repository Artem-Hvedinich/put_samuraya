import {headerAPI} from "../API/api";

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
                ...state, ...action.data, isAuth: true
            }
        }
    }
    return state
}


type setUserDataType = ReturnType<typeof setUserData>
export const setUserData = (id: number, email: string, login: string) => ({
    type: 'SET_USER_DATA', data: {id, email, login},
} as const)

export const getAuthUserData = () =>
    (dispatch: any) => {
        headerAPI.getHeader()
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data
                    console.log(res.data.data)
                    dispatch(setUserData(id, email, login))
                }
            })
    }