import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { registered } from '../actions/userActions'

const RegisterScreen = ({ location, history }) => {
  const [message, setMessage] = useState(null)
  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error: loginError, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(registered(data.name, data.email, data.password))
    }
  }

  return (
    <>
      <div className='w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0'>
        <div className='w-full sm:max-w-md p-5 mx-auto'>
          <h2 className=' mb-12 text-2xl font-semibold text-center text-gray-700 dark:text-white'>
            Welcome Back to <span className='text-blue-400'>Coinyourway</span>
          </h2>
          {message && <Message color='red'>{message}</Message>}
          {loginError && <Message color='red'>{loginError}</Message>}
          {loading && <Loader />}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-4 '>
              <label className='inline-block mb-2 text-gray-700'>Name</label>
              <input
                className=' block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                type='text'
                placeholder='name'
                {...register('name', {
                  required: 'name field is required',
                })}
              />
              {errors.name && (
                <Message color='red'>{errors.name.message}</Message>
              )}
            </div>
            <div className='mb-4 '>
              <label className='inline-block mb-2 text-gray-700'>Email</label>
              <input
                className=' block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                type='email'
                placeholder='email'
                {...register('email', {
                  required: 'Email is required.',
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: 'Email is not valid.',
                  },
                })}
              />
              {errors.email && (
                <Message color='red'>{errors.email.message}</Message>
              )}
            </div>
            <div className='mb-4'>
              <label>Password</label>
              <input
                className='  w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                type='password'
                placeholder='password'
                {...register('password', {
                  required: 'Password is required.',
                  minLength: {
                    value: 6,
                    message: 'Password should be at-least 6 characters.',
                  },
                })}
              />
              {errors.password && (
                <Message color='red'>{errors.password.message}</Message>
              )}
            </div>
            <div className='mb-4'>
              <label>Confirm Password</label>
              <input
                className='  w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                type='password'
                placeholder='confirmPassword'
                {...register('confirmPassword', {
                  required: 'Password confirmation is required.',
                  minLength: {
                    value: 6,
                    message:
                      'Password confirmation should be same as password.',
                  },
                })}
              />
              {errors.confirmPassword && (
                <Message color='red'>{errors.confirmPassword.message}</Message>
              )}
            </div>
            <div className='mt-6'>
              <label></label>
              <button
                type='submit'
                className='w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out'
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className='text-gray-800 mt-6 text-center'>
            {' '}
            Have an Account?{' '}
            <Link
              className='text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out'
              to={redirect ? `/login?redirect=${redirect}` : '/login'}
            >
              Login
            </Link>{' '}
          </p>
        </div>
      </div>
    </>
  )
}

export default RegisterScreen
