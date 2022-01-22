import myPosts from "../components/Profile/MyPosts/MyPosts";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

export type StoreType = {
    _state: StateType
    subscribe: (observer: any) => void
    getState: () => StateType
    callSubscriber: (_state: StateType) => void
    dispatch: (action: any) => void
}

export type StateType = {
    myPostPage: MyPostPageType
    messagesPage: MessagePageType
}


//myPostPage
export type MyPostPageType = {
    myPostData: Array<PostType>
    newPostText: string
}
export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
//myPostPage

//messagesPage
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

//messagesPage

export let store: StoreType = {

    _state: {
        myPostPage: {
            myPostData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'American idol', likesCount: 90},
            ],
            newPostText: '',
        },


        messagesPage: {
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
        },
    },

    callSubscriber(_state: StateType) {
        console.log('Nice')
    },


    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this.callSubscriber = observer;
    },
    dispatch(action: any) {
        this._state.myPostPage = profileReducer(this._state.myPostPage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this.callSubscriber(this._state);
    }
}
