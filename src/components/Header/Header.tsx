import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redax/reduxStore";
import {DataType, getAuthUserData, logout} from "../../redax/authReducer";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.15);
  margin-bottom: 1vw;
  padding: 0.4vw 0;
  box-shadow: 0 0 3px black;
`
const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60vw;`
const LogoBlock = styled.div`
  display: flex;
  align-items: center;

`
const Img = styled.img`
  width: 4vw;
  padding-right: 1vw;
`

export const Header = () => {
    const auth = useSelector<AppStoreType, DataType>(s => s.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAuthUserData())
    }, [])
    const logoutClick = () => {
        dispatch(logout())
    }
    return (
        <HeaderWrapper>
            <HeaderBlock>
                <LogoBlock>
                    <Img
                        src='https://cdn-icons-png.flaticon.com/512/136/136436.png'/>
                    AiR Network
                </LogoBlock>
                {auth.isAuth ? <div>
                        {auth.login}
                        <button onClick={logoutClick}>Logout</button>
                    </div>
                    : <NavLink style={{cursor: "initial"}} to={PATH.Login}>Login</NavLink>}
            </HeaderBlock>
        </HeaderWrapper>
    )
}