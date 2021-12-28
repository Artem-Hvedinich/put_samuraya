import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    let myPostData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'American idol', likesCount: 11},
    ]
    return <div className={s.postsBlock}>
        <MyPostTitle/>
        <Post message={myPostData[0].message} likesCount={myPostData[0].likesCount}/>
        <MyPostTitle/>
        <Post message={myPostData[1].message} likesCount={myPostData[1].likesCount}/>
    </div>
}

function MyPostTitle() {
    return <div>
        <h2>My post</h2>
    </div>
}

export default MyPosts;