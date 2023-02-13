import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import style from './Header.module.css'
import { logOut, setServersError } from '../../redux/authReducer'

class HeaderContainer extends React.Component {

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

export default connect(mapStateToProps, { logOut, setServersError })(HeaderContainer)
