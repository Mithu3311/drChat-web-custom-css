import React from 'react'
import Image from 'next/image'
import Bg from '@/app/components/doctorbg.jpg'

const Home = () => {
  return (
    <>
    <h2>We Listen and act</h2>
    <Image className='image' src={Bg} alt='blur'></Image>
    <h2>From us you can enjoy the following:</h2>

    <div className='text-box'>
      <div className='in-box'>
        <h3>A great working Environment</h3>
        <p>We dont want you dread Mondays or coming to work daily Thats why we create a safe and productive environment where we can achieve your full potential</p>
      </div>
    </div>
    </>
  )
}

export default Home