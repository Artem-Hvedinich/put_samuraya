import React, {useState} from 'react';
import {Button} from "../styledComponent/Button";
import styled from "styled-components";

const NumbersWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;`

const PageWrap = styled.span<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2vw;
  height: 2vw;
  background: ${({active}) => active && '#ffffff'};
  border-radius: ${({active}) => active && 50}%;
  cursor: pointer;
  font-size: ${({active}) => active ? 18 : 14}px;

  :hover {
    background: grey;
    border-radius: 50%;
    font-size: 18px;
  }`

export const Pagination = ({totalItemsCount, pageSize, onPageChanged, portionSize, currentPage}: {
    totalItemsCount: number, pageSize: number, portionSize: number, currentPage: number
    onPageChanged: (pageNumber: number) => void
}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPositionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPositionPageNumber = portionNumber * portionSize
    console.log(currentPage)
    return (
        <NumbersWrapper>
            {portionNumber > 1 && <Button color={'#ffffff'} bgColor={'#110e0e'} width={4} height={1.5}
                                          onClick={() => setPortionNumber(portionNumber - 1)}>Prev</Button>}

            {pages.filter(p => p >= leftPositionPageNumber && p <= rightPositionPageNumber)
                .map((p) => <PageWrap onClick={() => onPageChanged(p)}
                                      active={currentPage === p}>{p}</PageWrap>)}
            {portionCount > portionNumber &&
                <Button color={'#ffffff'} bgColor={'#110e0e'} width={4} height={1.5}

                        onClick={() => setPortionNumber(portionNumber + 1)}>Next</Button>}
        </NumbersWrapper>
    );
};