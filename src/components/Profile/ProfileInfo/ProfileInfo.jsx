import React from 'react'
import Preloader from '../../common/preloader/Preloader'
function ProfileInfo (props) {
  debugger
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div>
      <div>
        <img src="https://i.ytimg.com/vi/ah0TSxFAqPY/maxresdefault.jpg" alt=""/>
      </div>
      <div>
        <img src={ props.profile.photos.large === null ? 'https://avatars.mds.yandex.net/i?id=7406b5bf2010aace1c9c3d0381c45881f703f689-6250997-images-thumbs&n=13' : props.profile.photos.large }/>
      </div>
    </div>
  )
}

export default ProfileInfo
