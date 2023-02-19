import React from 'react'
import style from './User.module.css'
import { NavLink } from 'react-router-dom'

const User = ({props, photos, id, name, status, followed}) => {
  return <div className={style.container}>
    <div className={style.subscribe}>
      <NavLink to={'/profile/' + id}>
        <div><img
          src={photos.small !== null
            ? photos.small
            : 'https://avatars.mds.yandex.net/i?id=7406b5bf2010aace1c9c3d0381c45881f703f689-6250997-images-thumbs&n=13'}
          alt="ava"/>
        </div>
      </NavLink>
      <div>
        {
          followed
            ? <button disabled={props.sendingDataInProgress.includes(id)}
                      onClick={() => {props.unfollow(id)}
                      }>UNFOLLOW</button>
            : <button disabled={props.sendingDataInProgress.includes(id)}
                      onClick={() => {props.follow(id)}
                      }>FOLLOW</button>
        }
      </div>
    </div>
    <div className={style.about}>
      <div>{name}</div>
      <div>{status}</div>
    </div>
  </div>
}
export default User
