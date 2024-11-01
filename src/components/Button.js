import React from 'react'

function Button({name}) {
  return (
    <div>
     <button className='rounded-lg px-3 py-2 m-2 bg-gray-200'>{name}</button>
    </div>
  )
}

export default Button
