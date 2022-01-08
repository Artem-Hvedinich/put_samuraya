import React from "react";
import s from './Post.module.css'

const Post = (props: any) => {
    return (
        <div>
            <MyPostTitle/>
            <MyPostImg/>
            {props.message}
            <div>
                <textarea></textarea>
            </div>
            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>
    );
}

function MyPostTitle() {
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