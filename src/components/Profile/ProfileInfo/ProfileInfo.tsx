import React, {ChangeEvent, useCallback} from "react";
import usersImg from "../../../assets/images/users_images.png"
import {editModeAction, ProfileType, savePhotoTC} from "../../../redax/profileReducer";
import styled from "styled-components";
import {NullableType} from "../../../redax/authReducer";
import {InputFile} from "../../../assets/InputFile";
import {ProfileDataForm} from "./ProfileData/ProfileDataForm";
import {useDispatch} from "react-redux";
import {Button} from "../../../assets/styledComponent/Button";
import {BlockWrapper} from "../../../assets/styledComponent/Wrappers";
import {ProfileData} from "./ProfileData/ProfileData";


export const ProfileInfo = ({profile, authId, editMode}
                                : { profile: ProfileType, authId: NullableType<number>, editMode: boolean }) => {
    const dispatch = useDispatch()
    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null) {
            savePhoto(e.target.files[0])
        }
    }
    const isOwner: boolean = authId === profile.userId
    const savePhoto = useCallback((file: string | Blob) => dispatch(savePhotoTC(file)), [])

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

const ProfileInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60vw; `

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
  border-radius: 0.8vw;`
