import React from 'react'
import '../Styles/LeftMenu.css'
import { FaSpotify, FaEllipsisH } from 'react-icons/fa'
import { BiSearchAlt } from 'react-icons/bi'
import Menu from './Menu'
import MenuList from './MenuList'
import MenuPlaylist from './MenuPlaylist'
import PlayList from './PlayList'
import TrackMenu from './TrackMenu'

const LeftMenu = () => {
  return (
    <div className='leftMenu'>
      <div className='logoContainer'>
        <i><FaSpotify /></i>
        <span>Spotify</span>
        <i><FaEllipsisH /></i>
      </div>
      <div className='searchBox'>
        <input type="text" placeholder='Search...' />
        <i><BiSearchAlt /></i>
      </div>
      <Menu title={'Menu'} menuObject={MenuList} />
      <MenuPlaylist playlist={PlayList} />
      <TrackMenu />
    </div>
  )
}

export default LeftMenu