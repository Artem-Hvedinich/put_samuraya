import React from "react";
import './App.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Settings/Setting";
import {Routes, Route, Navigate} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";

export const PATH = {
    Profile: '/profile',
    Dialogs: '/dialogs',
    Users: '/users',
    News: '/news',
    Music: '/music',
    Setting: '/setting'
}

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/'} element={<Navigate to={PATH.Profile}/>}/>
                    <Route path={PATH.Profile} element={<Profile/>}/>
                    <Route path={PATH.Users} element={<UsersContainer/>}/>
                    <Route path={PATH.Dialogs} element={<DialogsContainer/>}/>
                    <Route path={PATH.News} element={<News/>}/>
                    <Route path={PATH.Music} element={<Music/>}/>
                    <Route path={PATH.Setting} element={<Setting/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;