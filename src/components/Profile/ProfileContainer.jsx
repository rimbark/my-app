import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getProfile, getStatus, updateStatus } from '../../redux/profileReducer'
import { compose } from 'redux'
import { withRouter } from '../../hoc/withRouter'

class ProfileContainer extends React.Component {
  componentDidMount () {
    debugger
    let userId = this.props.router.params.userId
    debugger
    if (!userId){
      userId = this.props.authUserId
      if (!userId)
        this.props.router.navigate('/auth/')
    }
    this.props.getProfile(userId)
    this.props.getStatus(userId)
  }

  render () {
    return (
      <div>
        <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatus}/>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
  status: state.profileReducer.status,
  authUserId: state.authReducer.id,
  isAuth: state.authReducer.isAuth
})

export default compose(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
  withRouter
)(ProfileContainer)