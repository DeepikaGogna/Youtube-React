import React from 'react'
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
  //Early return Pattern
  if(!isMenuOpen) return null
  return (
    <div className='p-5 shadow-lg'>
      <ul>
      <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>subscriptions</li>
      </ul>
      <h1 className='font-bold pt-4'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shooping</li>
        <li>Movies</li>
        <li>Music</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Courses</li>
      </ul>
      <h1 className='font-bold pt-4'>More From YouTube</h1>
      <ul>
        <li>YouTube Premium</li>
        <li>YouTube Studio</li>
        <li>YouTube Music</li>
        <li>YouTube Kids</li>
        </ul>
    </div>
  )
}

export default Sidebar
