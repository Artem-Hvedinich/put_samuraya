import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost, MyPostPageType, } from "../../redax/state";
import message from "../Dialogs/Message/Message";

type ProfileType = MyPostPageType & {
    addPost: (message: string) => void
    newPostText: string
    updateNewPostText: (newPostText: string) => void
}

const Profile = (props: ProfileType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts myPostData={props.myPostData} addPost={addPost}
                 updateNewPostText={props.updateNewPostText}

                 newPostText={props.newPostText}
        />
    </div>
}

export default Profile;