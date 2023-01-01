import React from 'react'
import Image from 'next/image'

const News = () => {
  return (
    <div className='w-full p-6 my-10'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <div className='justify-items-center mx-auto'>
                <h2 className='py-6 uppercase'>Шинэ мэдээлэл</h2>
            </div>
            <div className='grid md:grid-cols-3'>
                {/*-- First One--*/}
                <div className='p-6 hover:scale-105 ease-in duration-300'>
                    <Image
                        src='/../public/assets/News/imgOne.jpg'
                        width='410'
                        height='330'
                        alt='/'
                    />
                    <div className='py-4'>
                        <h3>Ус зайлуулах хоолой</h3>
                        <p className='py-6'>
                            Lorem ipsum dolor sit amet, conse ctetue adipiscing elit, sed diam nonum nibhie.
                        </p>
                    </div>
                </div>

                {/*-- Second One--*/}
                <div className='p-6 hover:scale-105 ease-in duration-300'>
                    <Image
                        src='/../public/assets/News/imgOne.jpg'
                        width='410'
                        height='330'
                        alt='/'
                    />
                    <div>
                        <h3>Title</h3>
                        <p>
                            Text aread
                        </p>
                    </div>
                </div>

                {/*-- Third One--*/}
                <div className='p-6 hover:scale-105 ease-in duration-300'>
                    <Image
                        src='/../public/assets/News/imgOne.jpg'
                        width='410'
                        height='330'
                        alt='/'
                    />
                    <div>
                        <h3>Title</h3>
                        <p>
                            Text aread
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default News