import styled from "styled-components";

export const BlockWrapper = styled.div`
  background-color: #ffffff;
  box-shadow: 0 0.5vw 1vw rgba(0, 0, 0, 0.1);
  border-radius: 0.2vw;
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

export const TitleProfileWrapper = styled.p<{ fontSz?: number }>`
  font-weight: 600;
  font-size: ${({fontSz}) => fontSz}vw;`;

export const TextProfileWrapper = styled.p<{ color?: string, fontSz: number, opacity?: number, textAlign?: string }>`
  width: 100%;
  font-weight: 400;
  font-size: ${({fontSz}) => fontSz}vw;
  font-style: normal;
  color: ${({color}) => color};
  opacity: ${({opacity}) => opacity};
  text-align: ${({textAlign}) => textAlign}`;