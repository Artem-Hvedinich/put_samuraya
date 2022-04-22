import React, {useEffect} from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {getUserProfile, getUserStatus, ProfileType, updateUserStatus} from "../../redax/profileReducer";
import {useDispatch, useSelector,} from "react-redux";
import {Navigate, useParams} from "react-router-dom";
import {AppStoreType} from "../../redax/reduxStore";
import {Preloader} from "../common/Preloader/Preloader";
import {PATH} from "../RoutesWrapper/RoutersWrapper";

const Profile = ({isAuth}: { isAuth: boolean }) => {
    const profile = useSelector<AppStoreType, ProfileType>(s => s.myPostPage.profile)
    const dispatch = useDispatch()
    let {userId} = useParams<{ userId: string }>()
    useEffect(() => {
        if (userId) {
            dispatch(getUserProfile(userId))
            dispatch(getUserStatus(userId))
        }
    }, [userId])

    if (!profile) return <Preloader/>
    if (!isAuth) return <Navigate to={PATH.Login}/>
    return (
        <div style={{width: '100%'}}>
            <ProfileInfo profile={profile}/>
            <MyPosts/>
        </div>
    )
}
export default Profile