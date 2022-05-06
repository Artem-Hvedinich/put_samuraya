import React, {useState} from "react";
import {Post} from "./Post/Post";
import {PostType,} from "../../../redax/profileReducer";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../redax/reduxStore";
import styled from "styled-components";
import {AddPost} from "./AddPost";
import {BlockWrapper, TitleProfileWrapper} from "../../../assets/styledComponent/Wrappers";


export const MyPosts = React.memo(() => {
    const post = useSelector<AppStoreType, PostType[]>(s => s.myPostPage.posts)
    const [arrow, setArrow] = useState(true)

    return (
        <>
            <PostsBlock>
                <TitleProfileWrapper fontSz={1.2}>Posts</TitleProfileWrapper>
                <AddPost click={arrow}/>
                <Arrow click={arrow} onClick={() => setArrow(!arrow)}/>
            </PostsBlock>
            <PostsTextBlock>
                {post.map((p: PostType) => {
                    return <Post key={p.id} message={p.message}
                                 likesCount={p.likesCount} img={p.img} name={p.nameUsers}/>
                })}
            </PostsTextBlock>
        </>
    )
})

const PostsBlock = styled(BlockWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1vw;
`
const PostsTextBlock = styled(BlockWrapper)`
  margin-top: 1vw;
  margin-bottom: 2vw;`
const Arrow = styled.div<{ click: boolean }>`
  width: 0.7vw;
  height: 0.7vw;
  border-top: 0.1vw solid black;
  border-right: 0.1vw solid black;
  cursor: pointer;
  transform: ${({click}) => click ? 'rotate(-45deg)' : 'rotate(-135deg)'};
  transition: transform 0.5s;`