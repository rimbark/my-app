import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import style from './Header.module.css'
import { getAuthUserData, logOut, setServersError } from '../../redux/authReducer'

class HeaderContainer extends React.Component {
  componentDidMount () {
    this.props.getAuthUserData()
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

export default connect(mapStateToProps, { getAuthUserData, logOut, setServersError })(HeaderContainer)
