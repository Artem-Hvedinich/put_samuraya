import React from "react";
import s from './Post.module.css'

const Post = (props: any) => {
    return (
        <div>
            <div className={s.item}>
                <img
                    src='https://bitprice.ru/sites/default/files/styles/mt_photo/public/img/logo/brands/447105.png?itok=uchLL3-4'/>
            </div>
            {props.message}
            <div>
                <button>Like</button>
            </div>
        </div>
    );
}

export default Post;