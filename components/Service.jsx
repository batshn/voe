import React from 'react'
import Image from 'next/image'

const Service = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
           

            <div className='grid md:grid-cols-7'>
                <div className='text-right col-span-2'>
                    <div className='py-6'>
                        <h3 >Зөвлөгөө</h3>
                        <p className='mt-2'> йоыхбөорхый өохыбөоыхб өоыбхө оыбхөобырө хбоөхбы оөхбыөо </p>
                    </div>
                    <div className='py-6'>
                        <h3>Инженерийн шийдэл</h3>
                        <p className='mt-2'> йоыхбөорхый өохыбөоыхб өоыбхө оыбхөобырө хбоөхбы оөхбыөо </p>
                    </div>
                    <div className='py-6'>
                        <h3>Сургалт</h3>
                        <p className='mt-2'> йоыхбөорхый өохыбөоыхб өоыбхө оыбхөобырө хбоөхбы оөхбыөо </p>
                    </div>
                </div>

                <div className='mx-auto col-span-3'>
                    <Image className='rounded-xl'
                            src='/../public/assets/service.jpg'
                            width='410'
                            height='330'
                            alt='/'
                        />
                </div>

                <div className='col-span-2'>
                    <div className='py-6'>
                        <h3>Үнэлгээ</h3>
                        <p className='mt-2'> йоыхбөорхый өохыбөоыхб өоыбхө оыбхөобырө хбоөхбы оөхбыөо </p>
                    </div>
                    <div className='py-6'>
                        <h3>Аудит</h3>
                        <p className='mt-2'> йоыхбөорхый өохыбөоыхб өоыбхө оыбхөобырө хбоөхбы оөхбыөо </p>
                    </div>
                    <div className='py-6'>
                        <h3>Төсөл</h3>
                        <p className='mt-2'> йоыхбөорхый өохыбөоыхб өоыбхө оыбхөобырө хбоөхбы оөхбыөо </p>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Service