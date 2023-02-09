import React from 'react'
import style from './Header.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Header = (props) => {

  return (
    <header className={style.header}>
      <img
        src="https://freesoft.ru/storage/images/739/7385/738404/738404_normal.png"
        alt="some logo"/>
      {/*{props.isAuth*/}
      {/*  ? <div className={style.loginField}>*/}
      {/*    <div className={style.auth}>*/}
      {/*      {props.login}*/}
      {/*    </div>*/}
      {/*    <button className={style.auth} onClick={props.logOut}>*/}
      {/*      LogOut*/}
      {/*    </button>*/}
      {/*  </div>*/}
      {/*  : <NavLink to={`/auth/`}>*/}
      {/*    <div className={style.auth}>*/}
      {/*      Login*/}
      {/*    </div>*/}
      {/*  </NavLink>}*/}
      <LoginLogoutButtons props={props}/>

    </header>
  )
}

export function LoginLogoutButtons (props) {
  const {
    handleSubmit
  } = useForm()
  const navigate = useNavigate()
  const onSubmit = () => {
    props.props.logOut()
    navigate('/auth')
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {props.props.isAuth
        ? <div className={style.loginField}>
          <div className={style.auth}>
            {props.props.login}
          </div>
          <input type="submit" value={'Log Out'}/>
        </div>
        : <NavLink to={'/auth'}>
          <div className={style.auth}>
            Log In
          </div>
        </NavLink>
      }
    </form>
  )
}

export default Header
