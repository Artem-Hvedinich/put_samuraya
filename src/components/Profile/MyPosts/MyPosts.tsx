import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {MyPostTitle} from "./Post/Post";
import {MyPostPageType} from "../../../redax/state";

type MyPostType = MyPostPageType & {
    addPost:(message: string)=> void
    updateNewPostText: (newPostText: string) => void
    newPostText: string
};

export const MyPosts = (props: MyPostType) => {

    let myPostElements = props.myPostData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()


    const addPost = () => {
            props.addPost('')
            props.updateNewPostText('')
    }

    const onPostChange = () => {
        let text = newPostElement?.current?.value
        if(text){
            props.updateNewPostText(text);
        }
    }
    return <div className={s.postsBlock}>
        <MyPostTitle/>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        <div>
            <button onClick={addPost}>Add post</button>
        </div>
        <div>
            {myPostElements}
        </div>
    </div>
}

export default MyPosts