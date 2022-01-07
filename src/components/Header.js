import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <>
      <header>
        <nav className='relative flex flex-wrap items-center justify-between px-2 py-3 text-gray-700 bg-cyan-50 '>
          <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
            <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
              <Link
                to='/'
                className='text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-black focus:outline-none focus:shadow-outline'
              >
                COIN YOUR WAY
              </Link>

              <button
                className='text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
                type='button'
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i className='fas fa-bars'></i>
              </button>
            </div>
            <div
              className={
                'lg:flex flex-grow items-center' +
                (navbarOpen ? ' flex' : ' hidden')
              }
              id='example-navbar-danger'
            >
              <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
                <li className='nav-item'>
                  <Link
                    to='/about_us'
                    className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75'
                  >
                    <i className='fas fa-info-circle text-lg leading-lg text-black opacity-75'></i>
                    <span className='ml-2'>About Us</span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/blog'
                    className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75'
                  >
                    <i className='fas fa-blog text-lg leading-lg text-black opacity-75'></i>
                    <span className='ml-2'>Blog</span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/contact_us'
                    className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75'
                  >
                    <i className='fas fa-address-book text-lg leading-lg text-black opacity-75'></i>
                    <span className='ml-2'>Contact us</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
