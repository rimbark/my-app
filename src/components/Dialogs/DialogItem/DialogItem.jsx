import React from 'react'
import s from '../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const setLink = ({ isActive }) => isActive ? s.activeDialogLink : s.dialogLink

const DialogItem = (props) => {
  const path = '/dialogs/' + props.id

  return (
    <div className={s.dialogView}>
      <div>
        <NavLink to={path}><img src={props.avatar} alt="ava" className={s.avaStyle}/></NavLink>
      </div>
      <div>
        <NavLink to={path} className={setLink}>{props.name}</NavLink>
      </div>
    </div>
  )
}

export default DialogItem
