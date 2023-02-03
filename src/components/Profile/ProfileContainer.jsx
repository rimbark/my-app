import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/profileReducer'
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { profileDataAPI } from '../../api/api'

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
  componentDidMount () {
    let userId = !this.props.router.params.userId ? 27413 : this.props.router.params.userId;
    debugger
    profileDataAPI.getProfile(userId)
      .then(data => {
        this.props.setUserProfile(data)
      })
  }

  render () {
    return (
      <div>
        <Profile {...this.props} />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profileReducer.profile
})

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer))
