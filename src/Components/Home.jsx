import React from 'react'
import homebg from '../assets/Img/homebg.png'
import Header from '../assets/Header'

function Home() {
  return (
    <div id='Home' style={{backgroundImage: `url(${homebg})`}} className='relative w-full px-3 md:px-10 lg:px-10 xl:px-36 h-screen bg-top bg-no-repeat '>
        <Header/>
    </div>
  )
}

export default Home