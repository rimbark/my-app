import React from 'react'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToPropsForAuthRedirect = state => ({ isAuth: state.authReducer.isAuth })

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render () {
      if (!this.props.isAuth) return <Navigate to={'/auth/'}/>
      return <Component {...this.props}/>
    }
  }
  return connect(mapStateToPropsForAuthRedirect)(RedirectComponent)
}
