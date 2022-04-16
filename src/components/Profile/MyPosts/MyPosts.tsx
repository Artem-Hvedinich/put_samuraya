import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {
    addPostActionCreator,
    PostType,
    updateNewPostTextActionCreator
} from "../../../redax/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../redax/reduxStore";

export const MyPosts = () => {
    const dispatch = useDispatch()
    const post = useSelector<AppStoreType, PostType[]>(s => s.myPostPage.myPostData)
    const newPostText = useSelector<AppStoreType, string>(s => s.myPostPage.newPostText)

    let newPost = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        dispatch(addPostActionCreator())
        dispatch(updateNewPostTextActionCreator(''));
    }
    const onPostChange = () => {
        let text = newPost.current?.value
        if (text) {
            dispatch(updateNewPostTextActionCreator(text));
        }
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <h2>My post</h2>
                <textarea value={newPostText}
                          placeholder='Enter You Comment'
                          onChange={onPostChange}
                          ref={newPost}
                          className={s.text}
                />
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div>
                    {post.map((p: PostType) => {
                        return <Post key={p.id} message={p.message}
                                     likesCount={p.likesCount} img={p.img}/>
                    })}
                </div>
            </div>
        </div>
    )
}