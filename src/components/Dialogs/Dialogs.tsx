import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/Message";
import {dialogsType, MessagePageType, messageType,} from "../../redax/store";

type DialogsPropsType = {
    updateMewMessageBody: (body: string) => void
    onSendMessageClick: () => void
    messagesPage: MessagePageType
}

export const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messagesPage.messages.map(m => <Messages messages={m.message} id={m.id}/>);
    let newMessageBody = props.messagesPage.newMessageBody;

    let onSendMessageClick = () => {
        props.onSendMessageClick()

    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateMewMessageBody(body)
    }

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            <div>{messagesElements}</div>
            <div>
                <div>
            <textarea value={newMessageBody}
                      onChange={onNewMessageChange}
                      placeholder='Enter You Message'/>
                </div>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
    </div>;
}

