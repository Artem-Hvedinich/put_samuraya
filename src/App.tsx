import React, {useEffect} from "react";
import {Header} from "./components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./redax/reduxStore";
import styled from "styled-components";
import {RoutersWrapper} from "./components/RoutesWrapper/RoutersWrapper";
import {DataAuthType} from "./redax/authReducer";
import {ErrorSnackbar} from "./components/common/ErrorSnackbar";
import {initializeApp, RequestStatusType} from "./redax/appReducer";
import {LinearProgress} from "@mui/material";


export const App = () => {
    const initialized = useSelector<AppStoreType, boolean>(s => s.app.isInitialized)
    const auth = useSelector<AppStoreType, DataAuthType>(s => s.auth)
    const status = useSelector<AppStoreType, RequestStatusType>(s => s.app.status)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializeApp())
    }, [])

    if (!initialized) return <LinearProgressWrapper color={'success'}/>
    return (
        <NetworkWrapper>
            <ErrorSnackbar/>
            {status === 'loading' && <LinearProgressWrapper color={'success'}/>}
            <Header/>
            <MainWrapper>
                <RoutersWrapper authId={auth.id} isAuth={auth.isAuth}/>
            </MainWrapper>
        </NetworkWrapper>
    )
}
const NetworkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;`

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;`

const LinearProgressWrapper = styled(LinearProgress)`
  position: fixed;
  width: 100%;`