import axios from "axios";

export const instanceMusic = axios.create({
    baseURL: "https://itunes.apple.com/",
    withCredentials: true,
    headers: {},
});


export const MusicApi = {
    getMusicSearchResult(title: string) {
        return instanceMusic.get<any>(`search?term=${title}`)
    }
};