import React from 'react'
import style from './User.module.css'
import {NavLink} from 'react-router-dom'
import {PhotoType, UsersType} from "../../../redux/Types";

type PropsType = {
    photos: PhotoType
    id: number
    name: string
    status: string
    followed: boolean
    sendingDataInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

const User: React.FC<PropsType> = ({
                                       sendingDataInProgress, photos, id,
                                       name, status, followed,
                                       follow, unfollow
                                   }) => {
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
                        ? <button disabled={sendingDataInProgress.includes(id)}
                                  onClick={() => {
                                      unfollow(id)
                                  }
                                  }>UNFOLLOW</button>
                        : <button disabled={sendingDataInProgress.includes(id)}
                                  onClick={() => {
                                      follow(id)
                                  }
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
