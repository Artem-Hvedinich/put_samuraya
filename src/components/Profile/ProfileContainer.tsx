import React, {useEffect} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {MyPostPageType, PostType, ProfileType, setUserProfile} from "../../redax/profileReducer";
import {useParams} from "react-router-dom";
import {StateType} from "../../redax/reduxStore";


type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
type PropsType = MapDispatchPropsType & MyPostPageType

export function ProfileApiComponent(props: PropsType) {

    let {userId} = useParams<{ userId: string }>()
    console.log('userId', userId)
    useEffect(() => {
        //let UsersId = props.profile.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(r => {
                props.setUserProfile(r.data)
            })
    }, [])

    return <Profile profile={props.profile}/>
}

let mapStateToProps = (state: StateType) => {
    return ({
            myPostData: state.myPostPage.myPostData,
            newPostText: state.myPostPage.newPostText,
            profile: state.myPostPage.profile
        }
    )
}

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})
(ProfileApiComponent)