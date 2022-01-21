import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostPageType} from "../../redax/state";
import message from "../Dialogs/Message/Message";

type ProfileType = MyPostPageType & {
    // addPost: () => void
    // updateNewPostText: (newPostText: string) => void
    dispatch: (action: any) => void
    newPostText: string
}

const Profile = (props: ProfileType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts myPostData={props.myPostData}
                 dispatch={props.dispatch}
                 newPostText={props.newPostText}
        />
    </div>
}

export default Profile;