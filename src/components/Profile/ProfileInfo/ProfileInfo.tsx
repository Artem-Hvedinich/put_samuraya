import React, {ChangeEvent} from "react";
import usersImg from "../../../assets/images/users_images.png"
import {Status} from "./Status";
import {editModeAction, ProfileType} from "../../../redax/profileReducer";
import styled from "styled-components";
import {NullableType} from "../../../redax/authReducer";
import {InputFile} from "../../../assets/InputFile";
import {ProfileDataForm} from "./ProfileDataForm";
import {useDispatch} from "react-redux";
import {Button} from "../../../assets/styledComponent/Button";
import {BlockWrapper} from "../../../assets/styledComponent/Wrappers";

const ProfileInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50vw; `

const AvatarWrapper = styled(BlockWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 15vw;
  padding: 1vw;
  min-height: 19vw;`

const Img = styled.img`
  width: 100%;
  border-radius: 13px;`

const InfoBlock = styled(BlockWrapper)`
  width: 34vw;`

export const ProfileInfo = ({profile, authId, savePhoto, editMode}
                                : { profile: ProfileType, authId: NullableType<number>, savePhoto: (file: string | Blob) => void, editMode: boolean }) => {
    const dispatch = useDispatch()
    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null) {
            savePhoto(e.target.files[0])
        }
    }
    const isOwner: boolean = authId === profile.userId

    return (
        <ProfileInfoWrapper>
            <AvatarWrapper>
                <Img src={profile.photos?.large || usersImg}/>
                {isOwner && <>
                    <InputFile onChange={mainPhotoSelected}>Loading your photo</InputFile>
                    <Button bgColor={'#4D655BFF'} width={13} height={1.5}
                            onClick={() => dispatch(editModeAction({editMode: true}))}>
                        Edit profile</Button></>}
            </AvatarWrapper>
            {editMode ? <ProfileDataForm profile={profile}/> :
                <ProfileData profile={profile}/>}
        </ProfileInfoWrapper>
    )
}

const ProfileData = ({profile}: { profile: ProfileType }) => {
    return (
        <InfoBlock>
            <h1>{profile.fullName}</h1>
            <Status/>
            <br/>
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
            <br/>
            <p>Ищу ли я работу:{profile?.lookingForAJob ? ' Yes' : ' No'}</p>
            {profile?.lookingForAJob && <p>Предпочтения в работе: {profile?.lookingForAJobDescription}</p>}
        </InfoBlock>)
}