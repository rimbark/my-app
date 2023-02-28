import React from 'react'
import styles from './LoginField.module.css'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { logIn, logOut } from '../../redux/authReducer'
import { Navigate } from 'react-router-dom'

export function LoginField ({logIn, isAuth, serversError, captchaUrl}) {

  const {
    register,
    formState: {
      errors,
      isValid
    },
    handleSubmit,
    reset
  }
    = useForm({
    mode: 'onChange'
  })

  const onSubmit = async data => {
    console.log(data)
    logIn(data)
    reset()
  }

  if (isAuth)
    return <Navigate to={'/profile/'}/>

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className={styles.inputField}>
            <div>Email:</div>
            <div><input type={'email'} className={!errors.email
              ? styles.valid
              : styles.notValidLogin} {...register('email', {
              required: 'Required to feel'
            })}/></div>
          </label>
        </div>
        <div className={styles.warningField}>
          {errors?.email && <p>{errors?.email?.message || 'Error!!!'}</p>}
        </div>
        <div>
          <label className={styles.inputField}>
            <div>Password:</div>
            <div><input type={'password'} className={!errors.password
              ? styles.valid
              : styles.notValidLogin} {...register('password', {
              required: 'Required to feel'
            })}/></div>
          </label>
        </div>
        <div className={styles.warningField}>
          {errors?.password && <p>{errors?.password?.message || 'Error!!!'}</p>}
        </div>
        <div>
          {captchaUrl &&
            <label className={styles.inputField}>
              <div>Captcha:</div>
              <input type="text" {...register('captcha', {
                required: 'Required to feel'})}/>
            </label>}
        </div>
        <div>
          <input type="checkbox" {...register('rememberMe')}/>
          Remember me
        </div>
        <div>
          <input className={styles.submit} type="submit" disabled={!isValid}/>
        </div>
        {captchaUrl &&
        <div><img src={captchaUrl} alt=""/></div>}
        {serversError &&
          <div>{serversError}</div>
        }
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  serversError: state.authReducer.serversError,
  captchaUrl: state.authReducer.captchaUrl
})

export default connect(mapStateToProps, { logIn, logOut })(LoginField)
