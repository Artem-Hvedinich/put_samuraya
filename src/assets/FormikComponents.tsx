import styled from "styled-components";
import React from "react";

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

    return (
        <FormikComponentWrapper>
            {text &&
                <LabelWrapper htmlFor={id}>{text}</LabelWrapper>}
            <span>
            {componentType === 'input' &&
                <InputWrapper width={widthComponent} id={id} name={name} type={inputType}
                              onChange={onChange} value={value}
                />}
                {componentType === 'textarea' &&
                    <TextareaWrapper width={widthComponent} height={heightComponent} id={id} name={name}
                                     onChange={onChange} value={value}/>}
        </span>
        </FormikComponentWrapper>)
}
const FormikComponentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;`

const InputWrapper = styled.input<{ width?: string }>`
  width: ${({width}) => `${width}vw`};
  height: 1.5vw;
  background: none;
  font-size: 0.7vw;
  color: #2D2E46;
  border-width: 0;
  border-color: rgba(36, 37, 74, 0.5);
  border-style: solid;
  border-bottom-width: 0.1vw;
  outline: none;`
const TextareaWrapper = styled.textarea<{ width?: string, height?: string }>`
  width: ${({width}) => `${width}vw`};
  height: 3vw;
  background: none;
  font-size: 0.8vw;
  color: #2D2E46;
  border-color: rgba(36, 37, 74, 0.5);
  font-family: "Segoe UI", sans-serif;
  resize: none;
  outline: none;`
const LabelWrapper = styled.label`
  font-size: 0.7vw`