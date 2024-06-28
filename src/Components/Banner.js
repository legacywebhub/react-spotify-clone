import React from 'react'
import BannerImage from '../Images/background.jpg'
import { FaEllipsisH, FaCheck, FaCheckCircle, FaHeadphones } from 'react-icons/fa'

const Banner = () => {
  return (
    <div className='banner'>
        <img className='bannerImg' src={BannerImage} alt='' />

        <div className='bannerContent'>
          <div className='top'>
              <div>Home<span> / Popular Artists</span></div>
              <i><FaEllipsisH /></i>
          </div>
          <div className='bottom'>
              <div className='left'>
                  <span className="artist">
                    <h2 className='artistName'>A-ha</h2>
                    <i className='verified'><FaCheckCircle /></i>
                  </span>
                  <span className="artistDetail">
                    <span className='artistNumbers'><i><FaHeadphones /></i> 11,129,324</span> Monthly Listeners
                  </span>
              </div>

              <div className='right'>
                  <button className='playBtn'>Play</button>
                  <button className='followBtn'><FaCheck /> Following</button>
              </div>
          </div>
        </div>

        <div className="bannerTopLayer"></div>
        <div className="bannerBottomLayer"></div>
    </div>
  )
}

export default Banner