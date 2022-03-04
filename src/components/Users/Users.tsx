import React from 'react';
import s from './Users.module.css'
import {UserType} from "../../redax/usersReducer";
import {Button} from "@mui/material";
import axios from "axios";
import userPhoto from '../../assets/images/users_images.png'

type PropsUsersType = {
    users: Array<UserType>
    follow: (UsersId: number) => void
    unfollow: (UsersId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export const Users = (props: PropsUsersType) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(r => {
            props.setUsers(r.data.items)
        })
    }

    return (
        <div className={s.users}>
            <h2>Users</h2>
            {props.users.map(u => <div key={u.id} className={s.body_style}>

                <div className={s.block_follow}>
                    <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.img}/>
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
            </div>)}
        </div>
    );
};
