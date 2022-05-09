import {ProfileType} from "../../../../redax/profileReducer";
import {Status} from "../Status";
import React from "react";
import styled from "styled-components";
import {BlockWrapper} from "../../../../assets/styledComponent/Wrappers";

export const ProfileData = ({profile,isOwner}: { profile: ProfileType,isOwner:boolean }) => {
    return (
        <InfoBlock>
            <h1>{profile.fullName}</h1>
            <Status isOwner={isOwner}/>
            <p>Обо мне: {profile?.aboutMe}</p>
            {/*Contact Block in profile*/}
            {profile.contacts && Object.keys(profile.contacts).map((key) => {
                return <span key={key}>
                {profile.contacts[key] !== '' && profile.contacts[key] !== null &&
                    <>
                        <p>Мои соцсети:</p>
                        <p>{key}: </p>
                        <p>{profile.contacts && profile.contacts[key] && profile.contacts[key]}</p>
                    </>
                }</span>
            })}
            <p>Ищу ли я работу:{profile?.lookingForAJob ? ' Yes' : ' No'}</p>
            {profile?.lookingForAJob && <p>Предпочтения в работе: {profile?.lookingForAJobDescription}</p>}
        </InfoBlock>)
}
const InfoBlock = styled(BlockWrapper)`
  width: 44vw;`