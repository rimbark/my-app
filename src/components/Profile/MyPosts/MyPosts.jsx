import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/profileReducer'

const MyPosts = (props) => {
  const postsElements = props.profilePage.posts.map(p => <Post message={p.post} likes={p.likesCount}/>)

  const addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  const onPostChange = (e) => {
    // eslint-disable-next-line no-debugger
    debugger
    const text = e.target.value
    props.dispatch(updatePostActionCreator(text))
  }

  return (
    <div>
      <h3>
        My post
      </h3>
      <div>
        <div className="">
                    <textarea onChange={onPostChange}
                              value={props.profilePage.newPost}/>
        </div>
        <div className="">
          <button onClick={addPost}>
            Put me to send
          </button>
        </div>
      </div>

      <div className=""></div>
      <div className=""></div>
      <div className={s.NewPost}>
        <h5>
          New posts
        </h5>
      </div>
      <div>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts
