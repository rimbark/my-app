import React from 'react'
import style from './User/User.module.css'
import { NavLink } from 'react-router-dom'
import { createPages } from './pagesCreator'
import { followUnfollowAPI } from '../../api/api'

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = []

  createPages(pages, pagesCount, props.currentPage)

  return <div className={style.wrapper}>
    <div>
      <button onClick={() => {
        props.onPageChanged(props.currentPage > 10
          ? props.currentPage - 10
          : props.currentPage - (props.currentPage - 1))
      }}>-10
      </button>
      {pages.map(p => {
        return <span key={p} className={props.currentPage === p ? style.selectedPage : style.commonPage}
                     onClick={() => {props.onPageChanged(p)}}>{p}</span>
      })}
      <button onClick={() => {
        props.onPageChanged((props.currentPage + 10) <= pagesCount
          ? props.currentPage + 10
          : pagesCount)
      }}>+10
      </button>
    </div>
    {
      props.users.map(u => <div key={u.id} className={style.container}>
        <div className={style.subscribe}>
          <NavLink to={'/profile/' + u.id}>
            <div><img
              src={u.photos.small !== null ? u.photos.small : 'https://avatars.mds.yandex.net/i?id=7406b5bf2010aace1c9c3d0381c45881f703f689-6250997-images-thumbs&n=13'}
              alt="ava"/>
            </div>
          </NavLink>
          <div>
            {
              u.followed
                ? <button disabled={props.sendingDataInProgress.includes(u.id)} onClick={() => {
                  props.sendingFollowedData(true, u.id)
                  followUnfollowAPI.unFollowUser(u.id).then(data => {
                    if (data.resultCode === 0)
                      props.unFollow(u.id)
                    props.sendingFollowedData(false, u.id)
                  })
                }}>UNFOLLOW</button>
                : <button disabled={props.sendingDataInProgress.includes(u.id)} onClick={() => {
                  props.sendingFollowedData(true, u.id)
                  followUnfollowAPI.followUser(u.id).then(data => {
                    if (data.resultCode === 0)
                      props.follow(u.id)
                    props.sendingFollowedData(false, u.id)
                  })
                  props.follow(u.id)
                }}>FOLLOW</button>
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
