import React, {useState} from "react";
import styled from "styled-components";
import {TextProfileWrapper, TitleProfileWrapper} from "../../../../assets/styledComponent/Wrappers";

type PostType = {
    message: string
    likesCount: number
    img: string
    name: string
}

export const Post = ({message, likesCount, img, name}: PostType) => {
    const [like, setLike] = useState(false)
    const [count, setCount] = useState(likesCount)

    const onClickLikeHandler = () => {
        setLike(!like)
        setCount(countLickAndDislike)
    }
    const countLickAndDislike = like ? count - 1 : count + 1

    return (
        <PostWrapper>
            <UserBlock>
                <Img src={img} alt={'postImg'}/>
                <TitleProfileWrapper fontSz={1.5}>{name}</TitleProfileWrapper>
            </UserBlock>
            <PostText fontSz={1}>{message}</PostText>
            <LikeBlock>
                <Like active={like} onClick={onClickLikeHandler}/>
                <LikeCount>{count}</LikeCount>
            </LikeBlock>
        </PostWrapper>
    )
}
const PostWrapper = styled.div`
  width: 100%;
  padding: 1vw 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const UserBlock = styled.div`
  width: 15vw;
  display: flex;
  align-items: center;
  justify-content: space-between`
const Img = styled.img`
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
`
const PostText = styled(TextProfileWrapper)`
  width: 50vw;
  padding: 1vw 7vw;
  display: flex;
  flex-wrap: wrap;
`

const LikeBlock = styled.div`
  width: 5vw;
  margin-left: 7vw;
  display: flex;
  justify-content: space-between;
`
const LikeCount = styled.span`
  font-size: 1vw`
const Like = styled.div<{ active: boolean }>`
  position: relative;

  :before {
    position: absolute;
    top: 0;
    left: 1vw;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
    width: 1vw;
    height: 1.5vw;
    border-radius: 2vw 2vw 0 0;
    background-color: ${({active}) => active ? "#f64545" : "#e0dede"};
    content: "";
    cursor: pointer;
    transition: background .4s
  }

  :after {
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
    width: 1vw;
    height: 1.5vw;
    border-radius: 2vw 2vw 0 0;
    background-color: ${({active}) => active ? "#f64545" : "#e0dede"};
    content: "";
    cursor: pointer;
    transition: background .4s;
  }`