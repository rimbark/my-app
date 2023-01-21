import React from 'react'
import style from './User/User.module.css'
import axios from 'axios'

class Users extends React.Component {
  constructor (props) {
    super(props)
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      this.props.setUsers(response.data.items)
    })
  }

  render () {
    return <div className={style.wrapper}>
      {
        this.props.users.map(u => <div key={u.id} className={style.container}>
            <div className={style.subscribe}>
              <div><img
                src={u.photos.small != null ? u.small : 'https://avatars.mds.yandex.net/i?id=7406b5bf2010aace1c9c3d0381c45881f703f689-6250997-images-thumbs&n=13'}
                alt="ava"/></div>
              <div>
                {
                  u.followed
                    ? <button onClick={() => { this.props.unFollow(u.id) }}>UNFOLLOW</button>
                    : <button onClick={() => { this.props.follow(u.id) }}>FOLLOW</button>
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
}

export default Users
