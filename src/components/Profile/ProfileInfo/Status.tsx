import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../redax/reduxStore";
import {statusEditModeAction, updateUserStatus} from "../../../redax/profileReducer";
import styled from "styled-components";
import {NullableType} from "../../../redax/authReducer";
import {useFormik} from "formik";

const Input = styled.input`
  width: 10vw;
  height: 1.5vw;
  font-size: 1vw;
  background-color: rgba(255, 255, 255, 0.4);
  border: none;`

export const Status = () => {
    const status = useSelector<AppStoreType, NullableType<string>>(s => s.myPostPage.status)
    const statusEditMode = useSelector<AppStoreType, NullableType<boolean>>(s => s.myPostPage.statusEditMode)

    const dispatch = useDispatch()
    // const [editMode, setEditMode] = useState(false)
    const formik = useFormik({
        initialValues: {statusValue: ''},
        onSubmit: (values) => {
            dispatch(updateUserStatus(values.statusValue))
        }
    })
    const activateEditMode = () => {
        dispatch(statusEditModeAction({statusEditMode: true}))
    }


    return (
        statusEditMode ?
            <form onSubmit={formik.handleSubmit}>
                <Input autoFocus onChange={formik.handleChange}
                       value={formik.values.statusValue ? formik.values.statusValue : ''}
                       id="email"
                       name="statusValue"
                       type="text"/>
            </form>
            : <p style={{backgroundColor:'rgba(77, 101, 91, 0.5)'}} onDoubleClick={activateEditMode}>{`My status: ${status}` || "No status"}</p>
    )
}
