import React from 'react';
import styled from "styled-components";
import {Navigate, NavLink, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../redax/store";
import {NewsResponseType} from "../../redax/newsReducer";
import {PATH} from "../RoutesWrapper/RoutersWrapper";
import {BlockWrapper, TextProfileWrapper, TitleProfileWrapper} from "../../assets/styledComponent/Wrappers";
import {Button} from "../../assets/styledComponent/Button";


export const OneNews = () => {
    const {newsId} = useParams();
    const news = useSelector<AppStoreType, Array<NewsResponseType>>(s => s.news)
    const resultFilter = news.filter(news => newsId === news.id);
    console.log(resultFilter[0].content)
    if (!newsId) return (<Navigate to={PATH.News}/>)

    return (
        <OneNewsBlock>
            <TitleProfileWrapper fontSz={1.2}>{resultFilter[0].title}</TitleProfileWrapper>
            <ContentBlock dangerouslySetInnerHTML={{__html: resultFilter[0].content}}/>
            <TitleProfileWrapper fontSz={1}>{resultFilter[0].data}</TitleProfileWrapper>
            <NavLink to={PATH.News}> <Button bgColor={'#4d655b'} width={7} height={2}>Назад</Button></NavLink>
        </OneNewsBlock>
    );
};

const OneNewsBlock = styled(BlockWrapper)`
  width: 60vw;
  padding: 2vw;`

const ContentBlock = styled.div`
  font-size: 1vw;

  img {
    width: 10vw;
  }`
