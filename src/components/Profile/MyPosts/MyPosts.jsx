import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  const postsElements = props.posts.map(p => <Post key={p.id} message={p.post} likes={p.likesCount}/>)
  const newText = props.newPost

  const onPostAdd = () => {
    props.addPost()
  }

  const onPostChange = (e) => {
    const text = e.target.value
    props.updatePost(text)
  }

  return (
    <div>
      <h3>
        My post
      </h3>
      <div>
        <div className="">
                    <textarea onChange={onPostChange}
                              value={newText}/>
        </div>
        <div className="">
          <button onClick={onPostAdd}>
            Put me to send
          </button>
        </div>
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
