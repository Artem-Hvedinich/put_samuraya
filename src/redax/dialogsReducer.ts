import {v1} from "uuid"
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: MessagePageType = {
    dialogs: [
        {id: v1(), name: 'Dimych'},
        {id: v1(), name: 'Andrey'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Artem'},
        {id: v1(), name: 'Viktor'}
    ],

    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How a you'},
        {id: v1(), message: 'Artem?'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Why?'},
        {id: v1(), message: 'Like'}
    ],
}

const slice = createSlice({
    name: 'dialogs',
    initialState: initialState,
    reducers: {
        sendMessageCreator(state, action: PayloadAction<{ newMessageBody: string }>) {
            state.messages = [...state.messages, {id: v1(), message: action.payload.newMessageBody}]
        }
    }
})
export const dialogsReducer = slice.reducer
export const {sendMessageCreator} = slice.actions

//types
export type MessagePageType = {
    dialogs: Array<dialogsType>
    messages: Array<messageType>
}
export type dialogsType = {
    id: string,
    name: string,
}
export type messageType = {
    id: string,
    message: string,
}