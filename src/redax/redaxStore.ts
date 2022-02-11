import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

let reducers = combineReducers({
    myPostPage: profileReducer,
    messagesPage: dialogsReducer
})

export let store = createStore(reducers)
export type DispatchType = ReturnType<typeof store.dispatch>
export type AppStoreType = ReturnType<typeof reducers>