import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getProfile, getStatus, updateStatus } from '../../redux/profileReducer'
import { compose } from 'redux'
import { withRouter } from '../../hoc/withRouter'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

class ProfileContainer extends React.Component {
  componentDidMount () {
    let userId = this.props.router.params.userId
    if (!userId)
      userId = 27727
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
  status: state.profileReducer.status
})

export default compose(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer)