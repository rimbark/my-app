import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'
import { PostForms } from './Post/PostForm'

const MyPosts = (props) => {
  const postsElements = props.posts.map(p => <Post key={p.id} message={p.post} likes={p.likesCount}/>)

  return (
    <div>
      <h3>
        My post
      </h3>
      <div>
        <PostForms addPost={props.addPost}/>
      </div>

      <div className=""></div>
      <div className=""></div>
      <div className={style.NewPost}>
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
