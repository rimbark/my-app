import React, { useState } from 'react'
import Preloader from '../../common/preloader/Preloader'
import StatusProfile from '../../StatusProfile/StatusProfile'
import style from './ProfileInfo.module.css'
import ProfileContacts from './ProfileBio/ProfileContacts'
import ContactsEditForm from './ProfileBio/ContactsEditForm'

function ProfileInfo ({
  profile, status, updateStatus,
  isOwner, loadPhoto, updateProfileContacts, errorsFromAPI
}) {

  const [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader/>
  }

  const onUpdateContacts = () => {
    setEditMode(true)
  }

  // const onSubmit = async data => {
  //   console.log(data)
  //   updateProfileContacts(data)
  //   if (!errorsFromAPI) {
  //     setEditMode(false)
  //   }
  // }

  const updatePhoto = (e) => {
    if (e.target.files.length)
      loadPhoto(e.target.files[0])
  }

  return (
    <div>
      <div className={style.profilePhoto}>
        <img src="https://i.ytimg.com/vi/ah0TSxFAqPY/maxresdefault.jpg" alt=""/>
        {isOwner && <input type="file" onChange={updatePhoto}/>}
      </div>
      <div>
        <img alt={profile.fullName} src={profile.photos.large === null
          ? 'https://avatars.mds.yandex.net/i?id=7406b5bf2010aace1c9c3d0381c45881f703f689-6250997-images-thumbs&n=13'
          : profile.photos.large}/>
      </div>
      <StatusProfile isOwner={isOwner} status={status} updateStatus={updateStatus}/>
      {isOwner
        && !editMode
        && <button onClick={onUpdateContacts}>Update contacts</button>}
      {editMode
        ? <ContactsEditForm profile={profile}
                            errorsFromAPI={errorsFromAPI}
                            updateProfileContacts={updateProfileContacts}
                            setEditMode={setEditMode}/>
        : <ProfileContacts profile={profile}/>}
    </div>
  )
}

export default ProfileInfo
