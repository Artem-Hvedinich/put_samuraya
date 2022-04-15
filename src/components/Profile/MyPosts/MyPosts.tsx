import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostType} from "../../../redax/profileReducer";

type MyPostType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
    myPostData: Array<PostType>
    newPostText: string
};

export const MyPosts = (props: MyPostType) => {
    let myPostElements = props.myPostData.map(p =>
        <Post key={p.id} message={p.message}
              likesCount={p.likesCount} img={p.img}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => props.addPost()
    const onPostChange = () => {
        let text = newPostElement.current?.value
        if (text) {
            props.updateNewPostText(text)
        }
    }

    return (
        <div className={s.postsBlock}>
            <div >
                <h2>My post</h2>
                <textarea value={props.newPostText}
                          placeholder='Enter You Comment'
                          onChange={onPostChange}
                          ref={newPostElement}
                          className={s.text}
                />
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div>
                    {myPostElements}
                </div>
            </div>
        </div>
    )
}