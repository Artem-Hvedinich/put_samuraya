const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';

let initialState = {
    myPostData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'American idol', likesCount: 90},
    ],
    newPostText: '',
}

export const profileReducer = (state = initialState, action: any) => {

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