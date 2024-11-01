import React from 'react'

const ChatMessage = ({profileImageUrl, name, message}) => {
  return (
    <div className='flex items-center'>
      <img className="w-6 my-2 rounded-lg" 
      src={profileImageUrl} 
      alt="" />
    <span className='font-bold px-2 text-xs'>{name}</span>
    <span className='text-xs'>{message}</span>
    </div>
  )
}

export default ChatMessage
