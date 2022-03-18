import {combineReducers, createStore} from "redux";
import {MyPostPageType, profileReducer} from "./profileReducer";
import {dialogsReducer, MessagePageType} from "./dialogsReducer";
import {UsersPageType, usersReducer} from "./usersReducer";

export type StateType = {
    myPostPage: MyPostPageType
    messagesPage: MessagePageType
    usersPage: UsersPageType
}

let rootReducer = combineReducers({
    myPostPage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer
})

export let store = createStore(rootReducer)
export type DispatchType = ReturnType<typeof rootReducer>
export type AppStoreType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store;