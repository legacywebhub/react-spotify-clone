import React from 'react'
import Track from '../Images/track.png'
import { FaDesktop } from 'react-icons/fa'
import { BsMusicNoteList, BsFillVolumeUpFill } from 'react-icons/bs'

const TrackMenu = () => {
  return (
    <div className='trackMenuContainer'>
        <div className='trackTop'>
            <div className="trackIcon">
                <img src={Track} alt="Track Icon" />
            </div>
            <div className='trackDetail'>
                <p className="trackTitle">Believe</p>
                <p className="trackArtist">Meek Mill ft. Justin Timberlake</p>
            </div>
        </div>
        <div className='trackBottom'>
            <i><BsFillVolumeUpFill /></i>
            <input type="range" />
            <i><BsMusicNoteList /></i>
            <i><FaDesktop /></i>
        </div>
    </div>
  )
}

export default TrackMenu