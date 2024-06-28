import React, { useState, useEffect } from 'react'
import MusicPlayer from './MusicPlayer'
import SongImage from '../Images/background.jpg'
import { FaHeadphones, FaClock, FaRegHeart, FaHeart } from 'react-icons/fa'
import Songs from './Songs'

const AudioList = () => {
    let [songs, setSongs] = useState(Songs);
    let [defaultSong, setDefaultSong] = useState(Songs[0]);
    let [songImg, setSongImg] = useState(defaultSong.imgSrc);

    useEffect(()=>{
        let allSongs = document.querySelectorAll('.song');

        allSongs.forEach(thisSong => thisSong.addEventListener('click', ()=> {
            allSongs.forEach((song)=>{song.classList.remove('active');})
            thisSong.classList.add('active');
            setDefaultSong(thisSong);
        }))

    }, [])

    let changeFavorite = (id) => {
        songs.forEach((song)=>{
            if (song.id === id) {
                song.favourite = !song.favourite
            }
        });
        setSongs([...Songs]);
    }

    return (
        <>
        <div className='audioMenu'>
            <p className="title">
                My list <span>({songs.length} songs)</span>
            </p>

            <div className='songsContainer'>
                <div className="songs">
                    {
                        songs && songs.map((song, index)=>(
                            <div className='song' key={index}>
                                <div className='songTitle'>
                                    <p className="songsCount">#{song?.id}</p>
                                    <img className='songImage' src={SongImage} alt="" />
                                    <p>Waiting For The End</p>
                                </div>
                                <div className='songArtist'>
                                    Linking Park
                                </div>
                                <div className="songHits">
                                    <span><i><FaHeadphones /></i> 96,112,347</span>
                                    <span><i><FaClock /></i> 3:04</span>
                                    <span onClick = {() => changeFavorite(song.id)}>
                                    {
                                        song.favourite ? (<i><FaHeart /></i>) : (<i><FaRegHeart /></i>)
                                    }
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        <MusicPlayer song={defaultSong} songImg={songImg} />
        </>
    )
}

export default AudioList