import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {PATH} from "../RoutesWrapper/RoutersWrapper";
import {NullableType} from "../../redax/authReducer";

const NavBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 10vw;
`

const Navbar = ({authId}: { authId: NullableType<number> }) => {
    const setActive = ({isActive}: any) => isActive ? s.active : s.anActive

    return (
        <NavBarWrapper>
            <NavLink to={`${PATH.Profile}/${authId}`} className={setActive}>Profile</NavLink>
            <NavLink to={PATH.Dialogs} className={setActive}>Messages</NavLink>
            <NavLink to={PATH.News} className={setActive}>News</NavLink>
            <NavLink to={PATH.Music} className={setActive}>Music</NavLink>
            <NavLink to={PATH.Setting} className={setActive}>Setting</NavLink>
            <NavLink to={PATH.Users} className={setActive}>Users</NavLink>
        </NavBarWrapper>
    )
}

export default Navbar;