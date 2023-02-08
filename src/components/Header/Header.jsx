import React from 'react'
import style from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <header className={style.header}>
      <img
        src="https://freesoft.ru/storage/images/739/7385/738404/738404_normal.png"
        alt="some logo"/>
      {props.isAuth
        ? <div className={style.loginField}>
          <div className={style.auth}>
            {props.login}
          </div>
          {/*<NavLink to={'/auth'}>*/}
          {/*  <button className={style.auth}>*/}
          {/*    LogOut*/}
          {/*  </button>*/}
          {/*</NavLink>*/}
        </div>
        : <NavLink to={`/auth/`}>
          <div className={style.auth}>
            Login
          </div>
        </NavLink>}

    </header>
  )
}

export default Header
