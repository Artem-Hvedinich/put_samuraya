import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/Message";
import {MessagePageType} from "../../redax/dialogsReducer";

type DialogsPropsType = {
    updateMewMessageBody: (body: string) => void
    onSendMessageClick: () => void
    messagesPage: MessagePageType
}

export const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.messagesPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>);
    let messagesElements = props.messagesPage.messages.map(m => <Messages key={m.id} id={m.id} messages={m.message}/>);
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

