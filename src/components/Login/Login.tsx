import React from 'react';
import styled from "styled-components";
import {NullableType} from "../../redax/authReducer";
import {Navigate} from "react-router-dom";
import {PATH} from '../RoutesWrapper/RoutersWrapper';
import {LoginForm} from "./LoginFormData";


const LoginWrapper = styled.div`
  width: 20vw;
  height: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.19);
  box-shadow: 0 0 3px black;
  border-radius: 5px;
  padding: 1vw `

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
            <div>
                <LoginForm/></div>
        </LoginWrapper>
    )
}
