const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'


export type MessagePageType = {
    dialogs: Array<dialogsType>
    messages: Array<messageType>
    newMessageBody: string
}
export type dialogsType = {
    id: number,
    name: string,
    // img: string,
}
export type messageType = {
    id: number,
    message: string,
}
let initialState: MessagePageType = {
    dialogs: [
        {id: 1, name: 'Dimych',}, //img:url()},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Artem'},
        {id: 6, name: 'Viktor'}
    ],

    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How a you'},
        {id: 3, message: 'Artem?'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Why?'},
        {id: 6, message: 'Like'}
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state = initialState,
                               action: { type: string; body: string }) => {
    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_BODY': {
            return {...state, newMessageBody: action.body}

        }
        case 'SEND_MESSAGE': {
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 7, message: body}]
            }
        }
    }
    return state
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateMewMessageBodyCreator = (text: string) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: text})