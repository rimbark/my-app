import React from 'react'
import styles from './LoginField.module.css'
import { useForm } from 'react-hook-form'
import cn from 'classnames'

export default function LoginField () {
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
    mode: 'all'
  })
  const onSubmit = data => {
    console.log(data)
    reset()
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className={styles.inputField}>
            <div>Login:</div>
            <div><input className={!errors.login ? styles.valid : styles.notValidLogin} {...register('login', {
              required: 'Requaried to feel',
              minLength: {
                value: 5,
                message: 'Min count of symbols is 5'
              }
            })}/></div>
          </label>
        </div>
        <div className={styles.warningField}>
          {errors?.login && <p>{errors?.login?.message || 'Error!!!'}</p>}
        </div>
        <div>
          <label className={styles.inputField}>
            <div>Password:</div>
            <div><input className={cn(styles.valid, {[styles.notValidLogin]: errors.password})} {...register('password', {
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
          <input className={styles.submit} type="submit" disabled={!isValid}/>
        </div>
      </form>
    </div>
  )
}
