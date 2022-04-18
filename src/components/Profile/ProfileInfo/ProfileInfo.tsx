import React from "react";
import usersImg from "../../../assets/images/users_images.png"
import {Status} from "./Status";
import {ProfileType} from "../../../redax/profileReducer";
import {Job} from "./Job";
import styled from "styled-components";

const ProfileInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50vw; `
const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15vw;
  height: 15vw;
  background-color: rgba(255, 255, 255, 0.19);
  box-shadow: 0 0 3px black;
  border-radius: 5px;
  padding: 1vw`
const Img = styled.img`
  border-radius: 13px;
  width: 100%;
  height: 100%;`
const InfoBlock = styled.div`
  width: 34vw;
  background-color: rgba(255, 255, 255, 0.19);
  box-shadow: 0 0 3px black;
  border-radius: 5px;
  padding: 1.5vw;`
const UrlBlock = styled.div`
  display: grid;
  grid-template-columns: 10vw 10vw 10vw;`

export const ProfileInfo = ({profile}: { profile: ProfileType }) => {
    const content = () => {

        if (profile.userId) {
            return (
                <ProfileInfoWrapper>
                    <AvatarWrapper>
                        <Img src={(profile.photos?.large === null) ? usersImg : profile.photos?.large}/>
                    </AvatarWrapper>

                    <InfoBlock>
                        <h1>{profile.fullName}</h1>
                        <Status/>
                        <p>{profile?.aboutMe}</p>
                        <p>Соц Сети:</p>
                        <UrlBlock>
                            <a href={profile?.contacts?.vk}>Vk</a>
                            <a href={profile?.contacts?.github}>github</a>
                            <a href={profile?.contacts?.instagram}>instagram</a>
                            <a href={profile?.contacts?.facebook}>facebook</a>
                            <a href={profile?.contacts?.mainLink}>mainLink</a>
                            <a href={profile?.contacts?.twitter}>twitter</a>
                            <a href={profile?.contacts?.website}>website</a>
                            <a href={profile?.contacts?.youtube}>youtube</a>
                        </UrlBlock>
                        <Job profile={profile}/>
                    </InfoBlock>
                </ProfileInfoWrapper>
            )
        } else {
            return <h1>Sorry, Error 404</h1>
        }
    }


    return (
        content()

    )
}