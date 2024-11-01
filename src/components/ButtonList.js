import React from 'react'
import Button from './Button'
const ButtonList = () => {
  const lists = ["All", "Gaming", "Mixes", "Music", "Live", "Cricket", "Cooking" ]
  return (
    <div className='flex'>{
      lists.map((list) => {
        return  <Button key={list} name={list}  /> 
      })
    }
    </div>
  )
}

export default ButtonList
