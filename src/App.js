import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import SidebarContainer from './components/Sidebar/SidebarContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import LoginField from './components/LoginField/LoginField'
import HeaderContainer from './components/Header/HeaderContainer'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { initializeApp } from './redux/appReducer'
import Preloader from './components/common/preloader/Preloader'
import { withRouter } from './hoc/withRouter'

class App extends React.Component {
  componentDidMount () {
    this.props.initializeApp()
  }

  render () {
    if (!this.props.initialized) {
      debugger
      return <Preloader/>
    }
    return (
        <div className={'app-wrapper'}>
          <HeaderContainer/>
          <Navbar/>
          <SidebarContainer/>
          <div className={'app-wrapper-content'}>
            <Routes>
              <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
              <Route path="/dialogs/*" element={<DialogsContainer/>}/>
              <Route path="/users/*" element={<UsersContainer/>}/>
              <Route path={'/auth/*'} element={<LoginField/>}/>
            </Routes>
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
  connect(mapStateToProps, {initializeApp}))(App)