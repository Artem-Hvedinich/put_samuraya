import styled from "styled-components";

export const BlockWrapper = styled.div`
  background-color: #ffffff;
  box-shadow: 0 0.5vw 1vw rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 1.5vw;`

export const NavIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5vw;
  height: 3vw;
  border-radius: 0.5vw 0.5vw 0 0;
  :hover {
    background-color: #cccaca;
    transition: background-color 0.5s;
  }`

export const Svg = styled.svg`
  width: 1.5vw`