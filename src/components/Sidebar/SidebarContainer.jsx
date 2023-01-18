import React from 'react'
import Sidebar from './Sidebar'

const SidebarContainer = (props) => {
  debugger
  let friends = props.state.friendsDataReducer.friends
  return <Sidebar friends={friends}/>
}

export default SidebarContainer
