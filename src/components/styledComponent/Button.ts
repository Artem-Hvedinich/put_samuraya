import styled from "styled-components";

export const Button = styled.button<{ width?: number, height?: number, bgColor?: string, color?: string }>`
  width: ${({width}) => width}vw;
  height: ${({height}) => height}vw;
  background-color: ${({bgColor}) => bgColor};
  color: ${({color}) => color};
  border-radius: 10px;
  border: none;
  cursor: pointer`