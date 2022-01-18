import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost, MyPostPageType} from "../../redax/state";

type ProfileType = MyPostPageType & {
    addPost:(message: string)=> void
}

const Profile = (props: ProfileType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts myPostData={props.myPostData} addPost={addPost} />
    </div>
}

export default Profile;