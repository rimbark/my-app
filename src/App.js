import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import SidebarContainer from './components/Sidebar/SidebarContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import LoginField from './components/LoginField/LoginField'
import HeaderContainer from './components/Header/HeaderContainer'

const App = () => {
  return (
    <BrowserRouter>
      <div className={'app-wrapper'}>
        <HeaderContainer/>
        <Navbar/>
        <SidebarContainer/>
        <div className={'app-wrapper-content'}>
          <Routes>
            <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
            <Route path='/dialogs/*' element={<DialogsContainer/>}/>
            <Route path='/users/*' element={<UsersContainer/>}/>
            <Route path={'/auth/*'} element={<LoginField/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
// 27413