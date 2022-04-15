import React from "react";
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Settings/Setting";
import {Routes, Route, Navigate} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";

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
    return (
        <div className='container'>
            <div className={'header'}>
                <HeaderContainer/>
            </div>
            <div>
                <div className={'content'}>
                    <div className={'nav'}>
                        <Navbar/>
                    </div>
                    <div className={'face'}>
                        <Routes>
                            <Route path={'/'} element={<Navigate to={PATH.Profile}/>}/>
                            <Route path={PATH.Profile + "/:userId"} element={<ProfileContainer />}/>
                            <Route path={PATH.Users} element={<UsersContainer/>}/>
                            <Route path={PATH.Dialogs} element={<DialogsContainer/>}/>
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