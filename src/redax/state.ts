import myPosts from "../components/Profile/MyPosts/MyPosts";

export type StoreType = {
    _state: StateType
    addPost: (newPostText: string) => void
    updateNewPostText: (newPostText: string) => void
    subscribe: (observer: any) => void
    getState: () => void
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
        },
    },

    getState() {
        return this._state
    },

    addPost() {
        let NewPost = {
            id: 3,
            message: this._state.myPostPage.newPostText,
            likesCount: 0
        };
        store._state.myPostPage.myPostData.push(NewPost);
        rerenderEntireTree(this._state);
    },
    updateNewPostText(newPostText) {
        this._state.myPostPage.newPostText = newPostText;
        rerenderEntireTree(this._state);
    },
    subscribe(observer: any) {
        rerenderEntireTree = observer;
    }

}

let rerenderEntireTree = (store: StateType) => {
}