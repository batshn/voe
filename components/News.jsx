import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {BsArrowRight} from 'react-icons/bs'

const News = () => {
  return (
    <div className='w-full p-6 my-10'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <div className='justify-items-center mx-auto'>
                <h2 className='py-6 uppercase'>Шинэ мэдээлэл</h2>
            </div>
            <div className='grid md:grid-cols-3'>
                {/*-- First One--*/}
                <div className='p-6'>
                    <Image className='rounded-xl brightness-75'
                        src='/../public/assets/News/nero.jpg'
                        width='410'
                        height='330'
                        alt='/'
                    />
                    <div className='py-6 justify-between'>
                        <h3> Неоролинкийн өрсөлдөгч</h3>
                        <p className='py-6 text-justify'>
                            Элон Маскын Неоролинк (Neorolink innovation)-ийн өрсөлдөгч, БНХАУ-ын тархи-компьютерийн холбоос судалдаг гарааны ... 
                        </p>
                        <Link href='/#'>
                            <p className='text-[#F78E76]  hover:text-[#343a40] uppercase text-sm cursor-pointer flex'>
                                Read more
                                <BsArrowRight className='ml-4 m-auto text-lg'/> 
                            </p>
                        </Link>
                    </div>
                </div>

                {/*-- Second One--*/}
                <div className='p-6 '>
                    <Image className='rounded-xl brightness-75'
                        src='/../public/assets/News/bank.jpg'
                        width='410'
                        height='330'
                        alt='/'
                    />
                    <div className='py-6 justify-between'>
                        <h3>Open Banking</h3>
                        <p className='py-6 text-justify'>
                            Сүүлийн хэдэн жил дижитал шилжилт нэн шаардлагатай талаар олон нийтлэл болон арга хэмжээнүүд хийгдэх болсон
                        </p>
                        <Link href='/#'>
                            <p className='text-[#F78E76]  hover:text-[#343a40] uppercase text-sm cursor-pointer flex'>
                                Read more
                                <BsArrowRight className='ml-4 m-auto text-lg'/> 
                            </p>
                        </Link>
                    </div>
                </div>

                {/*-- Third One--*/}
                <div className='p-6 '>
                    <Image className='rounded-xl brightness-75'
                        src='/../public/assets/News/airbus.jpg'
                        width='410'
                        height='330'
                        alt='/'
                    />
                    <div className='py-6 justify-between'>
                        <h3>Шингэн устөрөгч</h3>
                        <p className='py-6 text-justify'>
                            Нисэхийн салбарт ашиглаж байгаа уламжлалт түлш болох керосин (ТС-1, Т-1, Jet-A, Jet-B зэрэг) нь их хэмжээний болон ...
                        </p>
                        <Link href='/#'>
                            <p className='text-[#F78E76]  hover:text-[#343a40] uppercase text-sm cursor-pointer flex'>
                                Read more
                                <BsArrowRight className='ml-4 m-auto text-lg'/> 
                            </p>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default News