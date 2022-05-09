import {MusicApi} from "../API/api-music";
import {AppStoreType, AppThunkType} from "./store";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type NewsResponseType = {};
const initialState = [] as Array<NewsResponseType>

const slice = createSlice({
    name: "music",
    initialState: initialState,
    reducers: {
        setAllResultSearchAC(state, action: PayloadAction) {
            return
        }
    }
})

export const musicReducer = slice.reducer
export const {setAllResultSearchAC} = slice.actions

export const MusicTC = (title: string):AppThunkType => async dispatch => {
    const response = await MusicApi.getMusicSearchResult(title)
    dispatch(setAllResultSearchAC())
}