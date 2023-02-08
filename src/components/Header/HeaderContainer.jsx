import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import style from './Header.module.css'
import { authorization } from '../../redux/authReducer'

class HeaderContainer extends React.Component {
  componentDidMount () {
    this.props.authorization()
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

export default connect(mapStateToProps, { authorization })(HeaderContainer)
