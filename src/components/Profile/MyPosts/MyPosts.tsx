import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return <div className={s.postsBlock}>
        <MyPostTitle/>
        <Post message='Hi, how are you?'/>
        <MyPostTitle/>
        <Post message='Hi, MY are you?'/>
    </div>
}

function MyPostTitle() {
    return <div>
        <h2>My post</h2>
    </div>
}

export default MyPosts;