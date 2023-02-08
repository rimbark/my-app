import React from 'react'
import { useForm } from 'react-hook-form'

export function MessageForm (props) {
  const {
    register,
    formState: {
      isValid,
      errors
    },
    handleSubmit,
    reset
  } = useForm({
    mode: 'onBlur'
  })
  const onSubmit = (data) => {
    console.log(data)
    props.addMessage(data)
    reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('newMessageBody', {
          maxLength: 300,
          minLength: 1,
          required: 'Empty field'
        })}/>
        <div>{errors?.newMessageBody && <span>{errors?.newMessageBody?.message || 'Check your text!'}</span>}</div>
        <input type="submit" disabled={!isValid}/>
      </form>
    </div>
  )
}