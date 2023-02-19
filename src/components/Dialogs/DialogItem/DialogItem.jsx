import React from 'react'
import s from '../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const setLink = ({ isActive }) => isActive ? s.activeDialogLink : s.dialogLink

const DialogItem = ({id, avatar, name}) => {
  const path = '/dialogs/' + id

  return (
    <div className={s.dialogView}>
      <div>
        <NavLink to={path}><img src={avatar} alt="ava" className={s.avaStyle}/></NavLink>
      </div>
      <div>
        <NavLink to={path} className={setLink}>{name}</NavLink>
      </div>
    </div>
  )
}

export default DialogItem
