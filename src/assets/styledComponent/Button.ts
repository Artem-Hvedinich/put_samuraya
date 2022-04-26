import styled from "styled-components";

export const Button = styled.button<{ width?: number, height?: number, bgColor?: string, color?: string }>`
  width: ${({width}) => width}vw;
  height: ${({height}) => height}vw;
  background-color: ${({bgColor}) => bgColor};
  color: ${({color}) => color};
  font-size: 0.8vw;
  border-radius: 0.3vw;
  border: none;
  cursor: pointer;
  opacity: 0.8;
  :hover {
    opacity: 1;
  }`