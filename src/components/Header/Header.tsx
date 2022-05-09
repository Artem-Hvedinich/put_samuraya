import React from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redax/store";
import {DataAuthType, logout} from "../../redax/authReducer";
import styled from "styled-components";
import {PATH} from "../RoutesWrapper/RoutersWrapper";
import Navbar from "../Navbar/Navbar";


export const Header = () => {
    const auth = useSelector<AppStoreType, DataAuthType>(s => s.auth)
    const dispatch = useDispatch()
    const logoutClick = () => {
        dispatch(logout())
    }
    return (
        <HeaderWrapper>
            <HeaderBlock>
                <LogoBlock>
                    <NavLink to={PATH.Profile + `/${auth.id}`}><Img
                        src='https://cdn-icons-png.flaticon.com/512/136/136436.png'/></NavLink>
                </LogoBlock>
                <Navbar authId={auth.id}/>
                {auth.isAuth ? <div>
                        <Button onClick={logoutClick}>Logout</Button>
                    </div>
                    : <NavLinkWrapper to={PATH.Login}>Login</NavLinkWrapper>}
            </HeaderBlock>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
  display: flex;
  z-index: 3;
  justify-content: center;
  width: 100vw;
  background-color: rgb(255, 255, 255);
  margin-bottom: 1vw;
  padding: 0.4vw 0;
  box-shadow: 0 0 3px black;`
const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60vw;`
const LogoBlock = styled.div`
  display: flex;
  align-items: center;`
const Img = styled.img`
  width: 4vw;
  padding-right: 1vw;`
const NavLinkWrapper = styled(NavLink)`
  font-size: 1vw;
  cursor: pointer;
  margin-left: 1vw;
  padding: 0.2vw 0.5vw;
  border: 0.1vw solid black;
  border-radius: 0.5vw;`
const Button = styled.button`
  font-size: 1vw;
  margin-left: 1vw;
  padding: 0.2vw 0.5vw;
  border: 0.1vw solid black;
  border-radius: 0.5vw;
  background: none;
  cursor: pointer;

  :hover {
    background-color: #cccaca;
    transition: background-color 0.5s;
  }`