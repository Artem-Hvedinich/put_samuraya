import React, {useEffect} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redax/profileReducer";
import {useParams} from "react-router-dom";


export type ProfileType = {
    userId?: number
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    contacts?: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos?: {
        small?: string
        large?: string
    }
}
type MapStatePropsType = {
    profile: ProfileType
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
// type Id = {
//     userId: string
// }

type OnePropsType = MapDispatchPropsType & MapStatePropsType
type PropsType = OnePropsType

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

let mapStateToProps = (state: any) => ({
    profile: state.myPostPage.profile
})


export const ProfileContainer = connect(mapStateToProps, {setUserProfile})
(ProfileApiComponent)