import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ReactPlayer from "react-player"

const VContent = () => {
  return (
    <div className='h-80 bg-[#000] flex items-center justify-center text-white'>
        <div className='max-w-5xl'>
            <Swiper
                spaceBetween={100}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide><ReactPlayer
                    url="https://www.youtube.com/watch?v=Rq5SEhs9lws"
                    controls='false'
                    width={250}
                    height={150}
                    light='true'
                /></SwiperSlide>
                <SwiperSlide><ReactPlayer
                    url="https://www.youtube.com/watch?v=Rq5SEhs9lws"
                    controls='false'
                    width={250}
                    height={150}
                /></SwiperSlide>
                <SwiperSlide><ReactPlayer
                    url="https://www.youtube.com/watch?v=Rq5SEhs9lws"
                    controls='false'
                    width={250}
                    height={150}
                /></SwiperSlide>
                <SwiperSlide><ReactPlayer
                    url="https://www.youtube.com/watch?v=Rq5SEhs9lws"
                    controls='false'
                    width={250}
                    height={150}
                /></SwiperSlide>

                
            </Swiper>
        </div>        
    </div>
  )
}

export default VContent