import React from "react";
import s from './../Dialogs.module.css'

const Messages = (props: any) => {
    return (
        <div className={s.message}>{props.messages}</div>
    )
}


export default Messages