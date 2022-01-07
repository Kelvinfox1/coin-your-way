import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const Homescreen = () => {
  const [openTab, setOpenTab] = useState(1)
  const [coinData, setCoinData] = useState([])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  console.log(errors)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      )

      setCoinData(result.data)
    }

    fetchData()
  }, [])

  return (
    <>
      <div className='bg-cyan-50 md:overflow-hidden '>
        <div className='px-4 py-16'>
          <div className='container m-auto px-6'>
            <div className='lg:flex justify-between items-center'>
              <div className='lg:w-6/12 lg:p-0 p-7'>
                <h1 className='font-bold text-gray-700 text-xl sm:text-2xl md:text-5xl leading-tight mb-6'>
                  A simple and smart way to buy and sell Cryptocurrency that
                  will help grow
                </h1>
                <p className='text-gray-600 md:text-xl md:px-18'>
                  Trusted by over 3,100,000 people across 188 countries.
                </p>
              </div>
              <div className='lg:w-5/12 order-2'>
                <ul
                  className='flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row'
                  role='tablist'
                >
                  <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
                    <a
                      className={
                        'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                        (openTab === 1
                          ? 'text-white bg-pink-600'
                          : 'text-pink-600 bg-white')
                      }
                      onClick={(e) => {
                        e.preventDefault()
                        setOpenTab(1)
                      }}
                      data-toggle='tab'
                      href='#link1'
                      role='tablist'
                    >
                      <h2>BUY</h2>
                    </a>
                  </li>
                  <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
                    <a
                      className={
                        'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                        (openTab === 2
                          ? 'text-white bg-pink-600'
                          : 'text-pink-600 bg-white')
                      }
                      onClick={(e) => {
                        e.preventDefault()
                        setOpenTab(2)
                      }}
                      data-toggle='tab'
                      href='#link2'
                      role='tablist'
                    >
                      SELL
                    </a>
                  </li>
                </ul>
                <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded'>
                  <div className='px-4 py-5 flex-auto'>
                    <div className='tab-content tab-space'>
                      <div
                        className={openTab === 1 ? 'block' : 'hidden'}
                        id='link1'
                      >
                        <form
                          className='w-full max-w-lg m-auto py-2 mt-2 px-10'
                          onSubmit={handleSubmit(onSubmit)}
                        >
                          <label className='text-gray-600 font-medium'>
                            {' '}
                            <h1 className='inline text-2xl font-semibold leading-none'>
                              Pay
                            </h1>
                          </label>
                          <select
                            className='block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none my-5 '
                            {...register}
                          >
                            <option value='Shop'>500</option>
                          </select>
                          <label className='text-gray-600 font-medium'>
                            <h1 className='inline text-2xl font-semibold leading-none pt-10'>
                              Recieve
                            </h1>
                          </label>
                          <select
                            className='block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none my-5'
                            {...register}
                          >
                            {coinData.map((coin) => (
                              <option
                                value={coin.name}
                                key={coin.market_cap_rank}
                              >
                                {(500 / coin.current_price).toFixed(7) +
                                  coin.name}
                              </option>
                            ))}
                          </select>

                          <button
                            className='mt-4 w-full bg-blue-400 hover:bg-blue-600 text-green-100 border py-3 px-6 font-semibold text-md rounded-md'
                            type='submit'
                          >
                            Buy
                          </button>
                        </form>
                      </div>
                      <div
                        className={openTab === 2 ? 'block' : 'hidden'}
                        id='link2'
                      >
                        <form
                          className='w-full max-w-lg m-auto py-2 mt-2 px-10'
                          onSubmit={handleSubmit(onSubmit)}
                        >
                          <label className='text-gray-600 font-medium'>
                            {' '}
                            <h1 className='inline text-2xl font-semibold leading-none'>
                              Pay
                            </h1>
                          </label>
                          <select
                            className='block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none my-5 '
                            {...register}
                          >
                            <option value='Shop'>Shop</option>
                            <option value='Cafeteria'>Cafeteria</option>
                          </select>
                          <label className='text-gray-600 font-medium'>
                            <h1 className='inline text-2xl font-semibold leading-none pt-10'>
                              Recieve
                            </h1>
                          </label>
                          <select
                            className='block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none my-5'
                            {...register}
                          >
                            <option value='Shop'>Shop</option>
                            <option value='Cafeteria'>Cafeteria</option>
                          </select>

                          <button
                            className='mt-4 w-full bg-blue-400 hover:bg-blue-600 text-green-100 border py-3 px-6 font-semibold text-md rounded-md'
                            type='submit'
                          >
                            Buy
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <svg
          className='fill-current bg-cyan-50 text-white hidden md:block'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path
            fillOpacity='1'
            d='M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'
          ></path>
        </svg>
      </div>
      <div className='grid grid-cols-3 gap-4 px-8'>
        <div className=' '>
          <div className='flex'>
            <img
              alt='mountain'
              className=' object-scale-down h-48 w-96'
              src='https://raw.githubusercontent.com/Kelvinfox1/coin-your-way/38de127625ed674a33b042a9d0576cbeb6b853ae/src/payment.svg'
            />
            <div id='body' class='flex flex-col ml-5'>
              <h4 id='name' class='text-xl font-semibold mb-2'>
                Local Payment Option
              </h4>
              <p id='job' class='text-gray-800 mt-2'>
                Buy with M-pesa, paypal or bank transfer
              </p>
              <div class='flex mt-5'></div>
            </div>
          </div>
        </div>
        <div className=''></div>
        <div className=''></div>
        <div className=''></div>
        <div className=''></div>
        <div className=''></div>
      </div>
    </>
  )
}

export default Homescreen
