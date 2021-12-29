import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props: any) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Messages = (props: any) => {
    return (
        <div className={s.message}>{props.messages}</div>
    )
}

const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Artem'},
        {id: 6, name: 'Viktor'}
    ]

    let messages = [
        {id: 1, messages: 'Hi'},
        {id: 2, messages: 'How a you'},
        {id: 3, messages: 'Artem?'},
        {id: 4, messages: 'Yo'},
        {id: 5, messages: 'Artem?'},
        {id: 6, messages: 'sdjksdkjmn'}

    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = messages.map(m => <Messages messages={m.messages} id={m.id}/>);

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messagesElements}
        </div>
    </div>
}
export default Dialogs