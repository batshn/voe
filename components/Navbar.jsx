import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='w-full h-32 shadow-sm z-[100]'>
        <div className='bg-[#81b29a] justify-between items-center py-2 px-4' >
            <p className='text-xs text-[#fff]'>We have soluton if you have a problem</p> 
        </div>
        
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 pb-8'>
            <Image 
                    src='/../public/assets/logo.png' 
                    width='65' 
                    height='65'
            />

            <div>
                <ul className='md:flex'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:text-[#e29578] hover:border-t font-medium'>Эхлэл</li>
                    </Link> 
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:text-[#e29578] hover:border-t font-medium'>Бидний тухай</li>
                    </Link> 
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:text-[#e29578] hover:border-t font-medium'>Мэдээлэл</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:text-[#e29578] hover:border-t font-medium'>Зөвлөгөө</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:text-[#e29578] hover:border-t font-medium'>Үйлчилгээ</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:text-[#e29578] hover:border-t font-medium'>Видео</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:text-[#e29578] hover:border-t font-medium'>Холбоо барих</li>
                    </Link>
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar