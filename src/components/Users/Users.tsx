import React from 'react';
import s from './Users.module.css'
import {UserType} from "../../redax/usersReducer";
import {Button} from "@mui/material";

type PropsUsersType = {
    users: Array<UserType>
    follow: (UsersId: number) => void
    unfollow: (UsersId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export const Users = (props: PropsUsersType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://bitprice.ru/sites/default/files/styles/mt_photo/public/img/logo/brands/447105.png?itok=uchLL3-4',
                follower: false,
                fullName: 'Artem',
                status: 'Hi, how are you?',
                location: {city: 'Brest', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://bitprice.ru/sites/default/files/styles/mt_photo/public/img/logo/brands/447105.png?itok=uchLL3-4',
                follower: true,
                fullName: 'Met',
                status: 'Hi, how are you?',
                location: {city: 'Philadelphia', country: 'USA'}
            },
            {
                id: 3,
                photoUrl: 'https://bitprice.ru/sites/default/files/styles/mt_photo/public/img/logo/brands/447105.png?itok=uchLL3-4',
                follower: false,
                fullName: 'Dima',
                status: 'Hi, how are you?',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 4,
                photoUrl: 'https://bitprice.ru/sites/default/files/styles/mt_photo/public/img/logo/brands/447105.png?itok=uchLL3-4',
                follower: true,
                fullName: 'Tim',
                status: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
                location: {city: 'Minsk', country: 'Belarus'}
            },
        ])
    }

    return (
        <div className={s.users}>
            <h2>Users</h2>
            {props.users.map(u => <div key={u.id} className={s.body_style}>

                <div className={s.block_follow}>
                    <img src={u.photoUrl} className={s.img}/>
                    <div>{u.fullName}</div>
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
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </div>
                </div>
            </div>)}
        </div>
    );
};
