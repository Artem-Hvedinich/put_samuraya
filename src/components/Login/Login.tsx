import React from 'react';
import styled from "styled-components";
import { NullableType} from "../../redax/authReducer";
import {Navigate} from "react-router-dom";
import {PATH} from '../RoutesWrapper/RoutersWrapper';
import {LoginForm} from "./LoginFormData";


const LoginWrapper = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const FreeLogin = styled.div`
  color: grey;
`

export const Login = ({isAuth, authId}: { isAuth: boolean, authId: NullableType<number> }) => {

    if (isAuth)
        return <Navigate to={`${PATH.Profile}/${authId}`}/>

    return (
        <LoginWrapper>
            <h1> Login</h1>
            <FreeLogin>
                <p>To log in get registered
                    <a href={'https://social-network.samuraijs.com/'}
                       target={'_blank'}> here
                    </a>
                </p>

                <p>or use common test account credentials:</p>
                <p>Email: free@samuraijs.com</p>
                <p>Password: free</p>
            </FreeLogin>
            <LoginForm/>
        </LoginWrapper>
    )
}
