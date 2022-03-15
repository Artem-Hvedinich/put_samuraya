import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/users_images.png";
import {Button} from "@mui/material";
import {UserType} from "../../redax/usersReducer";

type PropsUsersType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    users: UserType[]
    unfollow: (UsersId: number) => void
    follow: (UsersId: number) => void
    currentPage: number
}

export const Users = (props: PropsUsersType) => {
    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= 25; i++) {
        pages.push(i)
    }
    return (
        <div className={s.users}>
            <h2>Users</h2>
            <div className={s.pages}>
                {pages.map(p => {
                    return <span onClick={() => {
                        props.onPageChanged(p)
                    }
                        // @ts-ignore
                    } className={props.currentPage === p && s.selectedPage}>|{p}|</span>
                })}
            </div>

            {props.users.map((u) =>
                <div key={u.id} className={s.body_style}>

                    <div className={s.block_follow}>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.img}
                             alt={u.photos.small}/>
                        <div>{u.name}</div>
                        <div>
                            {u.follower
                                ? <Button variant="contained" size={"small"} color={'secondary'} onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</Button>
                                : <Button variant="contained" size={"small"} color={'secondary'} onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</Button>}
                        </div>
                    </div>


                    <div className={s.right_block}>
                        <div className={s.block_users}>

                            <div>{u.status}</div>
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