import React from "react";
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Settings/Setting";
import {Routes, Route, Navigate} from "react-router-dom";
import {Login} from "./components/Login/Login";
import {Profile} from "./components/Profile/Profile";
import {Users} from "./components/Users/Users";
import {Header} from "./components/Header/Header";
import {useSelector} from "react-redux";
import {AppStoreType} from "./redax/reduxStore";
import { Dialogs } from "./components/Dialogs/Dialogs";

export const PATH = {
    Login: '/login',
    Profile: '/profile',
    Dialogs: '/dialogs',
    Users: '/users',
    News: '/news',
    Music: '/music',
    Setting: '/setting'
}

const App = () => {
    const isAuth = useSelector<AppStoreType, boolean>(s => s.auth.isAuth)

    return (
        <div className='container'>
            <div className={'header'}>
                <Header/>
            </div>
            <div>
                <div className={'content'}>
                    <div className={'nav'}>
                        <Navbar/>
                    </div>
                    <div className={'face'}>
                        <Routes>
                            <Route path={'/'} element={<Navigate to={PATH.Profile}/>}/>
                            <Route path={PATH.Profile + "/:userId"} element={<Profile isAuth={isAuth}/>}/>
                            <Route path={PATH.Users} element={<Users/>}/>
                            <Route path={PATH.Dialogs} element={<Dialogs isAuth={isAuth}/>}/>
                            <Route path={PATH.News} element={<News/>}/>
                            <Route path={PATH.Music} element={<Music/>}/>
                            <Route path={PATH.Setting} element={<Setting/>}/>
                            <Route path={PATH.Login} element={<Login/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;