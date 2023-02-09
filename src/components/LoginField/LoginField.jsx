import React from 'react'
import styles from './LoginField.module.css'
import { useForm } from 'react-hook-form'
import cn from 'classnames'
import { connect } from 'react-redux'
import { logIn, logOut } from '../../redux/authReducer'
import { useNavigate } from 'react-router-dom'

export function LoginField (props) {
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
    mode: 'onBlur'
  })
  const navigate = useNavigate()
  const onSubmit = data => {
    console.log(data)
    props.logIn(data)
    navigate('/profile')
    reset()
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className={styles.inputField}>
            <div>Email:</div>
            <div><input type={'email'} className={!errors.email ? styles.valid : styles.notValidLogin} {...register('email', {
              required: 'Requaried to feel',
              minLength: {
                value: 5,
                message: 'Min count of symbols is 5'
              }
            })}/></div>
          </label>
        </div>
        <div className={styles.warningField}>
          {errors?.email && <p>{errors?.email?.message || 'Error!!!'}</p>}
        </div>
        <div>
          <label className={styles.inputField}>
            <div>Password:</div>
            <div><input type={'password'} className={cn(styles.valid, {[styles.notValidLogin]: errors.password})} {...register('password', {
              required: 'Requaried to feel',
              minLength: {
                value: 5,
                message: 'Min count of symbols is 5'
              }
            })}/></div>
          </label>
        </div>
        <div className={styles.warningField}>
          {errors?.password && <p>{errors?.password?.message || 'Error!!!'}</p>}
        </div>
        <div>
          <input type="checkbox" {...register('rememberMe')}/>
          Remember me
        </div>
        <div>
          <input className={styles.submit} type="submit" disabled={!isValid}/>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth
})

export default connect(mapStateToProps, {logIn, logOut})(LoginField)
