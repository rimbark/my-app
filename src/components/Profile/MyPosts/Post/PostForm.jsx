import React from 'react'
import { useForm } from 'react-hook-form'

export function PostForms (props) {
  const { register, handleSubmit, reset, formState: { isValid } } = useForm()
  const onSubmit = data => {
    console.log(data)
    props.addPost(data)
    reset()
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <input {...register('newPostBody',
              {
                minLength: 1,
                required: 'Empty field'
              })}/>
          </div>
          <div>
            <input type="submit" disabled={!isValid}/>
          </div>
        </div>
      </form>
    </div>
  )
}