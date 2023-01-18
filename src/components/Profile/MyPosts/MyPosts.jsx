import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  const postsElements = props.posts.map(p => <Post message={p.post} likes={p.likesCount}/>)

  const onPostAdd = () => {
    props.addPost()
  }

  const onPostChange = (e) => {
    const text = e.target.value
    props.postChange(text)
  }

  return (
    <div>
      <h3>
        My post
      </h3>
      <div>
        <div className="">
                    <textarea onChange={onPostChange}
                              value={props.newPost}/>
        </div>
        <div className="">
          <button onClick={onPostAdd}>
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
