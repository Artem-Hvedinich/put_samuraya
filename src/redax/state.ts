import {rerenderEntireTree} from "../render";

export type StateType = {
    myPostPage: MyPostPageType
    messagesPage: MessagePageType
}

//myPostPage
export type MyPostPageType = {
    myPostData: Array<PostType>
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


export let state: StateType = {
    myPostPage: {
        myPostData: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'American idol', likesCount: 90},
        ],
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
    // sidebarPage: [
    //     {
    //         img: (src: 'https://developer.android.com/guide/practices/ui_guidelines/images/NB_Icon_Mask_Shapes_Ext_02.gif?hl=de'),
    //         name: 'Artem'
    //     }
    //     {img:, name: 'Kate'}
    //     {img:, name: 'Dmitry'}
    // ]
}


export let addPost = (messagePost: string) => {

    let NewPost = {
        id: 3,
        message: messagePost,
        likesCount: 0
    };

    state.myPostPage.myPostData.push(NewPost);
    rerenderEntireTree(state);

}

