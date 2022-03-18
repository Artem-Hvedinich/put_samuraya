import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redax/profileReducer";

type ProfilePropsType = {
    profile: ProfileType
}

const Profile = (props: ProfilePropsType) => {
    return <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer/>
    </div>
}

export default Profile;