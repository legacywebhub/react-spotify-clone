import React, { useState } from 'react'
import SongImage from '../Images/background.jpg'
import {
    FaStepBackward,
    FaBackward,
    FaStepForward,
    FaForward,
    FaPlay,
    FaPause,
    FaRegHeart,
    FaHeart,
    FaShareAlt
} from 'react-icons/fa'
import { BsDownload } from 'react-icons/bs'



const MusicPlayer = ({ song, songImg }) => {
    const [isFavorite, setIsFavorite] = useState(song.favourite);
    const [isPlaying, setIsPlaying] = useState(false);

    let handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    }

    let handleFavorite = () => {
        setIsFavorite(!isFavorite);
    }

    return (
        <div className='musicPlayer'>
            <div className='musicImage'>
                <img src={SongImage} alt="" />
            </div>

            <div className='musicControls'>
                <div className="top">
                    <div className="left" onClick={()=>handleFavorite()}>
                        <i>
                            {
                                isFavorite ? <FaHeart /> : <FaRegHeart />
                            }
                        </i>
                        <i><BsDownload /></i>
                    </div>
                    <div className="middle">
                        <i><FaStepBackward /></i>
                        <i><FaBackward /></i>
                        <i className='playPause' onClick={()=>handlePlayPause()}>
                            {
                                isPlaying ? <FaPause /> : <FaPlay />
                            }
                        </i>
                        <i><FaForward /></i>
                        <i><FaStepForward /></i>
                    </div>
                    <div className="right">
                        <i><FaShareAlt /></i>
                    </div>
                </div>

                <div className="bottom">
                    <span className='currentTime'>00:00</span>
                    <input type="range" className="musicProgressBar" />
                    <span className="duration">3:04</span>   
                </div>
            </div>
        </div>
    )
}

export default MusicPlayer