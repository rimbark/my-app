import React, { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import SidebarContainer from './components/Sidebar/SidebarContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { initializeApp } from './redux/appReducer'
import Preloader from './components/common/preloader/Preloader'
import { withRouter } from './hoc/withRouter'

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))
const LoginField = React.lazy(() => import('./components/LoginField/LoginField'))

class App extends React.Component {
  componentDidMount () {
    this.props.initializeApp()
  }

  render () {
    if (!this.props.initialized) {
      return <Preloader/>
    }
    return (
      <div className={'app-wrapper'}>
        <HeaderContainer/>
        <Navbar/>
        <SidebarContainer/>
        <div className={'app-wrapper-content'}>
          <Suspense fallback={<div><Preloader/></div>}>
            <Routes>
              <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
              <Route path="/dialogs/*" element={<DialogsContainer/>}/>
              <Route path="/users/*" element={<UsersContainer/>}/>
              <Route path={'/auth/*'} element={<LoginField/>}/>
            </Routes>
          </Suspense>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.appReducer.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App)