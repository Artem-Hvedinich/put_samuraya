import React from 'react';
import {ProfileType} from "../../../redax/profileReducer";

export const Job = ({profile}: { profile: ProfileType }) => {
    if (profile?.lookingForAJob === true) {
        return <>
            <p>Ищу ли я работу: Да</p>
            <p>Предпочтения в работе: {profile?.lookingForAJobDescription}</p>
        </>
    }
    if (profile?.lookingForAJob === false) {
        return <p>Ищу ли я работу: Нет</p>
    } else {
        return <></>
    }
}