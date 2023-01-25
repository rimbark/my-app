import React from 'react'
import style from './User/User.module.css'
const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return <div className={style.wrapper}>
    <div>
      {pages.map(p => {
        return <span className={props.currentPage === p ? style.selectedPage : style.commonPage}
                     onClick={() => { props.onPageChanged(p) }}>{p}</span>
      })}
    </div>
    {
      props.users.map(u => <div key={u.id} className={style.container}>
          <div className={style.subscribe}>
            <div><img
              src={u.photos.small !== null ? u.photos.small : 'https://avatars.mds.yandex.net/i?id=7406b5bf2010aace1c9c3d0381c45881f703f689-6250997-images-thumbs&n=13'}
              alt="ava"/></div>
            <div>
              {
                u.followed
                  ? <button onClick={() => { props.unFollow(u.id) }}>UNFOLLOW</button>
                  : <button onClick={() => { props.follow(u.id) }}>FOLLOW</button>
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
        </div>
      )
    }
  </div>
}

export default Users
