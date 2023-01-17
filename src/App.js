import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={'app-wrapper'}>
        <Header/>
        <Navbar/>
        <Sidebar state={props.store.friendsData}/>
        <div className={'app-wrapper-content'}>
          <Routes>
            <Route path="/profile/*" element={<Profile profilePage={props.store.profilePage}
                                                       dispatch={props.dispatch}/>}/>
            <Route path="/dialogs/*" element={<Dialogs messagesPage={props.store.messagesPage}
                                                       dispatch={props.dispatch}/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
