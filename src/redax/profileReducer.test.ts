import {v1} from "uuid";
import {profileReducer} from "./profileReducer";

const postId1 = v1()
const postId2 = v1()

const startState = {
    posts: [
        {
            id: postId1,
            message: 'Hi, how are you?',
            likesCount: 12,
            img: 'https://bitprice.ru/sites/default/files/styles/mt_photo/public/img/logo/brands/447105.png?itok=uchLL3-4'
        },
        {
            id: postId2,
            message: 'American idol',
            likesCount: 90,
            img: 'https://bitprice.ru/sites/default/files/styles/mt_photo/public/img/logo/brands/447105.png?itok=uchLL3-4'
        },
    ],
    profile: {},
    status: '',
}
test('Add post test', () => {
    const endState = profileReducer(startState, {type: 'ADD_POST', addNewPost: 'Hello'})

    expect(endState.posts.length).toBe(3)
    expect(endState.posts[0].message).toBe('Hello')
})


test('Delete post test', () => {
    const endState = profileReducer(startState, {type: 'DELETE_POST', postId: postId2})

    expect(endState.posts.length).toBe(1)
})