import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import style from './ProfileContact.module.css'

const ContactsEditForm = ({ profile, errorsFromAPI, onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset
  } = useForm({
    mode: 'onSubmit'
  })

  useEffect(() => {
    reset(profile)
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.contacts}>
      <label><b>Looking for a job:</b> <input {...register('lookingForAJob')} type="checkbox"/></label>
      <label><b>Skills for a job:</b> <input {...register('lookingForAJobDescription')} type="text"/></label>
      <label><b>About me</b>: <input {...register('aboutMe')} type="text"/></label>
      <label><b>Full name:</b> <input {...register('fullName')} type="text"/></label>
      <label><b>Contacts: </b></label>
      {Object.keys(profile.contacts).map(key => {
        return <label key={key} className={style.contact}><b>{key}: </b> <input
          type="text" {...register('contacts.' + key)}/></label>
      })}
      {errorsFromAPI && <div className={style.APIError}>{errorsFromAPI}</div>}
      <input type="submit" value={'update'}/>
    </form>
  )
}

export default ContactsEditForm