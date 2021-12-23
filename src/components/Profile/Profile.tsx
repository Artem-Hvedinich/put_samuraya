import React from "react";
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM'/>
            </div>
            <div>
                ava + Descriptions
            </div>
            <div>
                My post
            </div>
            <div>
                New post
            </div>
            <div>
                post 1
            </div>
            <div>
                post 2
            </div>
        </div>
    )
}

export default Profile;