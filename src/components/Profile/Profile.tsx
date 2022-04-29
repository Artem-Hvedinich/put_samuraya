import React, {useCallback, useEffect} from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {getUserProfile, getUserStatus, ProfilePageType, savePhotoTC,} from "../../redax/profileReducer";
import {useDispatch, useSelector,} from "react-redux";
import {Navigate, useParams} from "react-router-dom";
import {AppStoreType} from "../../redax/reduxStore";
import {PATH} from "../RoutesWrapper/RoutersWrapper";
import {NullableType} from "../../redax/authReducer";

const Profile = ({isAuth, authId}: { isAuth: boolean, authId: NullableType<number> }) => {
    const myPostPage = useSelector<AppStoreType, ProfilePageType>(s => s.myPostPage)
    const dispatch = useDispatch()
    const {userId} = useParams<{ userId: string }>()
    const savePhoto = useCallback((file: string | Blob) => dispatch(savePhotoTC(file)), [])

    useEffect(() => {
        if (userId) {
            dispatch(getUserProfile(userId))
            dispatch(getUserStatus(userId))
        }
    }, [userId, myPostPage.editMode])


    if (!isAuth) return <Navigate to={PATH.Login}/>
    return (
        <div>
            <ProfileInfo profile={myPostPage.profile} editMode={myPostPage.editMode} authId={authId}
                         savePhoto={savePhoto}/>
            <MyPosts/>
        </div>
    )
}
export default Profile