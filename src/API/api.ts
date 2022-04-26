import axios, {AxiosResponse} from "axios";
import {UserType} from "../redax/usersReducer";
import {ProfileType} from "../redax/profileReducer";
import {DataAuthType} from "../redax/authReducer";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {'API-KEY': 'cbd9acf4-8319-464c-ad86-78da9599b7b0'}
})


export const usersAPI = {
    getUsers(currentPage: number) {
        return instance.get<GetResponse>(`users?page=${currentPage}`)
    },
    follow(id: number) {
        return instance.post<ResponseType<{ id: number }>>(`follow/${id}`)
    },
    unfollow(id: number) {
        return instance.delete<ResponseType<{ id: number }>>(`follow/${id}`)
    },
}

export const profileApi = {
    getProfile(id: string) {
        return instance.get<ProfileType>(`profile/${id}`)
    },
    getStatus(id: string) {
        return instance.get<{ id: string }, any>(`profile/status/${id}`)
    },
    updateStatus(status: string) {
        return instance.put<{ status: string }, AxiosResponse<ResponseType<{ status: string }>>>(`profile/status`, {status})
    },
    savePhoto(photoFile: string | Blob) {
        const formData = new FormData()
        formData.append('image', photoFile)

        return instance.put<ResponseType<{ photos: object }>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: ProfileType) {
        return instance.put <ResponseType<{ profile: ProfileType }>>('profile', profile)
    }
}

export const authAPI = {
    me() {
        return instance.get<ResponseType<DataAuthType>>(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<ResponseType<{ id: string }>>(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete<ResponseType<{}>>(`auth/login`)
    },
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors?: Array<string>
    data: D
}

type GetResponse = {
    error: string | null
    totalCount: number
    items: UserType[]
}