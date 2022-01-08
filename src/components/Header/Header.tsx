import React from "react";
import s from './Header.module.css'


const Header = () => {
    return (
        <header className={s.header}>
            <img
                src='https://w7.pngwing.com/pngs/786/126/png-transparent-logo-contracting-photography-logo-symbol.png'/>
            <h1>TRAIL</h1>
        </header>
    )
}

export default Header;