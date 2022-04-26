import React, {ChangeEvent} from "react";
import styled from "styled-components";

const InputFileWrapper = styled.label`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 0.8vw;
  background: rgba(77, 101, 91, 0.78);
  border-radius: 0.3vw;
  padding: 0.3vw;
  cursor: pointer;

  :hover {
    background: rgba(77, 101, 91);
  }`

export const InputFile = ({children, value, onChange, disabled, accept}
                              : { children?: string, value?: any, onChange?: (e: ChangeEvent<HTMLInputElement>) => void, disabled?: any, accept?: any }) => {
    return (
        <InputFileWrapper htmlFor="contained-button-file">
            <input
                value={value}
                accept={accept}
                disabled={disabled}
                style={{display: 'none'}}
                id="contained-button-file"
                multiple
                type="file"
                onChange={disabled ? () => {
                } : onChange}
            />
            {children}
        </InputFileWrapper>
    );
};