import React, {useEffect} from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/users_images.png";
import {Button} from "@mui/material";
import {follow, getUsers, unfollow, UsersPageType} from "../../redax/usersReducer";
import {NavLink} from "react-router-dom";
import {PATH} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redax/reduxStore";
import {Preloader} from "../common/Preloader/Preloader";


export const Users = () => {
    const UsersPage = useSelector<AppStoreType, UsersPageType>(s => s.usersPage)

    useEffect(() => {
        dispatch(getUsers(UsersPage.currentPage, UsersPage.pageSize))
    }, [])

    const dispatch = useDispatch()
    let pagesCount = Math.ceil(UsersPage.totalUsersCount / UsersPage.pageSize - 3680)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.users}>
            {UsersPage.isFetching ? <Preloader/> : null}
            {UsersPage.users.map((u) =>
                <div className={s.body_style}>
                    <div className={s.block_follow}>
                        <NavLink to={PATH.Profile + '/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                 className={s.img} alt={u.photos.small}/>
                        </NavLink>
                        <div>{u.name}</div>
                        <div>
                            {u.follower
                                ?
                                <Button variant="contained"
                                        size={"small"}
                                        color={'secondary'}
                                        onClick={() => {
                                            dispatch(unfollow(u.id))
                                        }}>
                                    Unfollow</Button>
                                :
                                <Button variant="contained"
                                        size={"small"}
                                        color={'secondary'}
                                        onClick={() => {
                                            dispatch(follow(u.id))
                                        }}>
                                    Follow</Button>}
                        </div>
                    </div>


                    <div className={s.right_block}>
                        <div className={s.block_users}>
                        </div>
                        <div className={s.block_country}>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </div>
                    </div>
                </div>
            )}
            <div className={s.pages}>
                {pages.map(p => {
                    const onPageChanged = (pageNumber: number) => dispatch(getUsers(pageNumber, UsersPage.pageSize))

                    const setActive = UsersPage.currentPage === p ? s.selectedPage : s.selectedPage
                    return <span onClick={() => {
                        onPageChanged(p)
                    }
                    } className={setActive}>|{p}|</span>
                })}
            </div>
        </div>
    )
}