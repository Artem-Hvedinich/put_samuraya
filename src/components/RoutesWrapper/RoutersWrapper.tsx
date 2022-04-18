import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Profile} from "../Profile/Profile";
import {Users} from "../Users/Users";
import {Dialogs} from "../Dialogs/Dialogs";
import News from "../News/News";
import Music from "../Music/Music";
import Setting from "../Settings/Setting";
import {Login} from "../Login/Login";

export const PATH = {
    Login: '/login',
    Profile: '/profile',
    Dialogs: '/dialogs',
    Users: '/users',
    News: '/news',
    Music: '/music',
    Setting: '/setting'
}
export const RoutersWrapper = ({isAuth, userId}: { isAuth: boolean, userId: number }) => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={PATH.Profile}/>}/>
            <Route path={PATH.Profile + "/:userId"} element={<Profile isAuth={isAuth}/>}/>
            <Route path={PATH.Users} element={<Users/>}/>
            <Route path={PATH.Dialogs} element={<Dialogs isAuth={isAuth}/>}/>
            <Route path={PATH.News} element={<News/>}/>
            <Route path={PATH.Music} element={<Music/>}/>
            <Route path={PATH.Setting} element={<Setting/>}/>
            <Route path={PATH.Login} element={<Login isAuth={isAuth} userId={userId}/>}/>
        </Routes>
    )
}