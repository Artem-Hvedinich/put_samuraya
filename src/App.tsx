import React, {useEffect} from "react";
import Navbar from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./redax/reduxStore";
import styled from "styled-components";
import {initializedApp} from "./redax/appReducer";
import {Preloader} from "./components/common/Preloader/Preloader";
import {RoutersWrapper} from "./components/RoutesWrapper/RoutersWrapper";

const NetworkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(to right, rgb(66, 63, 63), rgb(174, 243, 214), rgba(66, 63, 63, 0.54));
  flex-wrap: wrap;
`
const MainWrapper = styled.div`
  display: flex;
  width: 60vw;
`

export const App = () => {
    const initialized = useSelector<AppStoreType, boolean>(s => s.app.initialized)
    const isAuth = useSelector<AppStoreType, boolean>(s => s.auth.isAuth)
    const userId = useSelector<AppStoreType, number>(s => s.auth.id)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializedApp())
    }, [])

    if (!initialized) return <Preloader/>
    return (
        <NetworkWrapper>
            <Header/>
            <MainWrapper>
                <Navbar userId={userId}/>
                <RoutersWrapper userId={userId} isAuth={isAuth}/>
            </MainWrapper>
        </NetworkWrapper>
    )
}