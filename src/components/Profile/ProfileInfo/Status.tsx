import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../redax/reduxStore";
import {statusEditModeAction, updateUserStatus} from "../../../redax/profileReducer";
import styled from "styled-components";
import {NullableType} from "../../../redax/authReducer";
import {useFormik} from "formik";
import {Button} from '../../../assets/styledComponent/Button'


export const Status = () => {
    const status = useSelector<AppStoreType, NullableType<string>>(s => s.myPostPage.status)
    const statusEditMode = useSelector<AppStoreType, NullableType<boolean>>(s => s.myPostPage.statusEditMode)

    const dispatch = useDispatch()
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
                <Button style={{marginLeft: '2vw'}} type={'submit'} width={4} height={1.5} color={'#fff'}
                        bgColor={'#4d655b'}>Add</Button>
            </form>
            : <StatusText
                onDoubleClick={activateEditMode}>{status !== '' ? status : 'Set status'}</StatusText>
    )
}
const Input = styled.input`
  width: 10vw;
  height: 1.5vw;
  font-size: 1vw;
  border: none;
  background-color: rgba(77, 101, 91, 0.25)`
const StatusText = styled.p`
  padding: 0.1vw 1vw;
  cursor: pointer;

  :hover {
    background-color: rgba(128, 128, 128, 0.05);
    border-radius: 0.3vw;
  }`