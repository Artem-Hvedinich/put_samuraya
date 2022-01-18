import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props: any) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            {/*<img src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"/>*/}
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem