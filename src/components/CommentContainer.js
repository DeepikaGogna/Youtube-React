import React, { useEffect, useState } from 'react'
import Comment from './Comment'
import CommentList from './CommentList'
import {  useSearchParams } from 'react-router-dom'
import { YOUTUBE_COMMENTS } from '../utilis/constant'
const CommentContainer = () => {
  const [comments, setComments] = useState([]);
  const [searchParam]  = useSearchParams();
  useEffect(()=> {
    getVideoComments()
  },[])
  const getVideoComments = async() => {
      const url  = YOUTUBE_COMMENTS.replace("VIDEO_ID", searchParam.get("v"));
      const data = await fetch(url);
      const json = await data.json()
      setComments(json.items);
  }
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments: </h1>
        {comments && <CommentList comments={comments} />}
    </div>
  )
}

export default CommentContainer
