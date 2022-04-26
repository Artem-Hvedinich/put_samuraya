import React from 'react';
import styled from "styled-components";
import {FromDataType, LoginReduxForm} from './LoginForm';
import {useDispatch} from "react-redux";
import {login, NullableType} from "../../redax/authReducer";
import {Navigate} from "react-router-dom";
import {PATH} from '../RoutesWrapper/RoutersWrapper';


const LoginWrapper = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


export const Login = ({isAuth, authId}: { isAuth: boolean, authId: NullableType<number> }) => {
    const dispatch = useDispatch()

    const onSubmit = (formData: FromDataType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe))
    }
    if (isAuth)
        return <Navigate to={`${PATH.Profile}/${authId}`}/>
    return (
        <LoginWrapper>
            <h1> Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </LoginWrapper>
    )
}
