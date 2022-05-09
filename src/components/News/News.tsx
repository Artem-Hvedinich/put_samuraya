import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getFirstNewsTC, NewsResponseType} from "../../redax/newsReducer";
import {AppStoreType} from "../../redax/store";
import {BlockWrapper, TextProfileWrapper, TitleProfileWrapper} from "../../assets/styledComponent/Wrappers";
import styled from "styled-components";
import {PATH} from "../RoutesWrapper/RoutersWrapper";
import {NavLink} from "react-router-dom";
import {Button} from "../../assets/styledComponent/Button";

export const News = () => {
    const news = useSelector<AppStoreType, Array<NewsResponseType>>(s => s.news)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFirstNewsTC())
    }, [getFirstNewsTC])

    return <NewsWrapper>
        <TitleProfileWrapper fontSz={1.5}>News Today</TitleProfileWrapper>
        {news.map((n) => (
            <OneNewsBlock key={n.id}>
                <TitleProfileWrapper fontSz={1.2}>{n.title}</TitleProfileWrapper>
                {n.img ? <Img src={n.img} alt={n.img}/> : <Img src={n.img_pervaya} alt={n.img_pervaya}/>}
                <NavLink to={`${PATH.News}/${n.id}`} key={n.id}>
                    <Button bgColor={'#4d655b'} width={7} height={2}>Читать больше</Button>
                </NavLink>
                <TextProfileWrapper fontSz={1}>{n.data}</TextProfileWrapper>
            </OneNewsBlock>

        ))
        }
    </NewsWrapper>
}
const NewsWrapper = styled(BlockWrapper)`
  width: 60vw;`

const OneNewsBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1vw;
  height: 45vh;
`
const Img = styled.img`
  width: 20vw;
  margin-top: 1vw `




