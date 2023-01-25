import React from 'react'
import { addPost, updatePost } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    posts: state.profileReducer.posts,
    newPost: state.profileReducer.newPost
  }
}

let MyPostsContainer = connect(mapStateToProps, {addPost, updatePost})(MyPosts)

export default MyPostsContainer