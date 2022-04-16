import React from "react";
import s from './ProfileInfo.module.css'
import usersImg from "../../../assets/images/users_images.png"
import {Status} from "./Status";
import {ProfileType} from "../../../redax/profileReducer";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../redax/reduxStore";
import {Preloader} from "../../common/Preloader/Preloader";


export const ProfileInfo = () => {
    const profile = useSelector<AppStoreType, ProfileType>(s => s.myPostPage.profile)


    const Job = () => {
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

    const srcHandler = () => (profile.photos?.large === null) ? usersImg : profile.photos?.large


    const content = () => {
        if (!profile) {
            return <Preloader/>
        }
        if (profile.userId) {
            return (
                <div className={s.profile}>

                    <div className={s.avatar}>
                        <img className={s.img}
                             src={srcHandler()}/>
                    </div>

                    <div className={s.info}>
                        <h1>{profile.fullName}</h1>
                        <Status/>
                        <p>{profile?.aboutMe}</p>
                        Соц Сети:
                        <div className={s.url}>
                            <a href={profile?.contacts?.vk}>Vk</a>
                            <a href={profile?.contacts?.github}>github</a>
                            <a href={profile?.contacts?.instagram}>instagram</a>
                            <a href={profile?.contacts?.facebook}>facebook</a>
                            <a href={profile?.contacts?.mainLink}>mainLink</a>
                            <a href={profile?.contacts?.twitter}>twitter</a>
                            <a href={profile?.contacts?.website}>website</a>
                            <a href={profile?.contacts?.youtube}>youtube</a>
                        </div>
                        {Job()}

                    </div>

                </div>
            )
        } else {
            return <h1>Sorry, Error 404</h1>
        }
    }
    return (
        content()

    )
}