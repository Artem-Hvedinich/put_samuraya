import {v1} from "uuid";

export type MyPostPageType = {
    myPostData: Array<PostType>
    newPostText: string
}
export type PostType = {
    id: number,
    message: string,
    likesCount: number
    img: string
}

let initialState: MyPostPageType = {
    myPostData: [
        {
            id: 1,
            message: 'Hi, how are you?',
            likesCount: 12,
            img: 'https://bitprice.ru/sites/default/files/styles/mt_photo/public/img/logo/brands/447105.png?itok=uchLL3-4'
        },
        {
            id: 2,
            message: 'American idol',
            likesCount: 90,
            img: 'https://bitprice.ru/sites/default/files/styles/mt_photo/public/img/logo/brands/447105.png?itok=uchLL3-4'
        },
    ],
    newPostText: '',
}

export const profileReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case 'ADD_POST': {
            let NewPost = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0,
                img: 'https://bitprice.ru/sites/default/files/styles/mt_photo/public/img/logo/brands/447105.png?itok=uchLL3-4'
            };
            return {
                ...state,
                myPostData: [NewPost, ...state.myPostData]
            }
        }
        case 'UPDATE_NEW_POST_TEXT': {
            return {
                ...state,
                newPostText: action.newPostText
            }
        }
    }
    return state
}

export const addPostActionCreator = () => ({type: 'ADD_POST'})
export const updateNewPostTextActionCreator = (text: string) =>
    ({type: "UPDATE_NEW_POST_TEXT", newPostText: text})