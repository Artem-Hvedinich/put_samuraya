import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {myPostData} from "../../../index";


export const MyPosts = () => {
    let myPostElements = myPostData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return <div className={s.postsBlock}>
        {myPostElements}
    </div>
}

export default MyPosts;