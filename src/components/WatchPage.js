import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utilis/appSlice';
import { useSearchParams } from 'react-router-dom';
import MostPopularVideos from './MostPopularVideos';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(closeMenu())
  },[])
  return (
      <div className='flex flex-col'>
        <div className='flex px-5 w-full'>
          <div className=''>
          <iframe 
      width="1000" 
      height="500" src={"https://www.youtube.com/embed/"+searchParam.get("v") } 
      title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> 
        <CommentContainer />
      </div>

        <div className='w-full'>
          <LiveChat />
          <MostPopularVideos/>
        </div>

    </div>
    </div>
  )
}

export default WatchPage
