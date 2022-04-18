import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../redax/reduxStore";
import {updateUserStatus} from "../../../redax/profileReducer";
import styled from "styled-components";

const Input = styled.input`
  width: 10vw;
  height: 1.5vw;
  font-size: 1vw;
  background-color: rgba(255, 255, 255, 0.4);
  border: none;`

export const Status = () => {
    const status = useSelector<AppStoreType, string>(s => s.myPostPage.status)
    const dispatch = useDispatch()
    const [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true);
    }
    const activateViewMode = () => {
        setEditMode(false);
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateUserStatus(e.currentTarget.value))
    }

    return (
        editMode ?
            <Input autoFocus onChange={onChangeHandler} value={status}
                   onBlur={activateViewMode}/>
            : <p onDoubleClick={activateEditMode}>{status || "No status"}</p>
    )
}
