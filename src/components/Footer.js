import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='relative bg-cyan-50 pt-8 pb-6 '>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap text-left lg:text-left'>
            <div className='w-full lg:w-6/12 px-4'>
              <h4 className='text-3xl fonat-semibold text-slate-700'>
                Let's Keep in touch!
              </h4>
              <h5 className='text-lg mt-0 mb-2 text-slate-600'>
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className='mt-6 lg:mb-0 mb-6'>
                <button
                  className='bg-white text-cyan-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
                  type='button'
                >
                  <i className='fab fa-twitter'></i>
                </button>
                <button
                  className='bg-white text-blue-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
                  type='button'
                >
                  <i className='fab fa-facebook-square'></i>
                </button>
              </div>
            </div>
            <div className='w-full lg:w-6/12 px-4'>
              <div className='flex flex-wrap items-top mb-6'>
                <div className='w-full lg:w-4/12 px-4 ml-auto'>
                  <span className='block uppercase text-slate-500 text-sm font-semibold mb-2'>
                    Useful links
                  </span>
                  <ul className='list-unstyled'>
                    <li>
                      <a
                        className='text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm'
                        href='/#'
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm'
                        href='/#'
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm'
                        href='/#'
                      >
                        Facebook
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='w-full lg:w-4/12 px-4'>
                  <span className='block uppercase text-slate-500 text-sm font-semibold mb-2'>
                    other resources
                  </span>
                  <ul className='list-unstyled'>
                    <li>
                      <a
                        className='text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm'
                        href='/#'
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm'
                        href='/#'
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm'
                        href='/#'
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm'
                        href='/#'
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className='my-6 border-slate-300' />
          <div className='flex flex-wrap items-center md:justify-between justify-center'>
            <div className='w-full md:w-4/12 px-4 mx-auto text-center'>
              <div className='text-sm text-slate-500 font-semibold py-1'>
                Copyright © <span id='get-current-year'>2021</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
