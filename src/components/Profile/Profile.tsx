import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redax/profileReducer";
import {Navigate, Route, Routes} from "react-router-dom";
import {PATH} from "../../App";

type ProfilePropsType = {
    profile: ProfileType
}

const Profile = (props: ProfilePropsType) => {

    return <div style={{width: '100%'}}>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer/>
    </div>
}

export default Profile;