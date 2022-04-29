import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {PATH} from "../RoutesWrapper/RoutersWrapper";
import {NullableType} from "../../redax/authReducer";
import {ProfileIcon} from "../../assets/images/ProfileIcon";
import {NavIconWrapper} from "../../assets/styledComponent/Wrappers";
import {MusicIcon} from "../../assets/images/MusicIcon";
import {MessageIcon} from "../../assets/images/MessageIcon";
import {NewsIcon} from "../../assets/images/NewsIcon";
import {SettingsIcon} from "../../assets/images/SettingsIcon";
import UsersIcon from "../../assets/images/UsersIcon";

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

`

const Navbar = ({authId}: { authId: NullableType<number> }) => {
    const setActive = (navData: any) => ({
        borderBottom: navData.isActive ? "0.15vw solid black" : '',
    })


    return (
        <NavBarWrapper>
            <NavLink to={`${PATH.Profile}/${authId}`}
                     style={setActive}>
                <NavIconWrapper> <ProfileIcon/> </NavIconWrapper>
            </NavLink>
            <NavLink to={PATH.Dialogs} style={setActive}>
                <NavIconWrapper><MessageIcon/></NavIconWrapper>
            </NavLink>
            <NavLink to={PATH.Users} style={setActive}>
                <NavIconWrapper><UsersIcon/></NavIconWrapper>
            </NavLink>
            <NavLink to={PATH.News} style={setActive}>
                <NavIconWrapper><NewsIcon/></NavIconWrapper>
            </NavLink>
            <NavLink to={PATH.Music} style={setActive}>
                <NavIconWrapper><MusicIcon/></NavIconWrapper>
            </NavLink>
            <NavLink to={PATH.Setting} style={setActive}>
                <NavIconWrapper><SettingsIcon/></NavIconWrapper>
            </NavLink>

        </NavBarWrapper>
    )
}

export default Navbar;