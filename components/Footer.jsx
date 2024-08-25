import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='px-40 mt-40'>
      <p className='w-full h-[0.5px] bg-gray-500 my-4 opacity-40'></p>
      <div className='grid grid-cols-[2fr_1fr_1fr]'>
        <div className='flex flex-col'>
          <div className='w-2/4 flex justify-center'><Image className='' src={'ll.svg'} height={90} width={90} alt='logo'/></div>
          <p className='w-2/3 pl-8 pr-40 mt-4 opacity-50'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, laboriosam! Libero, sit quo. Possimus eligendi rem earum voluptatem numquam officia deleniti aut cupiditate illum vel quidem vero, nihil id maxime?</p>
        </div>
        
        <div className='mt-7  h-full '>
          <h1 className='text-3xl'>COMPANY</h1>
          <ul className='flex flex-col opacity-50 gap-3 mt-7 cursor-pointer'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        
        <div className='mt-7  h-full '>
          <h1 className='text-3xl'>GET IN TOUCH</h1>
          <ul className='flex flex-col gap-3 opacity-50 mt-7 cursor-pointer'>
            <li>+98 555 555 555</li>
            <li>slowlanewave@gmail.com</li>
          </ul>
        </div>

      </div>
      <p className='w-full h-[0.5px] bg-gray-500 my-4 opacity-40'></p>
      <div className='py-4'>
        <p className=' text-center '>Copyright 2024 @ MehrabDev.ir-All Right Reserver.</p>
      </div>
    </div>
  )
}

export default Footer