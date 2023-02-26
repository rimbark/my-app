import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = ({
  profile, status, updateStatus,
  isOwner, loadPhoto, updateProfileContacts,
  getProfile, errorsFromAPI }) => {
  return (
    <div>
      <ProfileInfo loadPhoto={loadPhoto}
                   isOwner={isOwner}
                   profile={profile}
                   status={status}
                   updateStatus={updateStatus}
                   updateProfileContacts={updateProfileContacts}
                   getProfile={getProfile}
                   errorsFromAPI={errorsFromAPI}/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile
