import React from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redax/profileReducer";
import usersImg from "../../../assets/images/users_images.png"

type ProfileInfoPropsType = {
    profile: ProfileType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const Job = () => {
        if (props.profile?.lookingForAJob === true) {
            return <>
                <div>Ищу ли я работу: Да</div>
                <div>Предпочтения в работе: {props.profile?.lookingForAJobDescription}</div>
            </>
        }
        if (props.profile?.lookingForAJob === false) {
            return <div>Ищу ли я работу: Нет</div>
        } else {
            return <></>
        }
    }

    const srcHandler = () => (props.profile.photos?.large === null) ? usersImg : props.profile.photos?.large

    return (
        <div>
            <h1>{props.profile.fullName}</h1>
            <div className={s.container}>
                <div>
                    <img className={s.avatar}
                         src={srcHandler()}/>
                </div>
                <div className={s.info}>
                    <h2>Обо мне:</h2>
                    <p>{props.profile?.aboutMe}</p>
                    Соц Сети:
                    <div className={s.url}>
                        <a href={props.profile?.contacts?.vk}>Vk</a>
                        <a href={props.profile?.contacts?.github}>github</a>
                        <a href={props.profile?.contacts?.instagram}>instagram</a>
                        <a href={props.profile?.contacts?.facebook}>facebook</a>
                        <a href={props.profile?.contacts?.mainLink}>mainLink</a>
                        <a href={props.profile?.contacts?.twitter}>twitter</a>
                        <a href={props.profile?.contacts?.website}>website</a>
                        <a href={props.profile?.contacts?.youtube}>youtube</a>
                    </div>
                    {Job()}
                </div>
            </div>
        </div>)
}