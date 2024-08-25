import { assets } from '@public/assets'
import Image from 'next/image'
import React from 'react'

const Policy = () => {
  return (
    <div className='w-full items-center flex flex-row justify-between px-32 my-16'>
      <div className='flex flex-col items-center justify-center text-center'>
        <Image width={80} height={80} alt='icon' src={assets.exchange_icon}/>
        <p className='mt-4 font-extrabold text-xl'>Easy Exchange Policy</p>      
        <p className=' text-gray-400 text-sm'>hassle free exchange policy</p>      
      </div>
      
      <div className='flex flex-col items-center justify-center text-center'>
        <Image width={80} height={80} alt='icon' src={assets.quality_icon}/>
        <p className='mt-4 font-extrabold text-xl'>7 Days Return Policy</p>      
        <p className=' text-gray-400 text-sm'>We provide 7 days free return policy</p>  
      </div>
      
      <div className='flex flex-col items-center justify-center text-center'>
        <Image width={70} height={70} alt='icon' src={assets.support_img}/>
        <p className='mt-4 font-extrabold text-xl'>Best Customer Support</p>      
        <p className=' text-gray-400 text-sm'>24/7 customer support</p>  
      </div>
    </div>
  )
}

export default Policy