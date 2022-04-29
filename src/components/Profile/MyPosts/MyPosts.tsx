import React, {useState} from "react";
import Post from "./Post/Post";
import {PostType,} from "../../../redax/profileReducer";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../redax/reduxStore";
import styled from "styled-components";
import {AddPost} from "./AddPost";
import {BlockWrapper} from "../../../assets/styledComponent/Wrappers";

const PostsBlock = styled(BlockWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1vw;`
const PostsTextBlock = styled(BlockWrapper)`
  margin-top: 1vw;`
const Arrow = styled.div<{ click: boolean }>`
  width: 0.7vw;
  height: 0.7vw;
  border-top: 0.1vw solid black;
  border-right: 0.1vw solid black;
  cursor: pointer;
  transform: ${({click}) => click ? 'rotate(-45deg)' : 'rotate(-135deg)'};
  transition: all 0.5s;`

export const MyPosts = React.memo(() => {
    const post = useSelector<AppStoreType, PostType[]>(s => s.myPostPage.posts)
    const [arrow, setArrow] = useState(true)

    return (
        <>
            <PostsBlock>
                <h3>Posts</h3>
                <AddPost click={arrow}/>
                <Arrow click={arrow} onClick={() => setArrow(!arrow)}/>
            </PostsBlock>
            <PostsTextBlock>
                {post.map((p: PostType) => {
                    return <Post key={p.id} message={p.message}
                                 likesCount={p.likesCount} img={p.img}/>
                })}
            </PostsTextBlock>
        </>
    )
})

