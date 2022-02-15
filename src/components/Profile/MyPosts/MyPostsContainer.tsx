import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/profileReducer"
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StateType} from "../../../redax/redaxStore";

let mapStateToProps = (state: StateType) => {
    return {
        newPostText: state.myPostPage.newPostText,
        myPostData: state.myPostPage.myPostData
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
            dispatch(updateNewPostTextActionCreator(''));
        },
        updateNewPostText: (text: string) => {
            if (text) {
                dispatch(updateNewPostTextActionCreator(text));
            }
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


