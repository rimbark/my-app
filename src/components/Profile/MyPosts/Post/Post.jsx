import React from 'react'
import s from './Post.module.css'

const Post = ({message, likes}) => {
  return (
    <div className={s.item}>
      <img src="https://pic.rutubelist.ru/user/66/37/66370b638af9d17b6d6a359d2e7c29d5.jpg" alt=""/>
      {message}
      <div>
                <span>
                    Likes &rarr; {likes}
                </span>
      </div>
    </div>
  )
}

export default Post
