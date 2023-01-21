import React from 'react'
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    posts: state.profileReducer.posts,
    newPost: state.profileReducer.newPost
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postChange: (body) => {
      dispatch(updatePostActionCreator(body))
    },
    addPost: () => {
      dispatch(addPostActionCreator())

    }
  }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer