import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer state={props.state}/>
    </div>
  )
}

export default Profile
