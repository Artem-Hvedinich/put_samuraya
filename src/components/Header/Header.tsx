import React, {useEffect} from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redax/reduxStore";
import {DataType, getAuthUserData} from "../../redax/authReducer";

export const Header = () => {
    const auth = useSelector<AppStoreType, DataType>(s => s.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAuthUserData())
    }, [])

    return (
        <header className={s.header}>
            <div className={s.img}><img
                src='https://cdn-icons-png.flaticon.com/512/136/136436.png'/>
                <h2 className={s.title}>AiR Network</h2>
            </div>
            <div className={s.loginBlock}>
                {auth.isAuth ? auth.login
                    : <NavLink to={PATH.Login}>Login</NavLink>}
            </div>
        </header>
    )
}