import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import SidebarContainer from './components/Sidebar/SidebarContainer'
import UsersContainer from './components/Users/UsersContainer'

const App = () => {
  return (
    <BrowserRouter>
      <div className={'app-wrapper'}>
        <Header/>
        <Navbar/>
        <SidebarContainer/>
        <div className={'app-wrapper-content'}>
          <Routes>
            <Route path="/profile/*" element={<Profile/>}/>
            <Route path="/dialogs/*" element={<DialogsContainer/>}/>
            <Route path="/users/*" element={<UsersContainer/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
