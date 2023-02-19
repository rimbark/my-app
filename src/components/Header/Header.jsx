import React from 'react'
import style from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = ({isAuth, logOut, login}) => {

  return (
    <header className={style.header}>
      <img
        src="https://freesoft.ru/storage/images/739/7385/738404/738404_normal.png"
        alt="some logo"/>
      {isAuth
        ? <div className={style.loginField}>
          <div className={style.auth}>
            {login}
          </div>
          <button className={style.auth} onClick={logOut}>
            Log out
          </button>
        </div>
        : <NavLink to={`/auth/`}>
          <div className={style.auth}>
            Log in
          </div>
        </NavLink>}

    </header>
  )
}
export default Header
