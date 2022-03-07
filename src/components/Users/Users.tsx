import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/users_images.png";
import {Button} from "@mui/material";
import axios from "axios";
import {MDTP, MSTP} from "./UsersContainer";

type PropsType = MSTP & MDTP

export class Users extends React.Component<PropsType, any> {

    constructor(props: PropsType) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(r => {
            this.props.setUsers(r.data.items)
        })
    }

    render() {
        return (
            <div className={s.users}>
                <h2>Users</h2>
                {this.props.users.map((u ) =>
                    <div key={u.id} className={s.body_style}>

                        <div className={s.block_follow}>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.img} alt={u.photos.small}/>
                            <div>{u.name}</div>
                            <div>
                                {u.follower
                                    ? <Button variant="contained" size={"small"} color={'secondary'} onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Unfollow</Button>
                                    : <Button variant="contained" size={"small"} color={'secondary'} onClick={() => {
                                        this.props.follow(u.id)
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
    }
}