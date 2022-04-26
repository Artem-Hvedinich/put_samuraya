import React, {useEffect} from "react";
import Navbar from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./redax/reduxStore";
import styled from "styled-components";
import {RoutersWrapper} from "./components/RoutesWrapper/RoutersWrapper";
import {DataAuthType} from "./redax/authReducer";
import {ErrorSnackbar} from "./components/common/ErrorSnackbar";
import {initializeApp} from "./redax/appReducer";
import {LinearProgress} from "@mui/material";

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
    const initialized = useSelector<AppStoreType, boolean>(s => s.app.isInitialized)
    const auth = useSelector<AppStoreType, DataAuthType>(s => s.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializeApp())
    }, [])

    if (!initialized) return <LinearProgress/>
    return (
        <NetworkWrapper>
            <ErrorSnackbar/>
            <Header/>
            <MainWrapper>
                <Navbar authId={auth.id}/>
                <RoutersWrapper authId={auth.id} isAuth={auth.isAuth}/>
            </MainWrapper>
        </NetworkWrapper>
    )
}