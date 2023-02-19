import React from 'react'
import Preloader from '../../common/preloader/Preloader'
import StatusProfile from '../../StatusProfile/StatusProfile'

function ProfileInfo ({ profile, status, updateStatus }) {
  if (!profile) {
    return <Preloader/>
  }

  return (
    <div>
      <div>
        <img src="https://i.ytimg.com/vi/ah0TSxFAqPY/maxresdefault.jpg" alt=""/>
      </div>
      <div>
        <img src={profile.photos.large === null
          ? 'https://avatars.mds.yandex.net/i?id=7406b5bf2010aace1c9c3d0381c45881f703f689-6250997-images-thumbs&n=13'
          : profile.photos.large}/>
      </div>
      <StatusProfile status={status} updateStatus={updateStatus}/>
    </div>
  )
}

export default ProfileInfo
