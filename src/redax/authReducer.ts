import {headerAPI, usersAPI} from "../API/api";
import {setToggleFollowingInProgress, unfollowSuccess} from "./usersReducer";

export type DataType = {
    data: {
        id: number
        email: string
        login: string
        isAuth: boolean
    }
}

let initialState: DataType = {
    data: {
        id: 0,
        email: '',
        login: '',
        isAuth: false,
    }
}

export const authReducer = (state = initialState, action: any) => {
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
export const setUserData = (userId: number, email: string, login: string) => ({
    type: 'SET_USER_DATA', data: {userId, email, login},
}) as const

export const getAuthUserData = () =>
    (dispatch: any) => {
        headerAPI.getHeader()
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data
                    dispatch(setUserData(id, email, login))
                }
            })
    }