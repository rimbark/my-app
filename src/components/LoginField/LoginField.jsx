import React from 'react'
import styles from './LoginField.module.css'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { logIn, logOut } from '../../redux/authReducer'

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

  const onSubmit = async data => {
    console.log(data)
    props.logIn(data)
    reset()
  }

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
          <input type="checkbox" {...register('rememberMe')}/>
          Remember me
        </div>
        <div>
          <input className={styles.submit} type="submit" disabled={!isValid}/>
        </div>
        {props.serversError &&
          <div>{props.serversError}</div>
        }
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  serversError: state.authReducer.serversError
})

export default connect(mapStateToProps, { logIn, logOut })(LoginField)
