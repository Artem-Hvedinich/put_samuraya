import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const satActive = {isActive => isActive ? 's.active' : ''}

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className={satActive}>Profile </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs'>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/setting'>Setting</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;