import React from "react";
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likesCount: number
}

const Post = (props: PostPropsType) => {
    return (
        <div>
            <div>
                <MyPostImg/>
                {props.message}
            </div>
            <div>
                <span>Like</span>
                {props.likesCount}
            </div>
        </div>
    );
}

export function MyPostTitle() {
    return <div>
        <h2>My post</h2>
    </div>
}

const MyPostImg = () => {
    return <div className={s.item}>
        <img
            src='https://bitprice.ru/sites/default/files/styles/mt_photo/public/img/logo/brands/447105.png?itok=uchLL3-4'/>
    </div>
}

export default Post;