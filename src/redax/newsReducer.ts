import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunkType} from "./store";
import {setAppStatus} from "./appReducer";
import {NewsAPI} from "../API/api-news";

export type NewsResponseType = {
    id: any
    content: string
    data: string
    img: string
    img_pervaya: string
    title: string
};
const initialState = [] as Array<NewsResponseType>

const slice = createSlice({
    name: "news",
    initialState: initialState,
    reducers: {
        getNewsAC(state, action: PayloadAction<Array<NewsResponseType>>) {
            return [...action.payload]
        }
    }
})

export const newsReducer = slice.reducer
export const {getNewsAC} = slice.actions


export const getFirstNewsTC = (): AppThunkType => async dispatch => {
    dispatch(setAppStatus({status: 'loading'}))
    const response = await NewsAPI.getFirstNews();
    let news: NewsResponseType[] = []

    for (let i = 0; i < response.length; i++) {
        if (i < response.length - 1) {
            await NewsAPI.getNews(response[i].toString())
                .then(res => {
                    const responseAndId = {...res, id: response[i]}
                    news.push(responseAndId)
                })
        } else {
            await NewsAPI.getNews(response[i].toString())
                .then(res => {
                    const responseAndId = {...res, id: response[i]}
                    news.push(responseAndId)
                    dispatch(setAppStatus({status: 'succeeded'}))
                })
        }
    }

    dispatch(getNewsAC(news))
}