import React from "react";
import styled from "styled-components";

const TextareaWrapper = styled.textarea<{ hasError: string }>`
  border: ${props => props.hasError && '2px solid red'};
`
const InputWrapper = styled.input<{ hasError: string }>`
  border: ${props => props.hasError && '2px solid red'};
`

const Error = styled.span`
  color: red`

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