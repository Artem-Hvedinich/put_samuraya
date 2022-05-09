import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Users} from "../Users/Users";
import {News} from "../News/News";
import {Music} from "../Music/Music";
import {Setting} from "../Settings/Setting";
import {Login} from "../Login/Login";
import {NullableType} from "../../redax/authReducer";
import Profile from '../Profile/Profile';
import Dialogs from '../Dialogs/Dialogs';
import {OneNews} from "../News/NewsContentBlock";

export const PATH = {
    Login: '/login',
    Profile: '/profile',
    Dialogs: '/dialogs',
    Users: '/users',
    News: '/news',
    Music: '/music',
    Setting: '/setting'
}
export const RoutersWrapper = ({isAuth, authId}: { isAuth: boolean, authId: NullableType<number> }) => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={PATH.Login}/>}/>
            <Route path={PATH.Profile + "/:userId"} element={
                <Profile isAuth={isAuth} authId={authId}/>}/>
            <Route path={PATH.Users} element={<Users/>}/>
            <Route path={PATH.Dialogs} element={
                <Dialogs isAuth={isAuth}/>}/>
            <Route path={PATH.News} element={<News/>}/>
            <Route path={PATH.News + '/:newsId'} element={<OneNews/>}/>
            <Route path={PATH.Music} element={<Music/>}/>
            <Route path={PATH.Setting} element={<Setting/>}/>
            <Route path={PATH.Login} element={<Login isAuth={isAuth} authId={authId}/>
            }/>
        </Routes>
    )
}