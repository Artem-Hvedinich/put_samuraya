import React from "react";
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likesCount: number
    img: string
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.container}>
            <div>
                <div className={s.item}>
                    <img src={props.img}/>
                </div>
                {props.message}
            </div>
            <div>
                <span>Like</span>
                {props.likesCount}
            </div>
        </div>
    )
}

export default Post