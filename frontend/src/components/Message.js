import React from 'react'

const Message = ({ color, children }) => {
  return (
    <div
      className={
        ' rounded-lg py-5 px-6 text-base mb-3' +
        (color === 'red'
          ? 'bg-red-100 text-red-700'
          : 'text-blue-700 bg-blue-100 ')
      }
      role='alert'
    >
      {children}
    </div>
  )
}

export default Message
