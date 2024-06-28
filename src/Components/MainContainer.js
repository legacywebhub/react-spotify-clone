import React from 'react'
import '../Styles/MainContainer.css'
import Banner from './Banner'
import Navigation from './Navigation'
import AudioList from './AudioList'

const MainContainer = () => {
  return (
    <div className='mainContainer'>
      <Banner/>
      <Navigation />
      <AudioList />
    </div>
  )
}

export default MainContainer