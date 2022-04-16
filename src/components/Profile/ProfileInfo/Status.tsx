import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../redax/reduxStore";
import {updateUserStatus} from "../../../redax/profileReducer";


export const Status = () => {

    const status = useSelector<AppStoreType, string>(s => s.myPostPage.status)
    const dispatch = useDispatch()
    console.log(status)
    const [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true);
    }
    const activateViewMode = () => {
        setEditMode(false);
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        dispatch(updateUserStatus(e.currentTarget.value))
    }

    return (
        editMode ?
            <input autoFocus onChange={onChangeHandler} value={status}
                   onBlur={activateViewMode}/>
            : <span onDoubleClick={activateEditMode}>{status || "No status"}</span>
    )
}
