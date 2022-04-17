import React from "react";
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
import {Dialogs} from "./components/Dialogs/Dialogs";
import styled from "styled-components";

const NetworkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(to right, rgb(66, 63, 63), rgb(78, 114, 121), rgb(66, 63, 63));
  flex-wrap: wrap;
`

const MainWrapper = styled.div`
  display: flex;
  width: 60vw;
`

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
    const userId = useSelector<AppStoreType, number>(s => s.auth.id)

    return (
        <NetworkWrapper>
            <Header/>
            <MainWrapper>
                <Navbar userId={userId}/>
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
            </MainWrapper>
        </NetworkWrapper>
    )
}

export default App;