import React from 'react'
import bgImg from '../public/assets/bg-head.jpg'
import Image from 'next/image'

const Intro = () => {
  return (
    <div className='w-full flex items-center'>
        <div className='w-screen  h-auto'>
            <Image className='md:w-full' src={bgImg} />
        </div>
    </div>
  )
}

export default Intro