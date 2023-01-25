import React from 'react'
import Profile from './Profile'
import { setUserProfile } from '../../redux/profileReducer'
import { connect } from 'react-redux'
import axios from 'axios'
debugger
class ProfileContainer extends React.Component {
  componentDidMount () {
    debugger
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        debugger
        this.props.setUserProfile(response.data)
      })
  }

  render () {
    debugger
    return (
      <div>
        <Profile {...this.props} />
      </div>
    )
    debugger
  }
}

let mapStateToProps = (state) => ({
    profile: state.profileReducer.profile
})

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer)
