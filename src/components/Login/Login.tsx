import React from 'react';
import styled from "styled-components";
import {FromDataType, LoginReduxForm} from './LoginForm';
import {useDispatch, useSelector} from "react-redux";

import {login} from "../../redax/authReducer";
import {Navigate, Route, Routes} from "react-router-dom";
import {PATH} from "../../App";

const LoginWrapper = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


export const Login = ({isAuth, userId}: { isAuth: boolean, userId: number }) => {
    const dispatch = useDispatch()

    const onSubmit = (formData: FromDataType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe))
    }
    if (isAuth)
        return <Navigate to={`${PATH.Profile}/${userId}`}/>
    return (
        <LoginWrapper>
            <h1> Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </LoginWrapper>
    )
}
