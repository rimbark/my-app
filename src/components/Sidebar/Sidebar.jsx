import React from 'react'
import s from './Sidebar.module.css'
import FriendItem from './FriendItem/FriendItem'

const Sidebar = (props) => {
  const friendElement = props.state.friends.map(f => <FriendItem avatar={f.avatar} name={f.name}/>)
  return (
    <div className={s.friendsBar}>
      <div className={s.blocker}>
        {friendElement}
      </div>
    </div>
  )
}

export default Sidebar
