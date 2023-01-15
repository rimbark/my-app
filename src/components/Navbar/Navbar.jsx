import React from 'react'
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const setActive = ({ isActive }) => isActive ? s.activeLink : s.item
const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to={'/profile'} className={setActive}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to={'/dialogs'} className={setActive}>
          Messages
        </NavLink>
      </div>
      {/* <div> */}
      {/*    <a>News</a> */}
      {/* </div> */}
      {/* <div> */}
      {/*    <a>Music</a> */}
      {/* </div> */}
      {/* <div> */}
      {/*    <a>Settings</a> */}
      {/* </div> */}
    </nav>)
}

export default Navbar
