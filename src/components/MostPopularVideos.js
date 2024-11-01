import React, { useEffect, useState } from 'react'
import { MOST_POPULAR_VIDEO } from '../utilis/constant';
import WatchSidebar from './WatchSidebar';
import { Link } from 'react-router-dom';

const MostPopularVideos = () => {
    const [poularVideos, setPoularVideos] = useState();
    const getMostPopularVideos = async() => {
        const data = await fetch(MOST_POPULAR_VIDEO);
        const json = await data.json();
        setPoularVideos(json.items)
      }
      useEffect(()=> {
        getMostPopularVideos()
      },[])
  return (
    <div>
     { poularVideos &&   poularVideos.map((video) =>  
     <Link key={video.id} to={"/watch?v="+video.id} >
      <WatchSidebar info={video} /></Link>
      )} 
    </div>
  )
}

export default MostPopularVideos
