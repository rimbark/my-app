import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import style from './Header.module.css'
import { usersAuth } from '../../redux/authReducer'
import { authDataAPI } from '../../api/api'

class HeaderContainer extends React.Component {
  componentDidMount () {
    authDataAPI.getAuthData().then(data => {
      if (data.resultCode === 0) {
        const {id, email, login} = data.data
        this.props.usersAuth(id, email, login)
      }
    })
  }

  render () {
    return (
      <div className={style.authContainer}>
        <Header {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  login: state.authReducer.login
})

export default connect(mapStateToProps, {usersAuth})(HeaderContainer)
