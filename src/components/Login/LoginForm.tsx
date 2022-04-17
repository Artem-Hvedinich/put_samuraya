import {minLengthCreator, requiredField} from "../../utils/valubator/validators";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Error, FormWrapper} from "../../assets/Wrapper";
import {Input} from "../common/FormsControls/FormControls";
import styled from "styled-components";

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
`
const Text = styled.p`
`
const InputWrapper = styled(Field)`
  height: 20px;`


export type FromDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const minLength5 = minLengthCreator(5)
export const LoginForm: React.FC<InjectedFormProps<FromDataType>> = (props: any) => {
    return (
        <FormWrapper onSubmit={props.handleSubmit}>
            <TextWrapper>
                <InputWrapper placeholder={'email'} name={'email'} component={Input}
                              validate={[requiredField, minLength5]}/>
            </TextWrapper>
            <TextWrapper>
                <InputWrapper placeholder={'Password'} name={'password'} component={Input}
                              validate={[requiredField, minLength5]}/>
            </TextWrapper>
            <TextWrapper>
                <Text>Remember Me</Text>
                <InputWrapper type='checkbox' name={'rememberMe'} component={Input}/>
            </TextWrapper>
            {props.error &&
                <Error>{props.error}</Error>}
            <TextWrapper>
                <button>Login</button>
            </TextWrapper>
        </FormWrapper>
    )
}

export const LoginReduxForm = reduxForm<FromDataType>({form: 'login'})(LoginForm)