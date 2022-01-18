import React from "react";
import s from './Header.module.css'


const Header = () => {
    return (
        <header className={s.header}>
            <HeaderImg/>
            <h1>TRAIL</h1>
        </header>
    )
}
const HeaderImg = () => {
    return (
        <img
            src='https://cdn-icons-png.flaticon.com/512/136/136436.png'/>        )
}
export default Header;