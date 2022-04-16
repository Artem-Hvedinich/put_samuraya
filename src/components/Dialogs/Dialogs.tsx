import React, {ChangeEvent, useCallback, useEffect} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/Message";
import {MessagePageType, sendMessageCreator, updateMewMessageBodyCreator} from "../../redax/dialogsReducer";
import {Navigate, Route, Routes} from "react-router-dom";
import {PATH} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redax/reduxStore";


export const Dialogs = ({isAuth}: { isAuth: boolean }) => {

    const messagesPage = useSelector<AppStoreType, MessagePageType>(s => s.messagesPage)
    const dispatch = useDispatch()

    let onSendMessageClick = () => {
        dispatch(sendMessageCreator())

    }
    let onNewMessageChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateMewMessageBodyCreator(e.target.value))
    }, [])

    if (!isAuth)
        return <Routes><Route path="*" element={<Navigate to={PATH.Login}/>}/></Routes>


    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {messagesPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)}
        </div>
        <div className={s.messages}>
            <div>{messagesPage.messages.map(m => <Messages key={m.id} id={m.id} messages={m.message}/>)}</div>
            <div>
                <div>
            <textarea value={messagesPage.newMessageBody}
                      onChange={onNewMessageChange}
                      placeholder='Enter You Message'/>
                </div>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
    </div>;

}