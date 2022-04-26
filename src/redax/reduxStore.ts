import {combineReducers} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./appReducer";
import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";

export type AppStoreType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    myPostPage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})

export type AppThunkType<ReturnType = void> = ThunkAction<void, AppStoreType, unknown, Action>

// @ts-ignore
window.store = store;
export type DispatchType = ReturnType<typeof rootReducer>
