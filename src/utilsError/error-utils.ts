import {Dispatch} from 'redux';
import {ResponseType} from "../API/api";
import {setAppError, setAppStatus} from '../redax/appReducer';

// generic function

export const handleServerAppError = <T>(data: ResponseType<T>, dispatch: ErrorUtilsDispatchType) => {

    if (data.messages.length) {
        dispatch(setAppError({error: data.messages[0]}))
    } else {
        dispatch(setAppError({error: 'Some error occurred'}))
    }
    dispatch(setAppStatus({status: 'loading'}))
}

export const handleServerNetworkError = (catchError: unknown, dispatch: ErrorUtilsDispatchType) => {
    const error = catchError as Error
    dispatch(setAppError({error: error.message}))
    dispatch(setAppStatus({status: 'failed'}))
}

type ErrorUtilsDispatchType = Dispatch<ReturnType<typeof setAppStatus> | ReturnType<typeof setAppError>>
