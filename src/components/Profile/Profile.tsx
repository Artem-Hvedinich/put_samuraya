import React, { useEffect} from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {getUserProfile, getUserStatus, ProfilePageType, } from "../../redax/profileReducer";
import {useDispatch, useSelector,} from "react-redux";
import {Navigate, useParams} from "react-router-dom";
import {AppStoreType} from "../../redax/reduxStore";
import {PATH} from "../RoutesWrapper/RoutersWrapper";
import {NullableType} from "../../redax/authReducer";

const Profile = ({isAuth, authId}: { isAuth: boolean, authId: NullableType<number> }) => {
    const myPostPage = useSelector<AppStoreType, ProfilePageType>(s => s.myPostPage)
    const dispatch = useDispatch()
    const {userId} = useParams<{ userId: string }>()

    useEffect(() => {
        if (userId) {
            dispatch(getUserProfile(userId))
            dispatch(getUserStatus(userId))
        }
    }, [userId, myPostPage.editMode])


    if (!isAuth) return <Navigate to={PATH.Login}/>
    return (
        <div>
            <ProfileInfo profile={myPostPage.profile} editMode={myPostPage.editMode} authId={authId}/>
            <MyPosts/>
        </div>
    )
}
export default Profile