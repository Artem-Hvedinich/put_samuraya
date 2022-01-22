import {PostType} from "./state";

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';

export const profileReducer = (state: { myPostData: Array<PostType>; newPostText: string; },
                               action: { type: string; newPostText: string; }) => {

    switch (action.type) {
        case 'ADD_POST':
            let NewPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            };
            state.myPostData.push(NewPost);
            break;
        case 'UPDATE_NEW_POST_TEXT':
            state.newPostText = action.newPostText;
            break;
    }
    return state
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText: text})