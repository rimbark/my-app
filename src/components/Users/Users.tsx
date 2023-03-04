import React from 'react'
import style from './User/User.module.css'
import Paginator from '../PaginatorButtons/Paginator'
import User from './User/User'
import {UsersType} from "../../redux/Types";

type PropsType = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    users: Array<UsersType>
    sendingDataInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

const Users: React.FC<PropsType> = ({
                                        currentPage, totalUsersCount, pageSize,
                                        users, sendingDataInProgress, onPageChanged,
                                        follow, unfollow
                                    }) => {

    return <div className={style.wrapper}>
        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount}
                   pageSize={pageSize}/>
        {
            users.map(u => <User photos={u.photos}
                                 id={u.id}
                                 key={u.id}
                                 name={u.name}
                                 followed={u.followed}
                                 status={u.status}
                                 sendingDataInProgress={sendingDataInProgress}
                                 follow={follow}
                                 unfollow={unfollow}/>)
        }
    </div>
}
export default Users
