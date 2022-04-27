import styled from "styled-components";
import React from "react";

const FormikComponentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1vw;
  width: 100%;`

const Input = styled.input<{ width?: string }>`
  width: ${({width}) => `${width}vw` || '20vw'};`

const Textarea = styled.textarea<{ width?: string }>`
  width: ${({width}) => `${width}vw` || '20vw'};
  height: 5vw;
  resize: none;`

const LabelWrapper = styled.span`


`

export type ComponentType = 'input' | 'textarea'

export const FormikComponents = ({id, name, inputType, onChange, value, text, componentType, widthComponent}
                                     : {
    id: string, name: string, inputType?: string,
    onChange: any, value?: string, text?: string, componentType: ComponentType, widthComponent?: string
}) => {

    return <FormikComponentWrapper>
        <LabelWrapper>
            <label htmlFor={id}>{text}</label>
        </LabelWrapper>
        <span>
            {componentType === 'input' &&
                <Input width={widthComponent} id={id} name={name} type={inputType}
                       onChange={onChange} value={value}
                />}
            {componentType === 'textarea' &&
                <Textarea width={widthComponent} id={id} name={name}
                          onChange={onChange} value={value}/>}
        </span>
    </FormikComponentWrapper>
}