import React from 'react';
import styled from "styled-components";

const LoginForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const TextWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Text = styled.p`
`
const Input = styled.input`
    height: 20px;
`

export const Login = () => {
    return (
        <LoginForm>
            Login
            <TextWrapper>
                <Text>Login</Text>
                <Input placeholder={'Login'}/>
            </TextWrapper>
            <TextWrapper>
                <Text>Password</Text>
                <Input placeholder={'Password'}/>
            </TextWrapper>

        </LoginForm>
    );
};

