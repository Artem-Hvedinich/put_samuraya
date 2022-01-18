import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/Message";
import {MessagePageType} from "../../redax/state";

type DialogsPropsType = MessagePageType & {}

const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Messages messages={m.message} id={m.id}/>);

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messagesElements}
            <TextareaButton/>
        </div>
    </div>;
}

const TextareaButton = () => {
    return (
        <div>
            <textarea></textarea>
            <div>
                <button>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs