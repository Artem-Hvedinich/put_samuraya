import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/Message";
import {MessagePageType,} from "../../redax/state";
import {sendMessageCreator, updateMewMessageBodyCreator} from "../../redax/dialogsReducer";

type DialogsPropsType = MessagePageType & {
    dispatch: (action: any) => void
}

const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Messages messages={m.message} id={m.id}/>);
    let newMessageBody = props.newMessageBody;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())

    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.dispatch(updateMewMessageBodyCreator(body))
    }


    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            <div>{messagesElements}</div>

            <div>
                <div><textarea value={newMessageBody}
                               onChange={onNewMessageChange}
                               placeholder='Enter You Message'></textarea></div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    </div>;
}


export default Dialogs