import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "../../App";

type HeaderType = {
    login: string
    isAuth: boolean
}

export const Header = (props: HeaderType) => {
    return (
        <header className={s.header}>
            <div className={s.img}><img
                src='https://cdn-icons-png.flaticon.com/512/136/136436.png'/>
                <h2 className={s.title}>AiR Network</h2>
            </div>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={PATH.Login}>Login</NavLink>}
            </div>
        </header>
    )
}