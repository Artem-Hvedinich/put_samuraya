import React from "react";
import s from './Post.module.css'

const Post = ({message, likesCount, img}: { message: string, likesCount: number, img: string }) => {
    return (
        <div className={s.container}>
            <div>
                <div className={s.item}>
                    <img src={img} alt={'postImg'}/>
                </div>
                {message}
            </div>
            <div>
                <span>Like</span>
                {likesCount}
            </div>
        </div>
    )
}

export default Post