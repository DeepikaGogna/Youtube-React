import React, { useEffect, useState } from 'react'
import { CHILD_COMMENTS } from '../utilis/constant';

const CommentReplies = ({commentId}) => {
    const [replies, setReplies] = useState([])
    useEffect(() => {
        const getChildComments = async() => {
            const url  = CHILD_COMMENTS.replace("COMMENT_ID", commentId);
            const data = await fetch(url);
            const json = await data.json()
            setReplies(json.items);
        }
        getChildComments()
    },[commentId]);
 
  return (
    <div>
        {replies &&
        replies.map((reply) => (
          <div className='flex shadow-sm bg-gray-100 p-2 my-2'>
      <img className="w-12 h-12" 
          src={reply.snippet.authorProfileImageUrl} alt="user" />
          <div className='px-3' key={reply.id}>
            <p className='font-bold text-sm'>{reply.snippet.authorDisplayName}</p>
            <p className='text-xs'>{reply.snippet.textDisplay}</p>
          </div></div>
        )) 
    }
    </div>
  )
}

export default CommentReplies
