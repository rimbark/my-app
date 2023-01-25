import React from 'react'
import Preloader from '../../common/preloader/Preloader'

function ProfileInfo (props) {
debugger
  if (!props.profile) {
    return <Preloader/>
  }
debugger
  return (
    <div>
      <div>
        <img src="https://i.ytimg.com/vi/ah0TSxFAqPY/maxresdefault.jpg" alt=""/>
      </div>
      <div>
        <img src={ props.profile.photos.large }/>
      </div>
    </div>
  )
}

export default ProfileInfo
