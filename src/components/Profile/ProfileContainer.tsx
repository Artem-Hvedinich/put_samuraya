import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, MyPostPageType} from "../../redax/profileReducer";
import {Navigate, Route, Routes, useParams} from "react-router-dom";
import {StateType} from "../../redax/reduxStore";
import {PATH} from "../../App";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";


type MapDispatchPropsType = {
    getUserProfile: (userId: any) => void
    isAuth: boolean
}
type PropsType = MapDispatchPropsType & MyPostPageType

export function ProfileApiComponent(props: PropsType) {

    let {userId} = useParams<{ userId: string }>()
    props.getUserProfile(userId)
    return <Profile profile={props.profile}/>
}


let mapStateToProps = (state: StateType) => {
    return ({
            myPostData: state.myPostPage.myPostData,
            newPostText: state.myPostPage.newPostText,
            profile: state.myPostPage.profile,
            isAuth: state.auth.isAuth
        }
    )
}

let AuthRedirectComponent = WithAuthRedirect(Profile)

export const ProfileContainer = connect(mapStateToProps, {getUserProfile})
(AuthRedirectComponent)