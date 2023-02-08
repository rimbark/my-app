import React from 'react'
import style from './User/User.module.css'
import { NavLink } from 'react-router-dom'
import Paginator from '../PaginatorButtons/Paginator'

const Users = (props) => {

  return <div className={style.wrapper}>
    <Paginator currentPage={props.currentPage}
               onPageChanged={props.onPageChanged}
               totalUsersCount={props.totalUsersCount}
               pageSize={props.pageSize}/>
    {
      props.users.map(u => <div key={u.id} className={style.container}>
        <div className={style.subscribe}>
          <NavLink to={'/profile/' + u.id}>
            <div><img
              src={u.photos.small !== null
                ? u.photos.small
                : 'https://avatars.mds.yandex.net/i?id=7406b5bf2010aace1c9c3d0381c45881f703f689-6250997-images-thumbs&n=13'}
              alt="ava"/>
            </div>
          </NavLink>
          <div>
            {
              u.followed
                ? <button disabled={props.sendingDataInProgress.includes(u.id)}
                          onClick={() => {props.unfollow(u.id)}
                          }>UNFOLLOW</button>
                : <button disabled={props.sendingDataInProgress.includes(u.id)}
                          onClick={() => {props.follow(u.id)}
                          }>FOLLOW</button>
            }
          </div>
        </div>
        <div className={style.about}>
          <div>{u.name}</div>
          <div>{u.status}</div>
        </div>
        <div className={style.about}>
          <div>{'u.location.country'}</div>
          <div>{'u.location.city'}</div>
        </div>
      </div>)}
  </div>
}
export default Users
