import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { BsMusicNoteList, BsTrash } from 'react-icons/bs'


function MenuPlaylist({ playlist }) {
  return (
    <div className='playlistContainer'>
        <div className='playlistTitle'>
            <span>Playlist</span>
            <i><FaPlus /></i>
        </div>

        <div className='playlistScrollContainer'>
            {
                playlist && playlist.map((song)=>(
                    <div key={song.id}>
                        <i><BsMusicNoteList /></i>
                        <span>{song.name}</span>
                        <i><BsTrash /></i>
                    </div>
                ))
            }
        </div>

        <hr />
    </div>
  )
}

export default MenuPlaylist