import React, {useEffect} from "react";
import userPhoto from "../../assets/images/users_images.png";
import {follow, getUsers, unfollow, UsersPageType} from "../../redax/usersReducer";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redax/store";
import {PATH} from "../RoutesWrapper/RoutersWrapper";
import {Pagination} from "./Pagination";
import styled from "styled-components";
import {BlockWrapper, TitleProfileWrapper} from "../../assets/styledComponent/Wrappers";
import {Button} from "../../assets/styledComponent/Button";


export const Users = () => {
    const UsersPage = useSelector<AppStoreType, UsersPageType>(s => s.usersPage)

    useEffect(() => {
        dispatch(getUsers(UsersPage.currentPage))
    }, [UsersPage.currentPage])

    const dispatch = useDispatch()
    const onPageChanged = (pageNumber: number) => dispatch(getUsers(pageNumber))
    const onClickHandler = (id: number, follower: boolean) => {
        if (follower) {
            dispatch(unfollow(id))
        } else {
            dispatch(follow(id))
        }
    }


    return (
        <UsersWrapper>

            {UsersPage.users.map((u) =>
                <UserBlock>
                    <NavLink to={PATH.Profile + '/' + u.id}>
                        <Img src={u.photos.small !== null ? u.photos.small : userPhoto} alt={u.photos.small}/>
                    </NavLink>
                    <TitleProfileWrapper fontSz={1.2}>{u.name}</TitleProfileWrapper>
                    <FollowingButton active={u.follower}
                                     onClick={() => onClickHandler(u.id, u.follower)}>
                        {u.follower ? 'Unfollow' : 'Follow'}
                    </FollowingButton>
                </UserBlock>
            )}
            <PaginationBlock>
                <Pagination totalItemsCount={UsersPage.totalUsersCount} pageSize={UsersPage.pageSize}
                            onPageChanged={onPageChanged} portionSize={10} currentPage={UsersPage.currentPage}/>
            </PaginationBlock>
        </UsersWrapper>
    )
}

const UsersWrapper = styled(BlockWrapper)`
  width: 60vw;
  margin-bottom: 2vw;
`
const UserBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.1vw solid #4d655b;
  padding: 2vw 0;`
const Img = styled.img`
  width: 4vw;
  border-radius: 50%;
  border: 0.2vw solid #4d655b`
const PaginationBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;`
const FollowingButton = styled(Button)<{ active: boolean }>`
  width: 5vw;
  height: 2vw;
  font-size: 0.9vw;
  background-color: ${({active}) => active ? '' : '#4d655b'};
  color: ${({active}) => active ? '#4d655b' : '#ffffff'};
`
