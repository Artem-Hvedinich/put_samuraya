import {dialogsType, messageType} from "./state"

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

export const dialogsReducer = (state: { dialogs: Array<dialogsType>; messages: Array<messageType>; newMessageBody: string },
                               action: { type: string; body: string }) => {
    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_BODY':
            state.newMessageBody = action.body
            break;
        case 'SEND_MESSAGE':
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
            break;
    }
    return state
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateMewMessageBodyCreator = (text: string) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: text})