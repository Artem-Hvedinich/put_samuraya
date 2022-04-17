import React, {useEffect} from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redax/profileReducer";
import {useDispatch,} from "react-redux";
import {Navigate, useParams} from "react-router-dom";
import {PATH} from "../../App";

export const Profile = ({isAuth}: { isAuth: boolean }) => {
    const dispatch = useDispatch()
    let {userId} = useParams<{ userId: string }>()
    useEffect(() => {
        if (userId) {
            dispatch(getUserProfile(userId))
            dispatch(getUserStatus(userId))
            dispatch(updateUserStatus(''))
        }
    }, [])

    if (!isAuth) return <Navigate to={PATH.Login}/>
    return (
        <div style={{width: '100%'}}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}
