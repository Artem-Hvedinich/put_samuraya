import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {MyPostTitle} from "./Post/Post";
import {MyPostPageType} from "../../../redax/state";

type MyPostType = MyPostPageType & {
    addPost:(message: string)=> void

};

export const MyPosts = (props: MyPostType) => {

    let myPostElements = props.myPostData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()


    const addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.addPost(text)
            newPostElement.current.value= ''
        }
    }

    return <div className={s.postsBlock}>
        <MyPostTitle/>
        <textarea ref={newPostElement}></textarea>
        <div>
            <button onClick={addPost}>Add post</button>
        </div>
        <div>
            {myPostElements}
        </div>
    </div>
}

export default MyPosts