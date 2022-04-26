import React, {useEffect} from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/users_images.png";
import {Button} from "@mui/material";
import {follow, getUsers, unfollow, UsersPageType} from "../../redax/usersReducer";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../redax/reduxStore";
import {Preloader} from "../common/Preloader/Preloader";
import {PATH} from "../RoutesWrapper/RoutersWrapper";
import {Pagination} from "./Pagination";


export const Users = () => {
    const UsersPage = useSelector<AppStoreType, UsersPageType>(s => s.usersPage)

    useEffect(() => {
        dispatch(getUsers(UsersPage.currentPage))
    }, [UsersPage.currentPage])

    const dispatch = useDispatch()
    const onPageChanged = (pageNumber: number) => {
        return dispatch(getUsers(pageNumber))
    }

    return (
        <div className={s.users}>
            {UsersPage.isFetching ? <Preloader/> : null}
            <div className={s.pages}>
                <Pagination totalItemsCount={UsersPage.totalUsersCount} pageSize={UsersPage.pageSize}
                            onPageChanged={onPageChanged} portionSize={10} currentPage={UsersPage.currentPage}/>
            </div>
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

        </div>
    )
}
