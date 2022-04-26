import React from "react";
import Post from "./Post/Post";
import {
    addPost,
    PostType,
} from "../../../redax/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../redax/reduxStore";
import styled from "styled-components";
import {AddPostRedux} from "./AddPost";

const PostsBlock = styled.div`
  width: 50vw;
  background-color: rgba(255, 255, 255, 0.19);
  border-radius: 5px;
  box-shadow: 0 0 3px black;
  margin-top: 1vw;
  padding: 1vw;`

export const MyPosts = React.memo(() => {
    const dispatch = useDispatch()
    const post = useSelector<AppStoreType, PostType[]>(s => s.myPostPage.posts)
    const newPostText = (value: any) => {
        dispatch(addPost({addNewPost:value.addNewPost}))
    }

    return (
        <PostsBlock>
            <div>
                <h2>My post</h2>
                <AddPostRedux onSubmit={newPostText}/>
                <div>
                    {post.map((p: PostType) => {
                        return <Post key={p.id} message={p.message}
                                     likesCount={p.likesCount} img={p.img}/>
                    })}
                </div>
            </div>
        </PostsBlock>
    )
})

