import React from 'react'
import style from './ProfileContact.module.css'

const ProfileContacts = ({ profile }) => {
  return (
    <div className={style.contacts}>
        <div>
          <div><b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}</div>
          <div><b>Skills for a job:</b> {profile.lookingForAJobDescription}</div>
          <div><b>Full name:</b> {profile.fullName}</div>
          <div><b>About me:</b> {profile.aboutMe}</div>
        </div>
        <div>
          <b>Contacts: </b>
          {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
          })}
        </div>
    </div>
  )
}

const Contact = ({ contactTitle, contactValue }) => {
  return <div className={style.contact}><b>{contactTitle}:</b> {contactValue}</div>
}

export default ProfileContacts