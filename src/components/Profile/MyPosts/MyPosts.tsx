import React from "react";
import "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
        <MyPostTitle/>
        <Post message='Hi, how are you?'/>
        <MyPostTitle/>
        <Post message='Hi, MY are you?'/>
    </div>
}

function MyPostTitle() {
    return <h1>My post</h1>
}

export default MyPosts;