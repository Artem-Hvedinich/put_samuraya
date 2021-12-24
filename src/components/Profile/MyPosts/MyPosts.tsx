import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>
                My post
                <button>Like</button>
            </div>
            <div>
                <Post string='Hi, how are you?'/>
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts;