import React from "react";
import styled from "styled-components";
import {Error} from "../../../assets/Wrapper";
import {Field} from "redux-form";

const TextareaWrapper = styled.textarea<{ hasError: string }>`
  border: ${props => props.hasError && '2px solid red'};
`
const InputWrapper = styled.input<{ hasError: string }>`
  border: ${props => props.hasError && '2px solid red'};
`

export const Textarea = ({input, meta, ...props}: { input: any, meta: any }) => {
    const hasError = meta.touched && meta.error
    return (
        <div>
            <TextareaWrapper hasError={hasError} {...props} {...input}/>
            <div>
                {hasError && <Error>{meta.error}</Error>}
            </div>
        </div>
    )
}

export const Input = ({input, meta, ...props}: { input: any, meta: any }) => {
    const hasError = meta.touched && meta.error
    return (
        <div>
            <InputWrapper hasError={hasError} {...props} {...input}/>
            <div>
                {hasError && <Error>{meta.error}</Error>}
            </div>
        </div>
    )
}

export const CreateField = ({placeholder, name, validator, component}
                                : { placeholder: string, name: string, validator: [], component: any }) => {
    return (
        <div>
            <Field name={name} placeholder={placeholder} validator={validator} component={component}/>
        </div>
    )
}