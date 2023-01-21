import React from 'react'
import style from './User/User.module.css'

const Users = (props) => {
  return <div className={style.wrapper}>
    {
      props.users.map(u => <div className={style.container}>
          <div className={style.subscribe}>
            <div><img src={u.photo} alt="ava"/></div>
            <div>
              {
                u.followed
                  ? <button onClick={() => { props.unFollow(u.id) }}>UNFOLLOW</button>
                  : <button onClick={() => { props.follow(u.id) }}>FOLLOW</button>
              }
            </div>
          </div>
          <div className={style.about}>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </div>
          <div className={style.about}>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </div>
        </div>
      )
    }
  </div>
}
export default Users
