import React from 'react'
import Sidebar from './Sidebar'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    friends: state.friendsReducer.friends
  }
}
let mapDispatchToProps = (dispatch) => {
  return {}
}
let SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)

export default SidebarContainer
