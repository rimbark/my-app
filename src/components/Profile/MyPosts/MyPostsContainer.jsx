import React from 'react'
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'

const MyPostsContainer = (props) => {
  let posts = props.state.profileReducer.posts
  let newPost = props.state.profileReducer.newPost
  const addPost = () => {
    props.state.dispatch(addPostActionCreator())
  }

  const postChange = (text) => {
    props.state.dispatch(updatePostActionCreator(text))
  }

  return <MyPosts addPost={addPost}
                  postChange={postChange}
                  posts={posts}
                  newPost={newPost}/>
}
export default MyPostsContainer