import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getProfile, getStatus, loadPhoto, updateProfileContacts, updateStatus } from '../../redux/profileReducer'
import { compose } from 'redux'
import { withRouter } from '../../hoc/withRouter'


class ProfileContainer extends React.Component {
  refreshProfile () {
    let userId = this.props.router.params.userId
    if (!userId) {
      userId = this.props.authUserId
      if (!userId)
        this.props.router.navigate('/auth/')
    }
    this.props.getProfile(userId)
    this.props.getStatus(userId)
  }

  componentDidMount () {
    this.refreshProfile()
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.router.params.userId !== prevProps.router.params.userId)
      this.refreshProfile()
  }

  render () {
    return (
      <div>
        <Profile {...this.props}
                 isOwner={!this.props.router.params.userId}
                 updateStatus={this.props.updateStatus}
                 loadPhoto={this.props.loadPhoto}
                 getProfile={this.props.getProfile}
                 updateProfileContacts={this.props.updateProfileContacts}/>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  errorsFromAPI: state.profileReducer.errorsFromAPI,
  profile: state.profileReducer.profile,
  status: state.profileReducer.status,
  authUserId: state.authReducer.id,
  isAuth: state.authReducer.isAuth
})

export default compose(
  connect(mapStateToProps, {
    getProfile, getStatus, updateStatus,
    loadPhoto, updateProfileContacts }),
  withRouter
)(ProfileContainer)