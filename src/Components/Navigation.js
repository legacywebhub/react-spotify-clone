import React from 'react'
import { FaUsers } from 'react-icons/fa'

const Navigation = () => {
  return (
    <div className='navigationContainer'>
        <ul>
            <li><a href="javascript.void(0)">Popular</a></li>
            <li><a href="javascript.void(0)">Albums</a></li>
            <li><a href="javascript.void(0)">Songs</a></li>
            <li><a href="javascript.void(0)">Fans</a></li>
            <li><a href="javascript.void(0)">About</a></li>
        </ul>
        <div>
            <i><FaUsers />12.3M Followers</i>
        </div>
    </div>
  )
}

export default Navigation