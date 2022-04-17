import {v1} from "uuid"

export type MessagePageType = {
    dialogs: Array<dialogsType>
    messages: Array<messageType>
}
export type dialogsType = {
    id: string,
    name: string,
    // img: string,
}
export type messageType = {
    id: string,
    message: string,
}
let initialState: MessagePageType = {
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

export const dialogsReducer = (state = initialState,
                               action: ActionType) => {
    switch (action.type) {
        case 'SEND_MESSAGE': {
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: body}]
            }
        }
    }
    return state
}
type ActionType = sendMessageCreatorType

type sendMessageCreatorType = ReturnType<typeof sendMessageCreator>
export const sendMessageCreator = (newMessageBody: string) => ({type: 'SEND_MESSAGE', newMessageBody} as const)
