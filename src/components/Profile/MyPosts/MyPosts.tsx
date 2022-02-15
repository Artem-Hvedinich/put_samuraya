import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {MyPostTitle} from "./Post/Post";
import {PostType} from "../../../redax/profileReducer";

type MyPostType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
    myPostData: Array<PostType>
    newPostText: string
};


export const MyPosts = (props: MyPostType) => {

    let myPostElements = props.myPostData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const onAddPost = () => props.addPost()
    const onPostChange = () => {
        let text = newPostElement.current?.value
        if (text) {
            props.updateNewPostText(text)
        }
    }

    return (
        <div className={s.postsBlock}>
            <MyPostTitle/>
            <textarea value={props.newPostText}
                      placeholder='Enter You Comment'
                      onChange={onPostChange}
                      ref={newPostElement}
            />
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div>
                {myPostElements}
            </div>
        </div>)
}