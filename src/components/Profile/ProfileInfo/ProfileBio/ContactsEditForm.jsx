import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import style from './ProfileContact.module.css'

const ContactsEditForm = ({ profile, updateProfileContacts, setEditMode }) => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: {
      errors
    }
  } = useForm({
  })

  const onSubmit = async data => {
    console.log(data)
    const response = await updateProfileContacts(data)
    if (!response) {
      setEditMode(false)
    } else {
      Object.keys(response).map(key => setError(`${key}`, { type: response[key] }))
    }
  }

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
        return (
          <div key={key} className={style.formField}>
            <label className={style.contact}><b>{key}: </b> <input
              type="text" {...register('contacts.' + key)}/></label>
            {errors && errors[key] && errors[key].type && (
              <div className={style.errorField}>{errors[key].type}</div>
            )}
          </div>)
      })}
      <input type="submit" value={'update'}/>
    </form>
  )
}

export default ContactsEditForm