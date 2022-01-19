import React from 'react'

const AboutUs = () => {
  return (
    <>
      <section className='relative pt-12 bg-blueGray-50'>
        <div className='items-center flex flex-wrap'>
          <div className='w-full md:w-4/12 ml-auto mr-auto px-4'>
            <img
              alt='...'
              className='max-w-full rounded-lg shadow-lg rotate-12'
              src='https://images.unsplash.com/photo-1624996379671-b4d0837e45cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            />
          </div>
          <div className='w-full md:w-5/12 ml-auto mr-auto px-4'>
            <div className='md:pr-12'>
              <div className='text-blue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-300 mt-8'>
                <i className='fas fa-rocket text-xl item-center'></i>
              </div>
              <h3 className='text-3xl font-semibold text-center'>
                Empowering humanity. One human at a time.
              </h3>
              <p className='mt-4 text-lg leading-relaxed text-blueGray-500'>
                We are Coinyourway, a financial service that makes it fast, safe
                and fun to buy digital currency, localy and anywhere in the
                world. We believe that the future of money is one where we, the
                people, are in control of our own economy. A future where there
                is no place for middle-men, hidden fees and fine print.
              </p>
              <ul className='list-none mt-6'>
                <li className='py-2'>
                  <div className='flex items-center'>
                    <div>
                      <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3'>
                        <i className='fas fa-fingerprint'></i>
                      </span>
                    </div>
                    <div>
                      <h4 className='text-blueGray-500'>Carefully crafted</h4>
                    </div>
                  </div>
                </li>
                <li className='py-2'>
                  <div className='flex items-center'>
                    <div>
                      <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3'>
                        <i className='fab fa-html5'></i>
                      </span>
                    </div>
                    <div>
                      <h4 className='text-blueGray-500'>simple</h4>
                    </div>
                  </div>
                </li>
                <li className='py-2'>
                  <div className='flex items-center'>
                    <div>
                      <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3'>
                        <i className='far fa-paper-plane'></i>
                      </span>
                    </div>
                    <div>
                      <h4 className='text-blueGray-500'>Growth</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-20 pb-20'>
        <div className='flex flex-wrap justify-center text-center mb-24'>
          <div className='w-full lg:w-6/12 px-4'>
            <h2 className='text-4xl font-semibold  text-blueGray-700'>
              Leadership
            </h2>
            <p className='text-lg leading-relaxed m-4 text-blueGray-500'>
              Drawing on decades of experience across industries, our leadership
              drives Coinyourway strategic vision.
            </p>
          </div>
        </div>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8'>
            <div className='px-6'>
              <img
                className='object-center object-cover rounded-full h-36 w-36 mx-auto'
                src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                alt='lady'
              />
              <div className='pt-6 text-center'>
                <h5 className='text-xl font-bold text-blueGray-700'>
                  John Doe
                </h5>
                <p className='mt-1 text-sm text-blueGray-400 uppercase font-semibold'>
                  {' '}
                  Position
                </p>
                <div className='mt-6'>
                  <button
                    className='bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                  >
                    <i className='fab fa-twitter'></i>
                  </button>
                  <button
                    className='bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                  >
                    <i className='fab fa-facebook-f'></i>
                  </button>
                  <button
                    className='bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                  >
                    <i className='fab fa-dribbble'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8'>
            <div className='px-6'>
              <img
                className='object-center object-cover rounded-full h-36 w-36 mx-auto'
                src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                alt='girl '
              />
              <div className='pt-6 text-center'>
                <h5 className='text-xl font-bold text-blueGray-700'>
                  Jane Doe
                </h5>
                <p className='mt-1 text-sm text-blueGray-400 uppercase font-semibold'>
                  Position
                </p>
                <div className='mt-6'>
                  <button
                    className='bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                  >
                    <i className='fab fa-google'></i>
                  </button>
                  <button
                    className='bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                  >
                    <i className='fab fa-facebook-f'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8'>
            <div className='px-6'>
              <img
                className='object-center object-cover rounded-full h-36 w-36 mx-auto'
                src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                alt=' a person s'
              />
              <div className='pt-6 text-center'>
                <h5 className='text-xl font-bold text-blueGray-700'>
                  John Doe
                </h5>
                <p className='mt-1 text-sm text-blueGray-400 uppercase font-semibold'>
                  Corporate Relation
                </p>
                <div className='mt-6'>
                  <button
                    className='bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                  >
                    <i className='fab fa-google'></i>
                  </button>
                  <button
                    className='bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                  >
                    <i className='fab fa-twitter'></i>
                  </button>
                  <button
                    className='bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                  >
                    <i className='fab fa-instagram'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8'>
            <div className='px-6'>
              <img
                className='object-center object-cover rounded-full h-36 w-36 mx-auto'
                src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                alt='a person g'
              />
              <div className='pt-6 text-center'>
                <h5 className='text-xl font-bold text-blueGray-700'>
                  John Doe
                </h5>
                <p className='mt-1 text-sm text-blueGray-400 uppercase font-semibold'>
                  CTO
                </p>
                <div className='mt-6'>
                  <button
                    className='bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                  >
                    <i className='fab fa-dribbble'></i>
                  </button>
                  <button
                    className='bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                  >
                    <i className='fab fa-google'></i>
                  </button>
                  <button
                    className='bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                  >
                    <i className='fab fa-twitter'></i>
                  </button>
                  <button
                    className='bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                  >
                    <i className='fab fa-instagram'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
