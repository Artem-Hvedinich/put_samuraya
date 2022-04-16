import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {PATH} from "../../App";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../redax/reduxStore";

const Navbar = () => {
    const setActive = ({isActive}: any) => isActive ? s.active : s.anActive
    const userId = useSelector<AppStoreType, number>(s => s.auth.id)
    return (
        <nav className={s.nav}>
            <NavLink to={`${PATH.Profile}/${userId}`} className={setActive}>Profile</NavLink>
            <NavLink to={PATH.Dialogs} className={setActive}>Messages</NavLink>
            <NavLink to={PATH.News} className={setActive}>News</NavLink>
            <NavLink to={PATH.Music} className={setActive}>Music</NavLink>
            <NavLink to={PATH.Setting} className={setActive}>Setting</NavLink>
            <NavLink to={PATH.Users} className={setActive}>Users</NavLink>
        </nav>
    )
}

export default Navbar;