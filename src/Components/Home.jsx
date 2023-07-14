import React from 'react'
import homebg from '../assets/Img/homebg.png'
import Header from '../assets/Header'

function Home() {
  return (
    <div style={{backgroundImage: `url(${homebg})`}} className='relative w-full h-screen bg-top bg-no-repeat '>
        <Header/>
    </div>
  )
}

export default Home