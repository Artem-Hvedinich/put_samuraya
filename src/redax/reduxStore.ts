import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

export type StateType =
    ReturnType<typeof rootReducer>


let rootReducer = combineReducers({
    myPostPage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
})

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type DispatchType = ReturnType<typeof rootReducer>
export type AppStoreType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store;