import React from 'react'
import style from './Sidebar.module.css'
import FriendItem from './FriendItem/FriendItem'

const Sidebar = (props) => {
  let friendElement = props.friends.map(f => <FriendItem avatar={f.avatar} name={f.name}/>)
  return (
    <div className={style.friendsBar}>
      <div className={style.blocker}>
        {friendElement}
      </div>
    </div>
  )
}

export default Sidebar
