import styled from "styled-components";
import React from "react";

const FormikComponentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;`

const Input = styled.input<{ width?: string }>`
  width: ${({width}) => `${width}vw` || '20vw'};`

const Textarea = styled.textarea<{ width?: string, height?: string }>`
  width: ${({width}) => `${width}vw` || '20vw'};
  height: ${({height}) => `${height}vw` || '5vw'};
  resize: none;`

const LabelWrapper = styled.span`


`

export type ComponentType = 'input' | 'textarea'

export const FormikComponents = ({
                                     id,
                                     name,
                                     inputType,
                                     onChange,
                                     value,
                                     text,
                                     componentType,
                                     widthComponent,
                                     heightComponent
                                 }
                                     : {
    id: string, name: string, inputType?: string,
    onChange: any, value?: string, text?: string, componentType: ComponentType, widthComponent?: string, heightComponent?: string
}) => {

    return <FormikComponentWrapper>
        {text && <LabelWrapper>
            <label htmlFor={id}>{text}</label>
        </LabelWrapper>}
        <span>
            {componentType === 'input' &&
                <Input width={widthComponent} id={id} name={name} type={inputType}
                       onChange={onChange} value={value}
                />}
            {componentType === 'textarea' &&
                <Textarea width={widthComponent} height={heightComponent} id={id} name={name}
                          onChange={onChange} value={value}/>}
        </span>
    </FormikComponentWrapper>
}