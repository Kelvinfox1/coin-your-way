import React from 'react'
import { useForm } from 'react-hook-form'

const LoginScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  console.log(errors)
  return (
    <div className='w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0'>
      <div className='w-full sm:max-w-md p-5 mx-auto'>
        <h2 className='mb-12 text-center text-5xl font-extrabold'>
          Log in to Coinyourway.
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label className='block mb-1' for='email'>
              Email-Address
            </label>
            <input
              type='email'
              className='py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full'
              placeholder='email'
              {...register('email', {})}
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-1' for='password'>
              Password
            </label>
            <input
              type='password'
              className='py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full'
              placeholder='password'
              {...register('password', {})}
            />
          </div>

          <div className='mt-6'>
            <button
              type='submit'
              className='w-full inline-flex items-center justify-center px-4 py-2 bg-blue-400 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition'
            >
              Sign In
            </button>
          </div>
          <div className='mt-6 text-center'>
            <a href='/#' className='underline'>
              Sign up for an account
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginScreen
