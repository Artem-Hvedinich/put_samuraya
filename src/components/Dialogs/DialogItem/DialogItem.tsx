import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props: any) => {

    return (
        <div className={s.dialog + ' ' + s.active}>
            {props.name}
        </div>
    )
}

export default DialogItem