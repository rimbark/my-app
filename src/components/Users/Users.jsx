import React from 'react'
import style from './User/User.module.css'
import Paginator from '../PaginatorButtons/Paginator'
import User from './User/User'

const Users = (props) => {

  return <div className={style.wrapper}>
    <Paginator currentPage={props.currentPage}
               onPageChanged={props.onPageChanged}
               totalUsersCount={props.totalUsersCount}
               pageSize={props.pageSize}/>
    {
      props.users.map(u => <User props={props}
                                 photos={u.photos}
                                 id={u.id}
                                 key={u.id}
                                 name={u.name}
                                 followed={u.followed}
                                 status={u.status}
                                 className={style.container}/>)
    }
  </div>
}
export default Users
