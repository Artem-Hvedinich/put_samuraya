import React from 'react';
import {ProfileType} from "../../../redax/profileReducer";

export const Job = ({profile}: { profile: ProfileType }) => {
    if (profile?.lookingForAJob === true) {
        return <>
            <div>Ищу ли я работу: Да</div>
            <div>Предпочтения в работе: {profile?.lookingForAJobDescription}</div>
        </>
    }
    if (profile?.lookingForAJob === false) {
        return <div>Ищу ли я работу: Нет</div>
    } else {
        return <></>
    }
}