import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import SidebarContainer from './components/Sidebar/SidebarContainer'

const App = (props) => {
  debugger
  return (
    <BrowserRouter>
      <div className={'app-wrapper'}>
        <Header/>
        <Navbar/>
        <SidebarContainer state={props.state}/>
        <div className={'app-wrapper-content'}>
          <Routes>
            <Route path="/profile/*" element={<Profile state={props.state}/>}/>
            <Route path="/dialogs/*" element={<DialogsContainer state={props.state}/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
